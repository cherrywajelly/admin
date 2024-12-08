import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PremiumPayment } from '../../../types/Types';
import ListElem from '../../../components/ListElem';
import Button from '../../../components/Button';
import { getPremiumPayments } from '../../../api/admin/premiumPayment';

const PremiumPaymentListPage = (): ReactNode => {
  const navigate = useNavigate();
  const [premiumPayments, setPremiumPayments] = useState<PremiumPayment[]>([]);

  const handleButtonClick = (id: number): void => {
    navigate(`/admin/premiumPayments/${id}`);
  };

  useEffect((): void => {
    const fetchPremiumPaymentList = async () => {
      const data = await getPremiumPayments(0, 1000);
      setPremiumPayments(data);
    };

    fetchPremiumPaymentList();
  }, []);

  return (
    <div>
      {premiumPayments.map((premiumPayment: PremiumPayment, idx: number) => (
        <ListElem
          key={idx}
          title={`${premiumPayment.nickname} - Premium`}
          subtitle={premiumPayment.createdAt}
          background="bg-white"
          divider={idx < premiumPayments.length - 1}
          buttons={[
            <Button text="상세 보기" onClick={() => handleButtonClick(premiumPayment.id)} />,
          ]}
        />
      ))}
    </div>
  );
};

export default PremiumPaymentListPage;
