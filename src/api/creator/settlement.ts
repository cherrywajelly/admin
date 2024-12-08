import { apiRequest } from '..';
import { SettlementResponse, SettlementsElemResponse } from '../../types/api/creator/API';

export const getSettlements = async (): Promise<any> => {
  try {
    const res = await apiRequest('/api/v2/settlements');

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: SettlementsElemResponse[] = (await res.json()).settlementCreatorInfoResponses;

    const mappedData = data.map((settlement: SettlementsElemResponse) => ({
      year: settlement.year,
      month: settlement.month,
      settlementDate: settlement.settlementDate,
      settlement: settlement.settlement,
      revenue: settlement.revenue,
      saleCount: settlement.saleCount,
    }));

    return mappedData;
  } catch (error) {
    console.error('Failed to get settlement list:', error);
  }
};

export const getSettlement = async (year: number, month: number): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v2/settlements/detail?year=${year}&month=${month}`);

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
    console.error('Failed to get settlement detail:', error);
  }
};
