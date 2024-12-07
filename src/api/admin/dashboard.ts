import { apiRequest } from '..';

// 사용자 및 제작자 수 조회
export const getMembersCount = async (): Promise<any> => {
  try {
    const res = await apiRequest('/api/v3/members/count');

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Failed to get data:', error);
  }
};

// 관리자 아이콘 그룹 top3 조회
export const getIconGroupTop3 = async (year?: string, month?: string): Promise<any> => {
  try {
    const queryParams = new URLSearchParams();
    if (year) queryParams.append('year', year);
    if (month) queryParams.append('month', month);

    const res = await apiRequest(`/api/v3/iconGroups/summary?${queryParams.toString()}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = (await res.json()).iconGroupSummaries;

    return data;
  } catch (error) {
    console.error('Failed to get data:', error);
  }
};

// 관리자 프리미엄 구독 가입자 수 조회
export const getMonthPremiumsRevenue = async (year: string): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/premiums/monthly-revenue?year=${year}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = (await res.json()).premiumMonthlyRevenues;

    return data;
  } catch (error) {
    console.error('Failed to get data:', error);
  }
};

// 관리자 월별 아이콘 판매수익 조회
export const getMonthIconRevenue = async (year: string): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/iconGroups/monthly-revenue?year=${year}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = (await res.json()).iconGroupMonthlyRevenues;

    return data;
  } catch (error) {
    console.error('Failed to get data:', error);
  }
};
