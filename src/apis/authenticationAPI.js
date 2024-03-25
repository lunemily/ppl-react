import { api } from "./configs/axiosConfigs";
import { defineCancelApiObject } from "./configs/axiosUtils";

export const AuthenticationAPI = {
  login: async function (username = null, password = null, cancel = false) {
    const authorization = btoa(username + ":" + password);
    const response = await api.request({
      url: "login",
      method: "POST",
      headers: {
        Authorization: `Basic ${authorization}`,
      },
      // retrieving the signal value by using the property name
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });
    return response.data;
  },
};

// defining the cancel API object for ProductAPI
const cancelApiObject = defineCancelApiObject(AuthenticationAPI);
