import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IconPaymentDetail } from '../../../types/Types';
import InfoSection from '../../../sections/InfoSection';
import { getIconPayment } from '../../../api/admin/iconPayment';
import DetailHeaderSection from '../../../sections/DetailHeaderSection';

const IconPaymentDetailPage = (): ReactNode => {
  const { id } = useParams();
  const [iconPaymentDetail, setIconPaymentDetail] = useState<IconPaymentDetail>();

  useEffect(() => {
    const fetchIconPaymentDetail = async () => {
      if (!id) return;
      
      const data = await getIconPayment(id);
      setIconPaymentDetail(data);
    };

    fetchIconPaymentDetail();   
  }, [id]);

  return (
    iconPaymentDetail && (
      <div className="min-h-screen p-8 space-y-8">
        <DetailHeaderSection title={'아이콘 구매 상세 조회'} />
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-4">
            {iconPaymentDetail.image && <img src={iconPaymentDetail.image} alt="Profile" className="w-24 h-24" />}
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-bold">{`${iconPaymentDetail.nickname}님의 구매 내역`}</h1>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4"></div>
        </div>

        <InfoSection infos={[
          { key: '구매 항목', value: iconPaymentDetail.itemName },
          { key: '구매 날짜', value: iconPaymentDetail.createdAt },
          { key: '지불 금액', value: iconPaymentDetail.amount.toLocaleString() },
          { key: '결제 상태', value: iconPaymentDetail.paymentState },
          { key: '주문 번호', value: iconPaymentDetail.id },
        ]} />
      </div>
    )
  );
};

export default IconPaymentDetailPage;
