import axios from 'axios';

const API_BASE = 'https://aa1.dev.push.org/rpc';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const makeJsonRpcRequest = async (id, method, params = {}) => {
  const data = {
    jsonrpc: '2.0',
    method: `RpcService.${method}`,
    params: params,
    id,
  };

  try {
    const response = await axios.post(API_BASE, data);
    if (response.data.error) {
      throw new Error('JSON-RPC Error: ' + response.data.error.message);
    }

    return response.data.result;
  } catch (error) {
    throw new Error('JSON-RPC Error: ' + error.message);
  }
};
