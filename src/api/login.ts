import { apiRequest } from '.';

export const getAuthToken = async (social: string, code: string, version: string): Promise<any> => {
  try {
    const response = await apiRequest(`/api/${version}/login/${social}?code=${code}`);

    if (!response.ok) {
      throw new Error(`로그인에 실패했습니다. Status: ${response.status}`);
    }
 
    return await response.json();
  } catch (error) {
    alert(`로그인 중 오류가 발생했습니다: ${error}`);
    throw error;
  }
};