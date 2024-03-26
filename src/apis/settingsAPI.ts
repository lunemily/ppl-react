import { api } from "./configs/axiosConfigs";

export const SettingsAPI = {
  get: async function (cancel = false) {
    const response = await api.request({
      url: "appsettings",
      method: "GET",
    });
    return response.data;
  },
};
