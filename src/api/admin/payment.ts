import { apiRequest } from "..";
import { PaymentsElemResponse, PaymentResponse } from '../../types/api/admin/API';

export const getPayments = async (page: number, size: number): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/payments?page=${page}&size=${size}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: PaymentsElemResponse[] = (await res.json()).paymentsAdminResponses;

    const mappedData = data.map((payment: PaymentsElemResponse) => ({
      id: payment.paymentId,
      nickname: payment.nickname,
      itemName: payment.itemName,
      itemType: payment.itemType,
      createdAt: payment.createdAt,
    }));

    return mappedData;
  } catch (error) {
    console.error('Failed to get icon group list:', error);
  }
};

export const getPayment = async (paymentId: string): Promise<any> => {
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