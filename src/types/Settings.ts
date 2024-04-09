export interface Settings {
  eventEndDateUtc: string;
  eventSupportsQueueState: boolean;
  leagueFormat: {
    badgesForElites: number;
    emblemsForChamp: number;
    badgesForChamp: number;
    emblemWeight: number;
  };
  meetupTimes: {
    location: string;
    startTimeUtc: string;
    durationInMinutes: number;
  }[];
  _links: {};
}
