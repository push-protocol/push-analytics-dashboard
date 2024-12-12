// React, NextJS imports
import React, { FC, useRef, useState, ReactNode, useEffect } from 'react';

import { Box, Text } from '../../blocks';
import Ethereum from '../../blocks/illustrations/components/Ethereum';
import Polygon from '../../blocks/illustrations/components/Polygon';
import BNB from '../../blocks/illustrations/components/BNB';
import Optimisim from '../../blocks/illustrations/components/Optimisim';
import Arbitrum from '../../blocks/illustrations/components/Arbitrum';
import PolygonZK from '../../blocks/illustrations/components/PolygonZK';
import Fuse from '../../blocks/illustrations/components/Fuse';
import Cyber from '../../blocks/illustrations/components/Cyber';
import { CHAIN_LIST } from '../../utils/constants'
import { IllustrationProps } from '../../blocks';

export default function ChainsDropDown() {

    const LOGO_ALIAS_CHAIN: { [key: string]: FC<IllustrationProps> } = {
        "ETH_MAINNET": Ethereum,
        "POLYGON_MAINNET": Polygon,
        "BSC_MAINNET": BNB,
        "OPTIMISM_MAINNET": Optimisim,
        "ARBITRUMONE_MAINNET": Arbitrum,
        "POLYGON_ZK_EVM_MAINNET": PolygonZK,
        "FUSE_MAINNET": Fuse,
        "CYBER_CONNECT_MAINNET": Cyber
    };

    const getSelectChains = () => {
        return CHAIN_LIST?.map((chain) => {
            const Component = LOGO_ALIAS_CHAIN[chain.value];
            return {
            value: chain.value,
            label: chain.chain,
            icon: <Component />,
            };
        });
    };

    const networkOptions = getSelectChains()
    
    const [chain, setChain] = useState(networkOptions[0].value);

    return (
        <Box width="100%">
            {/* <Select
                options={networkOptions}
                value={chain}
                onSelect={(value) => setChain(value)}
            /> */}
        </Box>
    )
}
