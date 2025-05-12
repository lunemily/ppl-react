import "./App.scss";
import Dashboard from "./dashboard/Dashboard";
import * as React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { LogoutRounded } from "@mui/icons-material";
import { useCookies } from "react-cookie";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeRounded from "@mui/icons-material/HomeRounded";
import HelpRounded from "@mui/icons-material/HelpRounded";
import ChromeReaderModeRounded from "@mui/icons-material/ChromeReaderModeRounded";
import Paper from "@mui/material/Paper";
import TrainerCard from "./TrainerCard";
import HowTo from "./HowTo";

// PPL-specific styles:
require(
  `./theme.${process.env.REACT_APP_PPL_LOCATION ? process.env.REACT_APP_PPL_LOCATION.toString().toLowerCase() : "dev"}.scss`,
);

function App() {
  const [tab, setTab] = React.useState("dashboard");
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
  const DisplayTab = () => {
    switch (tab) {
      case "dashboard":
        return (
          <>
            <Dashboard />
          </>
        );
      case "trainercard":
        return (
          <>
            <TrainerCard />
          </>
        );
      case "howto":
        return (
          <>
            <HowTo />
          </>
        );
      default:
        return (
          <>
            <Dashboard />
          </>
        );
    }
  };

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
      <DisplayTab />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          className="primary"
          showLabels
          value={tab}
          onChange={(event, newValue) => {
            setTab(newValue);
          }}
        >
          <BottomNavigationAction
            className="primary"
            label="Dashboard"
            value="dashboard"
            icon={<HomeRounded />}
          />
          <BottomNavigationAction
            className="primary"
            label="Trainer Card"
            value="trainercard"
            icon={<ChromeReaderModeRounded />}
          />
          <BottomNavigationAction
            className="primary"
            label="How To Challenge"
            value="howto"
            icon={<HelpRounded />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
}

export default App;
