export type FlagType = {
  img: string;
  emoji: string;
  emoji_unicode: string;
};

export type ConnectionType = {
  asn: number;
  org: string;
  isp: string;
  domain: string;
};

export type TimeZoneType = {
  id: string;
  abbr: string;
  is_dst: boolean;
  offset: number;
  utc: string;
  current_time: string;
};

export type IpInfoType = {
  ip: string;
  success: boolean;
  type: string;
  continent: string;
  continent_code: string;
  country: string;
  country_code: string;
  region: string;
  region_code: string;
  city: string;
  latitude: number;
  longitude: number;
  is_eu: boolean;
  postal: string;
  calling_code: string;
  capital: string;
  borders: string;
  flag: FlagType;
  connection: ConnectionType;
  timezone: TimeZoneType;
  expiresAt: Date;
};
