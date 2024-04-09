import { Account } from "./Account";
import { BattleDifficulty } from "./BattleDifficulty";
import { BattleFormat } from "./BattleFormat";

export interface Leader extends Account {
  leaderName: string;
  badgeName: string;
  bio: string;
  tagline: string;
  battleDifficulties: BattleDifficulty[];
  battleFormats: BattleFormat[];
  queueOpen: boolean | null;
  twitchHandle: string | null;
  queueOpenText: string | null;
  queueCloseText: string | null;
}
