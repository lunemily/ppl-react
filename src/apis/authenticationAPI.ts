import { api } from "./configs/axiosConfigs";

export const AuthenticationAPI = {
  login: async function (username = "", password = "", cancel = false) {
    const authorization = btoa(username + ":" + password);
    const response = await api.request({
      url: "login",
      method: "POST",
      headers: {
        Authorization: `Basic ${authorization}`,
      },
    });
    return response.data;
  },
};
