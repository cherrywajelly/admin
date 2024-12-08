import { apiRequest } from "..";
import { IconPaymentsElemResponse, PaymentResponse } from "../../types/api/admin/API";

export const getIconPayments = async (page: number, size: number): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/payments/icons?page=${page}&size=${size}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: IconPaymentsElemResponse[] = (await res.json()).paymentsAdminResponses;

    const mappedData = data.map((iconPayment: IconPaymentsElemResponse) => ({
      id: iconPayment.paymentId,
      nickname: iconPayment.nickname,
      itemName: iconPayment.itemName,
      itemType: iconPayment.itemType,
      amount: iconPayment.amount,
      paymentState: iconPayment.paymentState,
      createdAt: iconPayment.createdAt,
      expiredDate: iconPayment.expiredDate,
    }));

    return mappedData;
  } catch (error) {
    console.error('Failed to get icon group list:', error);
  }
};

export const getIconPayment = async (paymentId: string): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/payments/${paymentId}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: PaymentResponse = await res.json();

    const mappedData = {
      id: data.orderId,
      nickname: data.nickname,
      itemType: data.itemType,
      itemName: data.itemName,
      amount: data.amount,
      paymentState: data.paymentState,
      expiredDate: data.expiredDate,
      createdAt: data.createdAt,
      image: data.iconThumbnailImageUrl,
    };
    
    return mappedData;
  } catch (error) {
    console.error('Failed to get inquiry detail:', error);
  }
};