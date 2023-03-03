export interface ApiError {
  message: string;
  error?: any;
}

export interface ChangelogResponse {
  markdown: string,
  json: JsonParsedChangelog
}

export interface JsonParsedChangelog {
  Changelog: {
    raw: string;
    [key: string]: SingleChangelogItem | string;
 
  }
}
export interface SingleChangelogItem {
  raw?: string;
  Added: ChangeItem;
  Fixed: ChangeItem;
  Changed: ChangeItem;
}
interface ChangeItem {
  raw: string;
} 