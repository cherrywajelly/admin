import { apiRequest } from '..';
import { IconGroupRequestBody, IconGroupResponse, IconGroupsElemResponse } from '../../types/api/creator/API';
import { toApprovalState } from '../../utils/utils';

export const postIconGroup = async ({
  thumbnailIcon,
  files,
  iconGroupPostRequest,
}: IconGroupRequestBody): Promise<any> => {
  const formData = new FormData();

  formData.append('thumbnailIcon', thumbnailIcon);

  files?.forEach((file: File) => {
    formData.append('files', file);
  });

  const requestBlob = new Blob([JSON.stringify(iconGroupPostRequest)], {
    type: 'application/json'
  });

  formData.append('iconGroupPostRequest', requestBlob);

  await apiRequest('/api/v2/iconGroups', 'POST', formData)
    .then((res) => {
      if (res.status === 500) {
        alert('아이콘 등록 신청에 실패하였습니다.');
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      if (res.status === 200) {
        alert('아이콘 등록 신청되었습니다.');
        return res;
      }
    })
    .catch((error) => {
      alert('아이콘 등록 신청에 실패하였습니다.');
      console.error('Failed to post icon group:', error);
    });
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
      orderCount: iconGroup.orderCount,
      revenue: iconGroup.totalRevenue,
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