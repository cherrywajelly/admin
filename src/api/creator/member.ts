import { apiRequest } from '..';
import { CreatorInfoRequestBody } from '../../types/api/creator/API';
import { BankName } from '../../types/Enums';

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
      bankName: BankName[data.creatorInfoResponse.bank as keyof typeof BankName],
      accountNumber: data.creatorInfoResponse.accountNumber,
      madeIconNumber: data.createdIconCount,
      soldIconNumber: data.selledIconCount,
      revenue: data.revenue,
      settlement: data.settlement,
      iconGroups: data.iconGroupOrderedResponses.iconGroupOrderedResponses.map(
        (iconGroup: any) => ({
          title: iconGroup.iconName,
          salesCount: iconGroup.orderCount,
          revenue: iconGroup.income,
          iconImageUrl: iconGroup.iconImageUrl,
        })
      ),
    };

    return mappedData;
  } catch (error) {
    console.error('Failed to get inquiry list:', error);
  }
};

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
      throw err;
    });
};

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
      throw err;
    });
};

export const getNicknameCheck = async (nickname: string): Promise<boolean> => {
  try {
    const res = await apiRequest(`/api/v2/members/nickname-validation?nickname=${nickname}`);

    if (res.ok) {
      alert('사용 가능한 닉네임입니다.');
      return true;
    }

    alert('닉네임 확인 중 오류가 발생했습니다.');
    return false;
  } catch (err) {
    alert('이미 존재하는 닉네임입니다.');
    return false;
  }
};

// 아이콘 제작자 탈퇴
export const deleteWithdrawal = async () => {
  await apiRequest(`/api/v2/withdrawal`, 'DELETE')
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
