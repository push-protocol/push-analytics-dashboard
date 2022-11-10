import { Box, Button } from "@mui/material";
import Logo from "components/Logo";
import { useTheme } from "contexts/ThemeContext";
import { useData } from "contexts/DataContext";
import { useRouter } from "next/router";
import { ROUTES, CREDENTIALKEYS } from "utils/constants";
import {
  getSubscribers,
  getNotifications,
  getLeaderBoard,
  getChannels,
} from "utils/api";
import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { RootStyle, ToolbarStyle } from "./navbar.styled";

export default function Navbar() {
  const { isDarkMode, darkModeToggle } = useTheme();
  const { isLoggedIn, setIsLoggedIn } = useData();
  const router = useRouter();

  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.setItem(CREDENTIALKEYS.LOGINCHECK, "" + false);
    sessionStorage.setItem(CREDENTIALKEYS.TOKEN, "");
    router.push(ROUTES.LOGIN);
  };

  return (
    <RootStyle>
      <ToolbarStyle>
        <Logo src="./static/push.svg" sx={{ width: 140, height: 120 }} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="outlined"
            style={{ marginRight: "5px" }}
            onClick={() => {
              router.push(ROUTES.DASHBOARD);
              // getChannels();
              // getSubscribers();
              // getNotifications();
              // getLeaderBoard();
            }}
          >
            Dashboard
          </Button>
          <Button
            variant="outlined"
            style={{ marginRight: "5px" }}
            onClick={() => router.push(ROUTES.ADMIN)}
          >
            Admin Panel
          </Button>
          {isLoggedIn ? (
            <Button variant="outlined" onClick={() => logout()}>
              Logout
            </Button>
          ) : null}
          <DarkModeSwitch
            style={{ margin: "0 1rem" }}
            checked={isDarkMode}
            onChange={darkModeToggle}
            size={28}
            sunColor="#494D5F"
            moonColor="#787E99"
          />
        </Box>
      </ToolbarStyle>
    </RootStyle>
  );
}
