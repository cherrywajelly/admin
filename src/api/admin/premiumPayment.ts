import { apiRequest } from "..";
import { PremiumPaymentsElemResponse, PaymentResponse } from "../../types/api/admin/API";

export const getPremiumPayments = async (page: number, size: number): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/payments/premiums?page=${page}&size=${size}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: PremiumPaymentsElemResponse[] = (await res.json()).paymentsAdminResponses;

    const mappedData = data.map((premiumPayment: PremiumPaymentsElemResponse) => ({
      id: premiumPayment.paymentId,
      nickname: premiumPayment.nickname,
      itemName: premiumPayment.itemName,
      itemType: premiumPayment.itemType,
      amount: premiumPayment.amount,
      paymentState: premiumPayment.paymentState,
      createdAt: premiumPayment.createdAt,
    }));

    return mappedData;
  } catch (error) {
    console.error('Failed to get premium payment list:', error);
  }
};

export const getPremiumPayment = async (paymentId: string): Promise<any> => {
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