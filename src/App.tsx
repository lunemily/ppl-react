import "./App.scss";
import Home from "./home/Home";
import * as React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { pplLocation } from "./constants";
import { LogoutRounded } from "@mui/icons-material";
import { useCookies } from "react-cookie";

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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <p className={"title"}>
              PPL {pplLocation} {new Date().getFullYear().toString()}
            </p>
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
