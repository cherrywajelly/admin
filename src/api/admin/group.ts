import { apiRequest } from "..";
import { GroupResponse, GroupsElemResponse } from '../../types/api/admin/API';

export const getGroups = async (): Promise<any> => {
  try {
    const res = await apiRequest('/api/v3/teams');

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: GroupsElemResponse[] = (await res.json()).teamManagerResponses;

    const mappedData = data.map((group: GroupsElemResponse) => ({
      id: group.teamId,
      title: group.name,
      image: group.teamProfileUrl,
    }));

    return mappedData;
  } catch (error) {
    console.error('Failed to get icon group list:', error);
  }
};

export const getGroup = async (groupId: string): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/teams/${groupId}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: GroupResponse = await res.json();

    const mappedData = {
      id: data.teamId,
      image: data.teamProfileUrl,
      title: data.name,
      createdAt: data.createdAt,
      members: data.memberManagerResponses.map((member) => ({
        nickname: member.nickname,
        image: member.memberProfileUrl,
      })),
    };
    
    return mappedData;
  } catch (error) {
    console.error('Failed to get inquiry detail:', error);
  }
};