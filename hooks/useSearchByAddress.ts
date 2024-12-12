import { useQuery } from 'react-query';
import { makeJsonRpcRequest } from '../utils/json-rpc';
import { Transaction } from '../types/transaction';
import { POLL_INTERVAL } from '../utils/constants'
import { PerPageItems } from '../utils/constants';

const RPC_ID = 7

export interface searchProps {
    address: string | string[] | undefined;
    page: number
}

export const useSearchByAddress = (params: searchProps) => {
    const searchByAddress = () => makeJsonRpcRequest(RPC_ID, 'searchByAddress', {
        "searchTerm": params.address,
        "startTime": Math.floor(Date.now()),
        "direction": "DESC",
        "pageSize": PerPageItems,
        "page": params.page,
        "showDetails": false
    });

    return useQuery({
        queryKey: [`searchByAddressDetails-${params.address}`, params],
        queryFn: searchByAddress
    });
}