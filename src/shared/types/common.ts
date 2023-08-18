export interface Creds {
  username: string;
  password: string;
}

export interface UserData {
  id: string;
  username: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface Options {
  hello: boolean;
  bye: boolean;
  other: {
    value: string;
    selected: boolean;
  };
}
