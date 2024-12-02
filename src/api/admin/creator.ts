import { apiRequest } from '..';
import { CreatorResponse, CreatorsElemResponse } from '../../types/api/admin/API';
import { fetchText } from '../../utils/utils';

export const getCreators = async (): Promise<any> => {
  try {
    const res = await apiRequest('/api/v3/creators');

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: CreatorsElemResponse[] = (await res.json()).creatorResponses;

    const mappedData = data.map((creatorsElem: CreatorsElemResponse) => ({
      id: creatorsElem.memberId,
      nickname: creatorsElem.nickname,
      profilePicture: creatorsElem.profileUrl,
    }));
    
    return mappedData;
  } catch (error) {
    console.error('Failed to get inquiry list:', error);
  }
};

export const getCreator = async (creatorId: number): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/creators/${creatorId}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: CreatorResponse = await res.json();

    const mappedData = {
      profilePicture: data.profileUrl,
      nickname: data.nickname,
      bank: data.bank,
      accountNumber: data.accountNumber,
    };
    
    return mappedData;
  } catch (error) {
    console.error('Failed to get inquiry detail:', error);
  }
};

export const putInquiryResolve = async (inquiryId: string): Promise<any> => {
  try {
    await apiRequest(`/api/v3/inquiries/${inquiryId}`, 'PUT');
  } catch (error) {
    console.error('Failed to resolve inquiry:', error);
  }
};
