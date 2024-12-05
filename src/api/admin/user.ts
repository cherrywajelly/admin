import { apiRequest } from "..";
import { UsersElemResponse } from '../../types/api/admin/API';

export const getUsers = async (): Promise<any> => {
  try {
    const res = await apiRequest('/api/v3/members');

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: UsersElemResponse[] = (await res.json()).memberManagerResponses;

    const mappedData = data.map((user: UsersElemResponse) => ({
      id: user.memberId,
      title: user.nickname,
      image: user.memberProfileUrl,
    }));

    return mappedData;
  } catch (error) {
    console.error('Failed to get icon group list:', error);
  }
};