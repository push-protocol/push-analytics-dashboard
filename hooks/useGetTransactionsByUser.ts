import { useQuery } from 'react-query';
import { makeJsonRpcRequest } from '../utils/json-rpc';
import { PerPageItems } from '../utils/constants';

const RPC_ID = 9

export interface searchProps {
    address: string | string[] | undefined;
    page: number
}

export const useGetTransactionsByUser = (params: searchProps) => {    
    const getTransactionsByUser = () => makeJsonRpcRequest(RPC_ID, 'getTransactionsByUser', {
        "searchTerm": params.address,
        "startTime": Math.floor(Date.now()),
        "direction": "DESC",
        "pageSize": PerPageItems,
        "page": params.page,
        "showDetails": false
    });

    return useQuery({
        queryKey: ['getTransactionsByUserDetails', params],
        queryFn: getTransactionsByUser,
        select: (data) => {
            const transactions = data.blocks.flatMap(block =>
                block.transactions.map(tx => ({
                    ...tx,
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