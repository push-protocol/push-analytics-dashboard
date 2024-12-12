// React + Web3 Essentials
import React, { useState, createContext } from 'react'; // Import hooks if you're using them

export const NavigationContext = createContext({
  navigationSetup: null,
  setNavigationSetup: (value: any) => {},
});

const NavigationContextProvider = ({ children }) => {
  const [navigationSetup, setNavigationSetup] = useState(null);

  return (
    <NavigationContext.Provider value={{ navigationSetup, setNavigationSetup }}>{children}</NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
