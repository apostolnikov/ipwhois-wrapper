import { IpInfoType } from '../types';
import { IpInfoModel } from '..';

export const createNewIpLocation = (payload: IpInfoType) =>
  IpInfoModel.create(payload);

export const findLocationByIp = (ip: string) =>
  IpInfoModel.findOne({ ip }).lean();
