// External Library imports
import { format, formatDistanceToNow } from 'date-fns';
import { replace } from 'lodash';
import numeral from 'numeral';
import { Signer } from '../types/block';
import { ethers } from 'ethers';

export function fDate(date) {
  return format(new Date(date), 'dd MMMM yyyy');
}

export function fDateTime(date) {
  return format(new Date(date), 'dd MMM yyyy HH:mm');
}

export function fDateTimeSuffix(date) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p');
}

export function fToNow(date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
}

export function fCurrency(number) {
  return numeral(number).format(Number.isInteger(number) ? '$0,0' : '$0,0.00');
}

export function fPercent(number) {
  return numeral(number / 100).format('0.0%');
}

export function fNumber(number) {
  return numeral(number).format();
}

export function fShortenNumber(number) {
  return replace(numeral(number).format('0.00a'), '.00', '');
}

export function fData(number) {
  return numeral(number).format('0.0 b');
}

export default function getDatesArray({
  start,
  end,
  interval,
}: {
  start: Date | string;
  end: Date | string;
  interval: number;
}) {
  for (
    var dateArray: Date[] = [], dt = new Date(start);
    dt <= new Date(end);
    dt.setDate(dt.getDate() + interval)
  ) {
    dateArray.push(new Date(dt));
  }

  const date = dateArray[dateArray.length - 1];
  if (new Date(date).getDate() !== new Date(end).getDate()) {
    dateArray.push(new Date(end));
  }

  return dateArray;
}

export function isErrorWithMessage(
  error: unknown
): error is { message: string } {
  return typeof error === 'object' && error !== null && 'message' in error;
}

export function getValidatorNode(blockDataAsJson) {
  const nodes = buildNodeVotes(blockDataAsJson);
  return nodes[0]?.node ?? '';
}

export function centerMaskString(str, len = 15) {
  if (str && str.length > 15) {
    const start = str.substring(0, 7);
    const end = str.substring(str.length - 7);
    return start + '...' + end;
  }
  // If the string is too short, return it as is
  return str;
}

export function rightMaskString(str, len = 13) {
  // Check if the string length is more than 15 to mask the remaining characters
  if (str && str.length > len) {
    const visiblePart = str.substring(0, len);
    const maskedPart = '...';
    return visiblePart + maskedPart;
  }
  // If the string is too short to mask after 15 characters, return it as is
  return str;
}

export function capitalizeStr(string) {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export const convertCaipToAddress = function (
  addressinCAIP: string
): string | null {
  const addressComponent = addressinCAIP.split(':');
  if (addressComponent.length === 3 && addressComponent[0] === 'eip155') {
    return addressComponent[2];
  }
  // Wallet can be in the new caip10 format used in w2w: eip155:walletAddress
  else if (addressComponent.length === 2 && addressComponent[0] === 'eip155') {
    return addressComponent[1];
  } else {
    return addressinCAIP;
  }
};

export function isValidAddress(address: string): boolean {
  return ethers.isAddress(address.toLowerCase());
}

export const caip10ToWallet = (wallet: string) => {
  if (wallet.split(':').length === 2) {
    wallet = wallet.replace('eip155:', '');
    return isValidAddress(wallet) ? wallet : null;
  } else {
    return null;
  }
};

export const convertCaipToObject = (
  addressinCAIP: string
): {
  result: {
    chainId: string | null;
    chain: string | null;
    address: string | null;
  };
} => {
  // Check if the input is a valid non-empty string
  if (!addressinCAIP || typeof addressinCAIP !== 'string') {
    return {
      result: {
        chain: null,
        chainId: null,
        address: null,
      },
    };
  }

  const addressComponent = addressinCAIP.split(':');

  // Handle cases where there are exactly three components (chain, chainId, address)
  if (addressComponent.length === 3) {
    return {
      result: {
        chain: addressComponent[0],
        chainId: addressComponent[1],
        address: addressComponent[2],
      },
    };
  }
  // Handle cases where there are exactly two components (chain, address)
  else if (addressComponent.length === 2) {
    return {
      result: {
        chain: addressComponent[0],
        chainId: null,
        address: addressComponent[1],
      },
    };
  }
  // If the input doesn't match the expected format, return the address only
  else {
    return {
      result: {
        chain: null,
        chainId: null,
        address: addressinCAIP,
      },
    };
  }
};

export const fromNow = (timestamp: number): string => {
  const now = Date.now();
  const diffInSeconds = Math.floor((now - timestamp) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds}s ago`;
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays}d ago`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks}w ago`;
  }

  const diffInMonths = Math.floor(diffInWeeks / 4);
  if (diffInMonths < 12) {
    return `${diffInMonths}m ago`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears}y ago`;
};

function generateRandomHash() {
  const randomPart = Math.random().toString(16).substr(2, 8); // 8 random hex characters
  const timePart = Date.now().toString(16); // Convert current time to hex
  return randomPart + timePart;
}

// Define the type for a vote
interface Vote {
  node: string;
  vote: string;
}

// Function to decode a base64 string
const decodeBase64 = (data: string) => atob(data);

// Function to calculate votes and build the result array
export const buildNodeVotes = (blockDataAsJson: any): Vote[] => {
  try {
    // Step 1: Base64 decode the attesttoken and then JWT decode it
    const decodedBase64 = decodeBase64(
      decodeBase64(blockDataAsJson.attesttoken).slice(3)
    );

    // Retrieve the nodes array from the decoded JWT
    const nodes = JSON.parse(decodedBase64).nodes;

    // Step 2: Initialize the votes array with the correct type
    const votes: Vote[] = [];

    // First node's vote comes from validatordata.vote
    const validatorVote = blockDataAsJson.txobjList[0].validatordata.vote;
    const firstVote = validatorVote === 1 ? 'Accepted' : 'Rejected';

    votes.push({
      node: nodes[0].nodeId,
      vote: firstVote,
    });

    // Step 3: Remaining nodes' votes come from attestordataList
    const attestordataList = blockDataAsJson.txobjList[0].attestordataList;

    attestordataList.forEach((attestor, index) => {
      const vote = attestor.vote === 1 ? 'Accepted' : 'Rejected';

      // Mapping the remaining node IDs
      votes.push({
        node: nodes[index + 1].nodeId, // Index + 1 to skip the first node
        vote: vote,
      });
    });

    return votes;
  } catch (e) {
    return [];
  }
};
