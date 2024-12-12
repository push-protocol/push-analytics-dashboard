import { useQuery } from 'react-query';
import { POLL_INTERVAL } from '../utils/constants'
import { makeJsonRpcRequest } from '../utils/json-rpc';
import { BlockDetails } from '../types/block'

import { Transaction } from '../types/transaction';

const RPC_ID = 5

export interface TxDetailsProps {
    txHash: string | string[] | undefined;
    search?: boolean;
}

export const useLiveTxByHash = (params: TxDetailsProps) => {    
    const getTxByHash = () => makeJsonRpcRequest(RPC_ID, 'getTxByHash', {
        "transactionHash": params.txHash,
        "showDetails": true
    });

    return useQuery({
        queryKey: ['getTxByHashDetails', params],
        queryFn: getTxByHash,
        select: (data) => {
            if (data.blocks && data.blocks.length > 0) {
                const { blocks } = data;

                const blockDetails: BlockDetails = {
                    blockData: blocks[0].blockData,
                    blockDataAsJson: blocks[0].blockDataAsJson,
                    blockHash: blocks[0].blockHash,
                    blockSize: blocks[0].blockSize,
                    totalNumberOfTxns: blocks[0].totalNumberOfTxns,
                    signers: blocks[0].blockDataAsJson?.signersList,
                    ts: blocks[0].ts
                };
            
                // Creating a summary of the block details
                const transaction: Transaction = blocks[0].transactions[0]

                return {
                    blockDetails,
                    transaction
                }
            }

            return {
                blockDetails: null,
                transaction: null
            }
        }
    });
}