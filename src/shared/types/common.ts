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
  'Social media': boolean;
  'Printed signs': boolean;
  Recommendation: boolean;
  Advertisement: boolean;
  other: {
    value: string;
    selected: boolean;
  };
}
