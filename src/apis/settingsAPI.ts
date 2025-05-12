import { api } from "./configs/axiosConfigs";
import { Settings } from "ppl-schema";

export const SettingsAPI = {
  get: async function () {
    const response = {
      data: {
        eventEndDateUtc: "2024-03-25T00:00:00Z",
        eventSupportsQueueState: false,
        leagueFormat: {
          badgesForElites: 8,
          emblemsForChamp: 0,
          badgesForChamp: 16,
          emblemWeight: 2,
        },
        meetupTimes: [
          {
            location: "Handheld Lounge",
            startTimeUtc: "2026-03-22T17:30:00.000Z",
            durationInMinutes: 120,
          },
        ],
        _links: {
          trainerCard: "/api/leaders",
          rulesAsset: "/static/assets/rules.png",
          prizesAsset: "/static/assets/prizes.png",
          scheduleAsset: "/static/assets/schedule.png",
          mapAsset: "/static/assets/map.png",
        },
      },
    };
    // const response = await api.request({
    //   url: "settings",
    //   method: "GET",
    // });
    return response.data as Settings;
  },
};
