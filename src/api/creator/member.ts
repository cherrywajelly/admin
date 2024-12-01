import { apiRequest } from '..';
import { CreatorInfoRequestBody } from '../../types/api/creator/API';

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