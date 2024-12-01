import { apiRequest } from '..';
import { IconGroupRequestBody, IconGroupResponse, IconGroupsElemResponse } from '../../types/API';
import { toApprovalState } from '../../utils/utils';

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

export const getIconGroups = async (): Promise<any> => {
  try {
    const res = await apiRequest('/api/v2/iconGroups');

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: IconGroupsElemResponse[] = (await res.json()).iconGroupCreatorResponses;

    const mappedData = data.map((iconGroup: IconGroupsElemResponse) => ({
      id: iconGroup.iconGroupId,
      title: iconGroup.iconTitle,
      headImage: iconGroup.iconImageUrl,
      approvalState: toApprovalState(iconGroup.iconState),
    }));
    
    return mappedData;
  } catch (error) {
    console.error('Failed to get inquiry list:', error);
  }
};

export const getIconGroup = async (iconGroupId: string): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v2/iconGroups/${iconGroupId}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: IconGroupResponse = await res.json();

    const mappedData = {
      title: data.iconGroupOrderedResponse.iconName,
      headImage: data.iconGroupOrderedResponse.thumbnailImageUrl,
      creator: data.creatorNickname,
      description: data.description,
      approvalState: toApprovalState(data.iconGroupOrderedResponse.iconState),
      iconImages: data.iconGroupOrderedResponse.iconImageUrl,
      soldIconNumber: data.iconGroupOrderedResponse.orderCount,
      revenue: data.iconGroupOrderedResponse.income,
    };
    
    return mappedData;
  } catch (error) {
    console.error('Failed to get inquiry detail:', error);
  }
};