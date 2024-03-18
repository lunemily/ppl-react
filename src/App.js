import "./App.css";
import { useEffect, useState } from "react";
import { SettingsAPI } from "./apis/settingsAPI";

function App() {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    SettingsAPI.get().then((data) => setSettings(data));
  }, []);

  return (
    <>
      <div>
        <p>PPL {new Date().getFullYear().toString()}</p>
        <p>{JSON.stringify(settings)}</p>
      </div>
    </>
  );
}

export default App;
