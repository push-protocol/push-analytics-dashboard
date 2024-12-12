// React, NextJS imports
import React from 'react';
import Image from 'next/image';

// External Library imports
import { Box, useMediaQuery, Avatar } from '@mui/material';
import styled, { useTheme } from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';
import { useClickAway } from 'react-use';

// Internal Components imports
import {
  Select,
  OptionList,
  Option,
  TimeFilterContainer,
  TimeFilter,
} from './LineChartSet/linchartset.styled';
import { useTheme as useMode } from '../../contexts/ThemeContext';
import { ItemHV2 } from '../Reusables/SharedStyling';
import { Text } from '../Reusables/SharedStyling';
import { ThemeType } from '../../types/theme';
import CaretDownIconWhite from '../../public/static/caret-down-white.png';
import SearchIconDark from '../../public/static/search-dark.png';
import SearchIconWhite from '../../public/static/search.png';
import CaretDownIconBlack from '../../public/static/caret-down-black.png';

export default function Filters({
  selectedChannel,
  selectedChain,
  chainList,
  channelList,
  handleChainChange,
  handleChannelChange,
  showChain,
  setShowChain,
  showChannel,
  setShowChannel,
  TimeFilterOptions,
  selectedFilter,
  setSelectedFilter,
  handleTimeFilter,
  channelDataLoading,
}) {
  const isSmall = useMediaQuery('(max-width:768px)');
  const { isDarkMode } = useMode();
  const theme = useTheme() as ThemeType;
  const [channels, setChannels] = React.useState<any[]>();

  const dropdownRef = React.useRef(null);

  useClickAway(dropdownRef, () => {
    setShowChannel(false);
    setShowChain(false);
  });

  React.useEffect(() => {
    setChannels(channelList);
  }, [channelList, selectedChannel]);

  const handleSearch = (event: any) => {
    event.preventDefault();
    const text = event.target.value;
    const searchResult = channelList.filter((obj) =>
      JSON.stringify(obj).toLowerCase().includes(text.toLowerCase())
    );
    if (searchResult.length > 0) {
      setChannels(searchResult);
    } else {
      setChannels(channelList);
    }
  };

  const openChannelList = () => {
    setShowChannel(!showChannel);
    setShowChain(false);
  };

  const openChainList = () => {
    setShowChain(!showChain);
    setShowChannel(false);
  };

  return (
    <>
      <FirstFilterContainer>
        <Select
          background="#cf1c84"
          color="#fff"
          paddingLeft="23px"
          marginRight={isSmall ? '0px' : '10px'}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: '100%',
              cursor: 'pointer',
            }}
            onClick={openChannelList}
          >
            <Box
              sx={{
                display: 'block',
                maxWidth: '180px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                paddingLeft: !selectedChannel?.icon ? '15px' : null,
              }}
            >
              {selectedChannel?.name?.length > 20
                ? selectedChannel?.name.slice(0, 20) + '...'
                : selectedChannel?.name}
            </Box>
          </Box>
          <Image
            height={20}
            width={20}
            alt="Dropdown"
            src={CaretDownIconWhite}
            onClick={openChannelList}
            style={{ cursor: 'pointer' }}
          />
          {showChannel && (
            <OptionList left="0px" ref={dropdownRef}>
              <SearchbarContainer>
                <Image
                  src={isDarkMode ? SearchIconDark : SearchIconWhite}
                  width={16}
                  height={16}
                  alt="Search"
                />
                <Searchbar
                  placeholder="Search Channels"
                  onChange={(e) => handleSearch(e)}
                  autoFocus
                />
              </SearchbarContainer>
              {channelDataLoading ? (
                <ItemHV2 height="140px" width="100%">
                  <RotatingLines
                    strokeColor="#CF1C84"
                    strokeWidth="4"
                    animationDuration="1.9"
                    width="50"
                    visible={true}
                  />
                </ItemHV2>
              ) : (
                <Box
                  sx={{
                    width: '100%',
                    maxHeight: '120px',
                    overflowY: 'auto',
                    '::-webkit-scrollbar': {
                      width: '5px',
                      backgroundColor: 'transparent',
                      borderRadius: '5px',
                    },
                    '::-webkit-scrollbar-thumb': {
                      backgroundColor: '#CF1C84',
                      borderRadius: '5px',
                    },
                  }}
                >
                  {channels?.map((channel, index) => (
                    <Option
                      key={index}
                      onClick={() => handleChannelChange(channel)}
                    >
                      <Avatar
                        src={channel.icon}
                        alt={channel.name}
                        sx={{
                          marginRight: '8px',
                          width: '24px',
                          height: '24px',
                          cursor: 'pointer',
                        }}
                      />

                      <Box
                        sx={{
                          display: 'block',
                          maxWidth: '160px',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          margin: !channel?.icon ? '5px auto' : null,
                        }}
                      >
                        {channel?.name?.length > 20
                          ? channel?.name.slice(0, 20) + '...'
                          : channel?.name}
                      </Box>
                    </Option>
                  ))}
                </Box>
              )}
            </OptionList>
          )}
        </Select>
        <Select
          background={isDarkMode ? '#282A2E' : 'transparent'}
          color={!isDarkMode ? '#657795' : '#B6BCD6'}
          width="80px"
          paddingLeft="8px"
          border={`1px solid ${theme.background.border}`}
          marginRight={isSmall ? '0px' : '10px'}
        >
          <ItemHV2
            justifyContent="flex-start"
            flexWrap="inherit"
            onClick={openChainList}
            cursor="pointer"
          >
            <Image
              src={selectedChain.image}
              alt={selectedChain.chain}
              width={32}
              height={32}
              style={{
                marginRight: '8px',
                cursor: 'pointer',
              }}
            />
            <Box
              sx={{
                color: !isDarkMode ? '#657795' : '#B6BCD6',
                '@media(max-width:480px)': {
                  display: 'none',
                },
              }}
            >
              {selectedChain?.chain}
            </Box>
          </ItemHV2>
          <Image
            height={20}
            width={20}
            alt="Dropdown"
            src={CaretDownIconBlack}
            onClick={openChainList}
            style={{ cursor: 'pointer', borderRadius: '100%' }}
          />
          {showChain && (
            <OptionList ref={dropdownRef}>
              <Text size="15px" weight={400} color={theme.text.secondary}>
                Select Network
              </Text>
              {chainList.map((chain, index) => (
                <Option key={index} onClick={() => handleChainChange(chain)}>
                  <Image
                    src={chain?.image}
                    alt={chain?.chain}
                    width={24}
                    height={24}
                    style={{
                      marginRight: '8px',
                      cursor: 'pointer',
                      borderRadius: '100%',
                    }}
                  />
                  {chain?.chain}
                </Option>
              ))}
            </OptionList>
          )}
        </Select>
      </FirstFilterContainer>
      <TimeFilterContainer>
        {TimeFilterOptions?.map((time, index) => (
          <TimeFilter
            key={time.time}
            onClick={() => {
              setSelectedFilter(index + 1);
              handleTimeFilter(time.time);
            }}
            background={
              index + 1 === selectedFilter ? '#cf1c84' : 'transparent'
            }
            color={
              index + 1 === selectedFilter
                ? '#fff'
                : theme.text.leaderboardHeader
            }
            fontWeight={index + 1 === selectedFilter ? '700' : '500'}
          >
            {time?.time}
          </TimeFilter>
        ))}
      </TimeFilterContainer>
    </>
  );
}

const SearchbarContainer = styled(ItemHV2)`
  width: 100%;
  height: 45px;
  border: 1px solid ${({ theme }) => theme.background.border};
  border-radius: 12px;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
`;

const Searchbar = styled.input`
  width: 85%;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.background.optionlist};
  color: ${({ theme }) => theme.text.secondary};
  font-size: 15px;
  margin-left: 8px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.text.secondary};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const FirstFilterContainer = styled(ItemHV2)`
justify-content:flex-start;
margin-top:24px;
@media(max-width:480px){
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top:25px;
};
@media(max-width:768px) {
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
},
`;
