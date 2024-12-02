import { apiRequest } from '..';
import { CreatorInfoRequestBody } from '../../types/api/creator/API';

export const getCreatorInfo = async (): Promise<any> => {
  try {
    const res = await apiRequest('/api/v2/members');

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();

    const mappedData = {
      nickname: data.creatorInfoResponse.nickname,
      profilePicture: data.creatorInfoResponse.profileUrl,
      bankName: data.creatorInfoResponse.bank,
      accountNumber: data.creatorInfoResponse.accountNumber,
      madeIconNumber: data.createdIconCount,
      soldIconNumber: data.selledIconCount,
      revenue: data.revenue,
      settlement: data.settlement,
      iconGroups: data.iconGroupOrderedResponses.iconGroupOrderedResponses,
    };

    return mappedData;
  } catch (error) {
    console.error('Failed to get inquiry list:', error);
  }
};

// 아이콘 제작자 회원가입
export const postCreatorInfo = async ({
  profile,
  creatorRequest,
}: CreatorInfoRequestBody): Promise<any> => {
  const formData = new FormData();

  formData.append('profile', profile);

  const requestBlob = new Blob([JSON.stringify(creatorRequest)], {
    type: 'application/json',
  });

  formData.append('creatorRequest', requestBlob);

  await apiRequest(`/api/v2/members/creator-info`, 'POST', formData)
    .then((res) => {
      if (res.status === 500) {
        throw new Error('Internal Server Error');
      }

      if (res.status === 200) {
        return res;
      }
    })
    .catch((err) => {
      // console.log(err);
      throw err;
    });
};

// 아이콘 제작자 정보 수정
export const putCreatorInfo = async ({
  profile,
  creatorRequest,
}: CreatorInfoRequestBody): Promise<any> => {
  const formData = new FormData();

  formData.append('profile', profile);

  const requestBlob = new Blob([JSON.stringify(creatorRequest)], {
    type: 'application/json',
  });

  formData.append('creatorRequest', requestBlob);

  await apiRequest(`/api/v2/members`, 'PUT', formData)
    .then((res) => {
      if (res.status === 500) {
        throw new Error('Internal Server Error');
      }

      if (res.status === 200) {
        return res;
      }
    })
    .catch((err) => {
      // console.log(err);
      throw err;
    });
};