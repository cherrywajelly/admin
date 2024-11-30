import { apiRequest } from '..';
import { IconGroupRequestBody } from '../../types/API';

export const postIconGroup = async (requestBody: IconGroupRequestBody): Promise<any> => {
  try {
    const res = await apiRequest('/api/v2/iconGroups', 'POST', requestBody);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return res;
  } catch (error) {
    console.error('Failed to post icon group:', error);
  }
};
