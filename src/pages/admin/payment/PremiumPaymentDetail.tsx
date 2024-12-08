import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PremiumPaymentDetail } from '../../../types/Types';
import InfoSection from '../../../sections/InfoSection';
import { getPremiumPayment } from '../../../api/admin/premiumPayment';
import DetailHeaderSection from '../../../sections/DetailHeaderSection';

const PremiumPaymentDetailPage = (): ReactNode => {
  const { id } = useParams();
  const [premiumPaymentDetail, setPremiumPaymentDetail] = useState<PremiumPaymentDetail>();

  useEffect(() => {
    const fetchPremiumPaymentDetail = async () => {
      if (!id) return;
      
      const data = await getPremiumPayment(id);
      setPremiumPaymentDetail(data);
      console.log(data);
    };

    fetchPremiumPaymentDetail();   
  }, [id]);

  return (
    premiumPaymentDetail && (
      <div className="min-h-screen p-8 space-y-8">
        <DetailHeaderSection title={'프리미엄 구매 상세 조회'} /> 
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-4">
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-bold">{`${premiumPaymentDetail.nickname}님의 구매 내역`}</h1>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4"></div>
        </div>

        <InfoSection infos={[
          { key: '구매 항목', value: 'Premium' },
          { key: '구매 날짜', value: premiumPaymentDetail.createdAt },
          { key: '지불 금액', value: premiumPaymentDetail.amount.toLocaleString() },
          { key: '만료 날짜', value: premiumPaymentDetail.expiredDate },
          { key: '결제 상태', value: premiumPaymentDetail.paymentState },
          { key: '주문 번호', value: premiumPaymentDetail.id },
        ]} />
      </div>
    )
  );
};

export default PremiumPaymentDetailPage;
