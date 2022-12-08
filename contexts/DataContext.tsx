import React, { useState, useContext, createContext, useEffect } from 'react';
import { CREDENTIALKEYS } from 'utils/constants';

const DataContext = createContext<any>({});

const DataProvider = ({ children }: { children: any }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [updateTracker, setUpdateTracker] = useState<boolean>(false);
  const [token, setToken] = useState<string>(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidXNlciIsImlhdCI6MTY3MDQ3MTkyOCwiZXhwIjoxNjcwNTU4MzI4fQ.9o3Le8kZz-TIbiRnEyU5feGU6Z7Vn5kQaezU57W-f_A'
  );
  const timeFilterOptions = [
    { time: '1D' },
    { time: '7D' },
    { time: '1M' },
    { time: '1Y' },
    { time: 'YTD' },
    { time: 'ALL' },
  ];

  const chainList = [
    {
      image: './static/ethereum.svg',
      chain: 'Ethereum Network',
      value: 'ETH_TEST_GOERLI',
    },
    {
      image: './static/polygon.svg',
      chain: 'Polygon Network',
      value: 'POLYGON_TEST_MUMBAI',
    },
  ];

  useEffect(() => {
    if (Boolean(sessionStorage.getItem(CREDENTIALKEYS.LOGINCHECK))) {
      setIsLoggedIn(true);
      // setToken(String(sessionStorage.getItem(CREDENTIALKEYS.TOKEN)));
    } else {
      setIsLoggedIn(false);
      setToken('');
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken,
        timeFilterOptions,
        chainList,
        updateTracker,
        setUpdateTracker,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
