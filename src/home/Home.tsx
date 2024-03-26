import "../App.scss";
import { useCookies } from "react-cookie";
import Auth from "../Auth";
import LeaderConsole from "./LeaderConsole";
import ChallengerConsole from "./ChallengerConsole";
import * as React from "react";

function Home() {
  const [cookies] = useCookies(["loginId", "token", "isLeader", "leaderId"]);

  function isAuthenticated() {
    return cookies.loginId && cookies.token;
  }

  if (isAuthenticated()) {
    if (cookies.isLeader) {
      return (
        <>
          <LeaderConsole />
        </>
      );
    } else {
      return (
        <>
          <ChallengerConsole />
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

export default Home;
