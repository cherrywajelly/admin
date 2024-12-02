import { apiRequest } from '..';
import { CreatorIconResponse, CreatorInfoResponse, CreatorsElemResponse } from '../../types/api/admin/API';

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

export const getCreator = async (creatorId: string): Promise<any> => {
  try {
    const resInfo = await apiRequest(`/api/v3/creators/${creatorId}`);

    if (!resInfo.ok) {
      throw new Error(`HTTP error! Status: ${resInfo.status}`);
    }

    const dataInfo: CreatorInfoResponse = await resInfo.json();

    const mappedDataInfo = {
      profilePicture: dataInfo.profileUrl,
      nickname: dataInfo.nickname,
      bankName: dataInfo.bank,
      // bankName: BankName[dataInfo.bank as keyof typeof BankName],
      accountNumber: dataInfo.accountNumber,
    };

    console.log(mappedDataInfo);

    const resIcon = await apiRequest(`/api/v3/creators/${creatorId}/iconGroups`);

    if (!resIcon.ok) {
      throw new Error(`HTTP error! Status: ${resIcon.status}`);
    }

    const dataIcon: CreatorIconResponse = await resIcon.json();

    const mappedDataIcon = {
      soldIconNumber: dataIcon.salesIconCount,
      revenue: dataIcon.totalRevenue,
      madeIconNumber: dataIcon.createdIconCount,
      iconGroups: dataIcon.creatorIconInfos,
    };

    const mappedData = { ...mappedDataInfo, ...mappedDataIcon };

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
