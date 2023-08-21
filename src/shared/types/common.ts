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
  socialMedia: boolean;
  printedSigns: boolean;
  recommendation: boolean;
  advertisement: boolean;
  other: {
    value: string;
    selected: boolean;
  };
}

export interface Property {
  id: string;
  address: string;
  state: string;
  city: string;
  postalCode: string;
  imageURL: string;
  flyerURL: string;
}
