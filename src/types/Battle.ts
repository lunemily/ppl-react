import { BattleDifficulty } from "./BattleDifficulty";
import { BattleFormat } from "./BattleFormat";
import { BattleStatus } from "./BattleStatus";

export interface Battle {
  id: number;
  challengerId: string;
  leaderId: string;
  battleDifficulty: BattleDifficulty;
  battleFormat: BattleFormat;
  battleStatus: BattleStatus;
  queuedAtUtc: string;
  recordedAtUtc: string | null;
  battleCode: string;
}
