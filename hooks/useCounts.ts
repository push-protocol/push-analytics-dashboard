import { useQuery } from 'react-query';
import { POLL_INTERVAL } from '../utils/constants'
import { makeJsonRpcRequest } from '../utils/json-rpc';

const RPC_ID = 6

export const useCounts = () => {
    const getCounts = () => makeJsonRpcRequest(RPC_ID, 'getCounts');

    return useQuery({
        queryKey: ['homeOverViewCounts'],
        queryFn: getCounts,
        refetchInterval: POLL_INTERVAL
    });
}