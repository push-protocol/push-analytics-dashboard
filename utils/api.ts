// External Library imports
import axios from 'axios';

// Internal Components imports
import { CREDENTIALKEYS } from './constants';

const API_BASE = 'https://backend.epns.io/apis/v1';
const API_ANODE_BASE = 'https://aa1.dev.push.org/';

export const login = async ({ user, pass }) => {
  try {
    const res = await axios.post(`${API_BASE}/login`, {
      username: user,
      password: pass,
    });
    // console.log('Login', res.data);
    return res.data;
  } catch (e) {
    console.log('Error in login', e);
  }
};

export const getNotifications = async ({
  startDate,
  endDate,
  channel,
  chain,
}) => {
  try {
    const res = await axios.get(`${API_BASE}/analytics/notification`, {
      params: {
        startDate,
        endDate,
        channel,
        source: chain,
      },
    });
    // console.log('notifications', res.data);
    return res.data;
  } catch (e) {
    console.log('Error occured in notification', e);
  }
};

export const getSubscribers = async ({
  startDate,
  endDate,
  channel,
  chain,
}) => {
  try {
    const res = await axios.get(`${API_BASE}/analytics/subscriber`, {
      params: {
        startDate,
        endDate,
        channel,
        source: chain,
      },
    });
    //console.log('subscribers on chain', chain, res.data);
    return res.data;
  } catch (e) {
    console.log('Error occured in subscribers', e);
  }
};

export const getLeaderBoard = async ({ limit, sort, order }) => {
  try {
    const res = await axios.get(`${API_BASE}/analytics/leaderboard/`, {
      params: { limit, sort, order },
    });
    // console.log('leaderboard', res.data);
    return res.data;
  } catch (e) {
    console.log('Error occured in leaderboard', e);
  }
};

export const getGovernanceData = async () => {
  try {
    const res = await axios.get(`${API_BASE}/analytics/governance_data/`);
    // console.log('get data', res.data);
    return res.data;
  } catch (e) {
    console.log('Error occured in fetching governance data', e);
  }
};

export const updateGovernanceData = async ({ data }) => {
  try {
    const res = await axios.post(
      `${API_BASE}/analytics/governance_data/`,
      {
        governance_data: data,
      },
      {
        headers: {
          'x-access-token': String(
            sessionStorage.getItem(CREDENTIALKEYS.TOKEN)
          ),
        },
      }
    );
    // console.log('updated data', res.data);
    return res.data;
  } catch (e) {
    console.log('Error occured in updating governance data', e);
  }
};

export const getChats = async () => {
  try {
    const res = await axios.get(`${API_BASE}/analytics/chat/chats`);

    // console.log('chats res', res.data);
    return res.data;
  } catch (e) {
    console.log('error', e);
  }
};

export const getUsers = async () => {
  try {
    const res = await axios.get(`${API_BASE}/analytics/chat/users`);

    // console.log('user res', res.data);
    return res.data;
  } catch (e) {
    console.log('error', e);
  }
};

export const getHeathCheck = async () => {
  try {
    const res = await axios.get(`${API_ANODE_BASE}/health`);
    return res.data;
  } catch (e) {
    console.log('Error occured in health-check', e);
  }
};
