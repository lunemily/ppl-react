import "../App.scss";
import { useCookies } from "react-cookie";
import Auth from "../Auth";
import LeaderDashboard from "./LeaderDashboard";
import ChallengerDashboard from "./ChallengerDashboard";
import * as React from "react";

function Dashboard() {
  const [cookies] = useCookies(["loginId", "token", "isLeader", "leaderId"]);

  function isAuthenticated() {
    return cookies.loginId && cookies.token;
  }

  if (isAuthenticated()) {
    if (cookies.isLeader) {
      return (
        <>
          <LeaderDashboard />
        </>
      );
    } else {
      return (
        <>
          <ChallengerDashboard />
        </>
      );
    }
  } else {
    return (
      <>
        <Auth />
      </>
    );
  }
}

export default Dashboard;
