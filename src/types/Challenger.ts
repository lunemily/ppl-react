import { Account } from "./Account";

export interface Challenger extends Account {
  displayName: string;
  bingoBoard?: {}[][];
}
