import { SettingsAPI } from "../apis/settingsAPI";

export const isPPLOver = async () => {
  const settings = await SettingsAPI.get();
  const pplOverDate = new Date(settings.eventEndDateUtc);
  return new Date() > pplOverDate;
};
