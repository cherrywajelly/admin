import { apiRequest } from '..';

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
