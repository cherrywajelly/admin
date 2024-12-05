import { apiRequest } from "..";
import { CapsuleToastResponse, CapsuleToastsElemResponse } from '../../types/api/admin/API';

export const getCapsuleToasts = async (): Promise<any> => {
  try {
    const res = await apiRequest('/api/v3/giftToasts');

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: CapsuleToastsElemResponse[] = (await res.json()).giftToastManagerResponses;

    const mappedData = data.map((capsuleToast: CapsuleToastsElemResponse) => ({
      id: capsuleToast.giftToastId,
      title: capsuleToast.title,
      image: capsuleToast.iconImageUrl,
      group: capsuleToast.name,
    }));

    return mappedData;
  } catch (error) {
    console.error('Failed to get icon group list:', error);
  }
};

export const getCapsuleToast = async (capsuleToastId: string): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/giftToasts/${capsuleToastId}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: CapsuleToastResponse = await res.json();
    
    const mappedData = {
      id: data.giftToastId,
      image: data.iconImageUrl,
      title: data.title,
      group: data.name,
      memoDate: data.memorizedDate,
      openDate: data.openedDate,
      isOpened: data.isOpened,
      createdAt: data.createdAt,
      pieces: data.toastPieceManagerResponses.map((piece: any) => ({
        id: piece.toastPieceId,
        title: piece.title,
        image: piece.iconImageUrl,
        nickname: piece.nickname,
        createdAt: piece.createdAt,
      })),
    };
    
    return mappedData;
  } catch (error) {
    console.error('Failed to get inquiry detail:', error);
  }
};