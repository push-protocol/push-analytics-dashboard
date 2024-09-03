import { useQuery } from 'react-query';
import { POLL_INTERVAL } from '../utils/constants'
import { makeJsonRpcRequest } from '../utils/json-rpc';
import { PerPageItems } from '../utils/constants';

const RPC_ID = 3

type Transaction = {
    txnHash: string;
    ts: number;
    blockHash: string;
    category: string;
    source: string;
    status: string;
    from: string;
    recipients: {
        recipients: { address: string }[];
    };
    txnData: string;
    txnDataAsJson: {
        did: string;
        masterpubkey: string;
        derivedpubkey: string;
        derivedkeyindex: number;
        encderivedprivkey: string;
    };
    sig: string;
};

type Block = {
    blockHash: string;
    blockData: string;
    blockDataAsJson: {
        ts: number;
        txobjList: any[];
        attesttoken: string;
        signersList: {
            sig: string;
            node: string;
            role: number;
        }[];
    };
    blockSize: number;
    ts: number;
    transactions: Transaction[];
    totalNumberOfTxns: number;
};

type ApiResponse = {
    transactions: Transaction[];
};

type inputProps = {
    page?: number | null;
};

export const useLiveTransactions = (props: inputProps) => {
    const getTransactions = () => makeJsonRpcRequest(RPC_ID, 'getTxs', {
        "startTime": Math.floor(Date.now() / 1000),
        "direction": "DESC",
        "pageSize": PerPageItems,
        "page": props.page
    });

    return useQuery({
        queryKey: ['homeLiveTransactions', props],
        queryFn: getTransactions,
        select: (data) => {
            const transactions = data.blocks.flatMap(block =>
                block.transactions.map(tx => ({
                    txHash: tx.txnHash,
                    ts: tx.ts,
                    blockHash: tx.blockHash,
                    category: tx.category,
                    status: tx.status,
                    source: tx.source,
                    from: tx.from,
                    recipients: tx.recipients.recipients.map(recipient => recipient.address)
                }))
            );
            // Sorting transactions by timestamp in descending order
            return {
                transactions: transactions.sort((a, b) => b.ts - a.ts),
                totalPages: data.totalPages,
                lastTs: data.lastTs
            }
        }
    }); 
}