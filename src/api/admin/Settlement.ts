import { apiRequest } from '..';
import { SettlementsResponse, SettlementResponse, SettlementRequestBody } from '../../types/api/admin/API';
import { ApprovalState } from '../../types/Enums';

export const getSettlements = async (year: number, month: number): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/settlements?year=${year}&month=${month}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: SettlementsResponse[] = (await res.json()).settlementResponses;

    const mappedData = data.map((settlement) => ({
      id: settlement.memberId,
      nickname: settlement.nickname,
      profileUrl: settlement.profileUrl,
      isSettled: settlement.settlementState === ApprovalState.APPROVED,
    }));

    console.log(mappedData);
    
    return mappedData;
  } catch (error) {
    console.error('Failed to get inquiry detail:', error);
  }
};

export const getSettlement = async (id: number, year: number, month: number): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/settlements/creators/${id}?year=${year}&month=${month}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: SettlementResponse = await res.json();

    const mappedData = {
      year: data.year,
      month: data.month,
      nickname: data.creatorNickname,
      soldIconNumber: data.salesIconCount,
      revenue: data.totalRevenue,
      settlement: data.settlement,
      iconGroups: data.settlementIcons,
    };
    
    return mappedData;
  } catch (error) {
    console.error('Failed to get inquiry detail:', error);
  }
};

export const postSettlement = async (id: string, requestBody: SettlementRequestBody): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/settlements/creators/${id}`, 'POST', requestBody);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return res;
  } catch (error) {
    console.error('Failed to post icon group:', error);
  }
};