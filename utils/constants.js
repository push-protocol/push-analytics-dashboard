import AllChainIcon from '../public/static/allchain.svg';
import EthereumIcon from '../public/static/ethereum.svg';
import PolygonIcon from '../public/static/polygon.svg';
import OptimismIcon from '../public/static/optimism.svg';
import BSCIcon from '../public/static/bsc.svg';
import ZkevmIcon from '../public/static/zkevm.svg';
import ArbitrumIcon from '../public/static/arbitrum.svg';
import FuseIcon from '../public/static/fuse.svg';
import CyberIcon from '../public/static/cyber.svg';

export const POLL_INTERVAL = 5 * 1000 // 5 seconds
export const PerPageItems = 15

export const ROUTES = {
  HOME: '/home',
  LOGIN: '/login',
  ADMIN: '/admin',
  DASHBOARD: '/dashboard',
  TRANSACTIONS: '/transactions',
  TRANSACTION_DETAILS: '/transactions/:address',
  BLOCKS: '/blocks',
  BLOCKS_DETAILS: '/blocks/:address',
  SEARCH: '/search/:address',
  ERROR: '*',
};

export const DAPP_LINKS = {
  CHANNELS: 'https://app.push.org/#/channels',
  DAPP_CHANNEL: 'https://app.push.org/channels?search=',
  CHATS: 'https://app.push.org/#/chat',
};

export const CHAIN_LIST = [
  {
    image: EthereumIcon,
    chain: 'Ethereum Mainnet',
    value: 'ETH_MAINNET',
  },
  {
    image: PolygonIcon,
    chain: 'Polygon Mainnet',
    value: 'POLYGON_MAINNET',
  },
  {
    image: BSCIcon,
    chain: 'BNB Mainnet',
    value: 'BSC_MAINNET',
  },
  // {
  //   image: OptimismIcon,
  //   chain: 'Optimism Network',
  //   value: 'OPTIMISM_MAINNET',
  // },
  {
    image: ArbitrumIcon,
    chain: 'Arbitrum Mainnet',
    value: 'ARBITRUMONE_MAINNET',
  },
  {
    image: ZkevmIcon,
    chain: 'Polygon zkEVM Mainnet',
    value: 'POLYGON_ZK_EVM_MAINNET',
  },
  {
    image: FuseIcon,
    chain: 'Fuse Mainnet',
    value: 'FUSE_MAINNET',
  },
  {
    image: CyberIcon,
    chain: 'Cyber Mainnet',
    value: 'CYBER_CONNECT_MAINNET',
  },
];

export const CREDENTIALKEYS = {
  LOGINCHECK: 'userLogin',
  TOKEN: 'token',
};

export const DATA_KEYS = {
  SUBSCRIBER_DATA: 'subscriberData',
  NOTIFICATION_DATA: 'notificationData',
  CHANNEL_LIST: 'channelList',
  SUBSCRIBER_CATEGORIES: 'subscriberCategories',
  SUBSCRIBER_VALUES: 'subscriberValues',
  NOTIFICATION_CATEGORIES: 'notificationCategories',
  NOTIFICATION_VALUES: 'notificationValues',
  TOTAL_NOTIFICATIONS: 'totalNotifications',
  TOTAL_SUBSCRIBERS: 'totalSubscribers',
  NOTIFICATIONS_SENT: 'notificationsSent',
  CHAT_USERS: 'chatUsers',
  CHAT_SENT: 'chatSent',
  PUSH_INTEGRATIONS: 'pushIntegrations',
  GOVERNANCE_DATA: 'governanceData',
  PUSH_GRANTS: 'pushGrants',
};

export const TIME_FILTERS = [
  { time: '1D' },
  { time: '7D' },
  { time: '1M' },
  { time: '1Y' },
  { time: 'YTD' },
  { time: 'ALL' },
];
