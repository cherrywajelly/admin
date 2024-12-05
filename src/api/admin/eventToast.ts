import { apiRequest } from "..";
import { EventToastResponse, EventToastsElemResponse } from '../../types/api/admin/API';

export const getEventToasts = async (): Promise<any> => {
  try {
    const res = await apiRequest('/api/v3/eventToasts');

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: EventToastsElemResponse[] = (await res.json()).eventToastManagerResponses;

    const mappedData = data.map((eventToast: EventToastsElemResponse) => ({
      id: eventToast.eventToastId,
      title: eventToast.title,
      image: eventToast.iconImageUrl,
      nickname: eventToast.nickname,
    }));

    return mappedData;
  } catch (error) {
    console.error('Failed to get icon group list:', error);
  }
};

export const getEventToast = async (eventToastId: string): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/eventToasts/${eventToastId}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: EventToastResponse = await res.json();
    
    const mappedData = {
      id: data.eventToastId,
      image: data.iconImageUrl,
      title: data.title,
      nickname: data.nickname,
      openedDate: data.openedDate,
      isOpened: data.isOpened,
      createdAt: data.createdAt,
      jams: data.jamManagerResponses.map((jam) => ({
        id: jam.jamId,
        title: jam.title,
        image: jam.iconImageUrl,
        nickname: jam.nickname,
        createdAt: jam.createdAt,
      })),
    };
    
    return mappedData;
  } catch (error) {
    console.error('Failed to get inquiry detail:', error);
  }
};