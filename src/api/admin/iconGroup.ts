import { apiRequest } from '..';
import { IconGroupsElemResponse, IconGroupResponse } from '../../types/api/admin/API';
import { toApprovalState } from '../../utils/utils';

export const getIconGroups = async (): Promise<any> => {
  try {
    const res = await apiRequest('/api/v3/iconGroups');

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: IconGroupsElemResponse[] = (await res.json()).iconGroupNonApprovalResponses;

    const mappedData = data.map((iconGroupsElem: IconGroupsElemResponse) => ({
      id: iconGroupsElem.iconGroupId,
      title: iconGroupsElem.title,
      headImage: iconGroupsElem.thumbnailUrl,
      approvalState: toApprovalState(iconGroupsElem.iconState),
    }));

    return mappedData;
  } catch (error) {
    console.error('Failed to get icon group list:', error);
  }
};

export const getIconGroup = async (iconGroupId: string): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/iconGroups/${iconGroupId}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: IconGroupResponse = await res.json();

    const mappedData = {
      title: data.title,
      headImage: data.thumbnailImageUrl,
      creator: data.creatorNickname,
      approvalState: toApprovalState(data.iconState),
      iconImages: data.iconResponses.map((icon) => icon.iconImageUrl),
    };
    
    return mappedData;
  } catch (error) {
    console.error('Failed to get inquiry detail:', error);
  }
};