export interface Transaction {
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