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
  sm: boolean;
  dbp: boolean;
  oa: boolean;
  ce: boolean;
  em: boolean;
  br: boolean;
  other: {
    value: string;
    selected: boolean;
  };
}

export interface LeadParams {
  full_name: string;
  email: string;
  phone_number: string;
  role: string;
  reference: string;
}

export interface Lead extends LeadParams {
  id: string;
  created_at: string;
  updated_at: string;
}

export interface Property {
  id: string;
  nickname: string;
  address: string;
  state: string;
  city: string;
  postal_code: string;
  image_url: string;
  flyer_url: string;
}

export interface Interest {
  id: string;
  asset: {
    id: string;
    address: string;
    flyer_url: string;
  };
  created_at: string;
}
