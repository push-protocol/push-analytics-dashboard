import { useQuery } from 'react-query';
import { POLL_INTERVAL } from '../utils/constants'
import { makeJsonRpcRequest } from '../utils/json-rpc';
import { BlockDetails } from '../types/block';

const RPC_ID = 2

export interface BlockDetailsProps {
    blockHash: string | string[] | undefined;
}

export const useLiveBlockByHash = (params: BlockDetailsProps) => {    
    const getBlockByHash = () => makeJsonRpcRequest(RPC_ID, 'getBlockByHash', {
        "blockHash": params.blockHash,
        "showDetails": true
    });

    return useQuery({
        queryKey: ['getBlockByHashDetails', params],
        queryFn: getBlockByHash,
        select: (data) => {
            if (data.blocks && data.blocks.length > 0) {
                const { blocks } = data;
                // Creating a summary of the block details
                const blockDetails: BlockDetails = {
                    blockData: blocks[0].blockData,
                    blockDataAsJson: blocks[0].blockDataAsJson,
                    blockHash: blocks[0].blockHash,
                    blockSize: blocks[0].blockSize,
                    totalNumberOfTxns: blocks[0].totalNumberOfTxns,
                    signers: blocks[0].blockDataAsJson?.signersList,
                    ts: blocks[0].ts
                };

                return {
                    blockDetails
                }
            }

            return {
                blockDetails: null
            }
        }
    });
}