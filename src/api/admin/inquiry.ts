import { apiRequest } from '..';
import { InquiriesElemResponse, InquiryResponse } from '../../types/API';
import { fetchText } from '../../utils/utils';

export const getInquiryList = async (): Promise<any> => {
  try {
    const res = await apiRequest('/api/v3/inquiries');

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();

    const mappedData = data.inquiryResponses.map((inquiriesElem: InquiriesElemResponse) => ({
      id: inquiriesElem.inquiryId,
      title: inquiriesElem.title,
      isResolved: inquiriesElem.inquiryState === 'RESOLVED',
    }));
    
    return mappedData;
  } catch (error) {
    console.error('Failed to get inquiry list:', error);
  }
};

export const getInquiryDetail = async (inquiryId: string): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/inquiries/${inquiryId}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: InquiryResponse = await res.json();

    const mappedData = {
      id: data.id,
      author: data.email,
      title: data.title,
      content: await fetchText(data.contentsUrl),
      createdAt: data.createdAt,
      isResolved: data.inquiryState === 'RESOLVED',
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
