import { api } from "./configs/axiosConfigs";

export const AuthenticationAPI = {
  register: async function (username = "", password = "") {
    const authorization = btoa(username + ":" + password);
    const response = await api.request({
      url: "accounts",
      method: "POST",
      headers: {
        Authorization: `Basic ${authorization}`,
      },
    });
    return response.data;
  },
  login: async function (username = "", password = "") {
    const authorization = btoa(username + ":" + password);
    const response = await api.request({
      url: "accounts/sessions",
      method: "POST",
      headers: {
        Authorization: `Basic ${authorization}`,
      },
    });
    return response.data;
  },
  logout: async function () {
    const accountId = "";
    const response = await api.request({
      url: "accounts/sessions/me",
      method: "DELETE",
      headers: {
        "Account-ID": `${accountId}`,
      },
    });
    return response.data;
  },
};
