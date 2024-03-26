import { useState } from "react";
import { AuthenticationAPI } from "./apis/authenticationAPI";
import { useCookies } from "react-cookie";
import * as React from "react";

const Auth = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [, setCookie, removeCookie] = useCookies([
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
        removeCookie("loginId");
        removeCookie("token");
        removeCookie("isLeader");
        removeCookie("leaderId");
        setCookie("loginId", data.loginId, { maxAge });
        setCookie("token", data.token, { maxAge });
        setCookie("isLeader", data.isLeader, { maxAge });
        setCookie("leaderId", data.leaderId, { maxAge });
      });
    }
    alert("please provide a valid input");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmitEvent}>
      <div className="form_control">
        <label htmlFor="user-name">Username:</label>
        <input
          type="text"
          id="user"
          name="username"
          placeholder="pplchallenger2010"
          aria-describedby="user-name"
          aria-invalid="false"
          onChange={handleInput}
        />
        <div id="user-name" className="sr-only">
          Please enter a valid username. It must contain at least 6 characters.
        </div>
      </div>
      <div className="form_control">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          aria-describedby="user-password"
          aria-invalid="false"
          onChange={handleInput}
        />
        <div id="user-password" className="sr-only">
          your password should be more than 6 character
        </div>
      </div>
      <button className="btn-submit">Submit</button>
    </form>
  );
};

export default Auth;
