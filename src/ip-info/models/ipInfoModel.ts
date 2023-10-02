import mongoose, { Schema } from 'mongoose';
import { IpInfoType } from '../types';

const IpInfoSchema = new Schema<IpInfoType>({
  ip: String,
  success: Boolean,
  type: String,
  continent: String,
  continent_code: String,
  country: String,
  country_code: String,
  region: String,
  region_code: String,
  city: String,
  latitude: Number,
  longitude: Number,
  is_eu: Boolean,
  postal: String,
  calling_code: String,
  capital: String,
  borders: String,
  expiresAt: {
    type: Date,
    default: Date.now,
    expires: 60,
  },
  flag: {
    img: String,
    emoji: String,
    emoji_unicode: String,
  },
  connection: {
    asn: Number,
    org: String,
    isp: String,
    domain: String,
  },
  timezone: {
    id: String,
    abbr: String,
    is_dst: Boolean,
    offset: Number,
    utc: String,
    current_time: String,
  },
});

const IpInfoModel = mongoose.model<IpInfoType>('ip-locations', IpInfoSchema);

export default IpInfoModel;
