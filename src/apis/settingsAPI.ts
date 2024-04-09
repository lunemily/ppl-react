import { api } from "./configs/axiosConfigs";
import { Settings } from "../types/Settings";

export const SettingsAPI = {
  get: async function () {
    const response = await api.request({
      url: "settings",
      method: "GET",
    });
    return response.data as Settings;
  },
};
