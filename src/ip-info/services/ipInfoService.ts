import { IpInfoType } from '../types';
import { ipInfoProvider } from '..';

export const fetchIpInfo = async (ip: string) => {
  try {
    const response = await fetch(`${process.env.IPWHO_URL}/${ip}`);
    if (!response.ok) {
      throw new Error('Failed to fetch IP info');
    }

    const data: IpInfoType = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getIpInfo = async (ip: string): Promise<IpInfoType> => {
  try {
    const ipDbdata = await ipInfoProvider.findLocationByIp(ip);

    if (!ipDbdata) {
      const ipAddressData = await fetchIpInfo(ip);
      const newIpRecord = await ipInfoProvider.createNewIpLocation(
        ipAddressData
      );
      return newIpRecord;
    }

    return ipDbdata;
  } catch (err) {
    throw new Error(err);
  }
};
