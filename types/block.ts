
import { Transaction } from './transaction'

export interface Signer {
    sig: string;
    node: string;
    role: number;
}
export interface Block {
    blockHash: string;
    blockData: string;
    blockDataAsJson: {
        ts: number;
        txobjList: any[];
        attesttoken: string;
        signersList: Signer[];
    };
    blockSize: number;
    ts: number;
    transactions: Transaction[];
    totalNumberOfTxns: number;
};

export interface BlockDetails {
    blockData: string,
    blockDataAsJson: {
        ts: number;
        txobjList: any[];
        attesttoken: string;
        signersList: Signer[];
    }
    blockHash: string,
    blockSize: number,
    totalNumberOfTxns: number,
    signers: Signer[],
    ts: number
}