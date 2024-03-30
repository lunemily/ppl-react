import "./App.scss";
import Home from "./home/Home";
import * as React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { LogoutRounded } from "@mui/icons-material";
import { useCookies } from "react-cookie";
// PPL-specific styles:
require(
  `./theme.${process.env.REACT_APP_PPL_LOCATION ? process.env.REACT_APP_PPL_LOCATION.toString().toLowerCase() : "dev"}.scss`,
);

function App() {
  const [, , removeCookie] = useCookies([
    "loginId",
    "token",
    "isLeader",
    "leaderId",
  ]);
  function handleLogout() {
    removeCookie("loginId");
    removeCookie("token");
    removeCookie("isLeader");
    removeCookie("leaderId");
  }
  return (
    <>
      <AppBar className="primary" position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <span className={"title"}>
              PPL {process.env.REACT_APP_PPL_LOCATION}{" "}
              {new Date().getFullYear().toString()}
            </span>
          </Typography>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={handleLogout}
            color="inherit"
          >
            <LogoutRounded />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Home />
    </>
  );
}

export default App;
