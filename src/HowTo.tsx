import "./App.scss";
import * as React from "react";
import { SettingsAPI } from "./apis/settingsAPI";
import { useEffect, useState } from "react";
import { Settings } from "ppl-schema";

function HowTo() {
  const [settings, setSettings] = useState({});
  useEffect(() => {
    (async () => {
      setSettings(await SettingsAPI.get());
    })();
  }, []);
  return (
    <>
      <p>HowToChallenge works!!</p>
      <p>{JSON.stringify(settings)}</p>
    </>
  );
}

export default HowTo;
