import { useState } from "react";
import { AuthenticationAPI } from "./apis/authenticationAPI";
import { useCookies } from "react-cookie";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Button, TextField } from "@mui/material";
import "./Auth.scss";

const Auth = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [, setCookie] = useCookies([
    "loginId",
    "token",
    "isLeader",
    "leaderId",
  ]);

  const handleSubmitEvent = (e) => {
    const maxAge = 86400;
    e.preventDefault();
    if (input.username !== "" && input.password !== "") {
      AuthenticationAPI.login(input.username, input.password).then((data) => {
        setCookie("loginId", data.loginId, { maxAge });
        setCookie("token", data.token, { maxAge });
        setCookie("isLeader", data.isLeader, { maxAge });
        setCookie("leaderId", data.leaderId, { maxAge });
      });
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Card>
      <CardContent>
        <Box display="flex" flexDirection={"column"} alignItems="center">
          <h2>Please Sign In</h2>
          <TextField
            label="Username"
            variant="outlined"
            type="text"
            id="user"
            name="username"
            placeholder="pplchallenger2010"
            aria-describedby="user-name"
            aria-invalid="false"
            onChange={handleInput}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            id="password"
            name="password"
            placeholder="Hunter2"
            aria-describedby="user-password"
            aria-invalid="false"
            onChange={handleInput}
          />
          <br />
          <Button
            className="primary"
            variant="contained"
            onClick={handleSubmitEvent}
          >
            Submit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Auth;
