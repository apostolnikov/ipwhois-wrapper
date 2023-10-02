import net from 'node:net';
import { Request, Response } from 'express';
import { ipInfoService } from '..';

export const getIpInfo = async (req: Request, res: Response) => {
  const { ip } = req.params;

  if (net.isIP(ip)) {
    try {
      const ipLocationData = await ipInfoService.getIpInfo(ip);

      return res.json({ statusCode: 200, data: ipLocationData });
    } catch (_) {
      return res.json({
        statusCode: 500,
        error: 'Internal server error',
      });
    }
  }

  return res.json({
    statusCode: 400,
    error: 'Bad request!',
  });
};
