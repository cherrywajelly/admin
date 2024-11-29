import { getEnv } from '../utils/utils';

export const apiRequest = async (endpoint: string): Promise<any> => {
  const response = await fetch(`${getEnv('VITE_API_URL')}${endpoint}`);

  return response;
};
