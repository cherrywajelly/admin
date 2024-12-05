import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PaymentDetail } from '../../types/Types';
import InfoSection from '../../sections/InfoSection';
import { getPayment } from '../../api/admin/payment';

const PaymentDetailPage = (): ReactNode => {
  const { id } = useParams();
  const [paymentDetail, setPaymentDetail] = useState<PaymentDetail>();

  useEffect(() => {
    const fetchPaymentDetail = async () => {
      if (!id) return;
      
      const data = await getPayment(id);
      setPaymentDetail(data);
    };

    fetchPaymentDetail();   
  }, [id]);

  return (
    paymentDetail && (
      <div className="min-h-screen p-8 space-y-8">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-4">
            {paymentDetail.image && <img src={paymentDetail.image} alt="Profile" className="w-24 h-24" />}
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-bold">{`${paymentDetail.nickname}님의 구매 내역`}</h1>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4"></div>
        </div>

        <InfoSection infos={[
          { key: '구매 항목', value: paymentDetail.itemName },
          { key: '구매 날짜', value: paymentDetail.createdAt },
          { key: '지불 금액', value: paymentDetail.amount.toLocaleString() },
          { key: '결제 상태', value: paymentDetail.paymentState },
          { key: '주문 번호', value: paymentDetail.id },
        ]} />
      </div>
    )
  );
};

export default PaymentDetailPage;
