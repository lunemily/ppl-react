export interface Account {
  username: string;
  id: string;
  permissions: {};
  challengerId?: string;
  leaderId?: string;
  registeredAtUtc?: string;
  lastUsedAtUtc?: string;
  _links?: string[];
}
