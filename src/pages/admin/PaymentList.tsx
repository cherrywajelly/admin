import { ReactNode, useContext, useEffect, useState } from 'react';
import { ContextProps } from '../../types/Props';
import { useNavigate } from 'react-router-dom';
import Context from '../../contexts/Context';
import { AdminMenu } from '../../types/Enums';
import ListElem from '../../components/ListElem';
import { Payment } from '../../types/Types';
import Button from '../../components/Button';

const PaymentListPage = (): ReactNode => {
  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;
  const [payments, setPayments] = useState<Payment[]>([]);

  const handleButtonClick = (id: number): void => {
    setSelectedMenu(AdminMenu.PAYMENT_DETAIL);
    navigate(`/admin/payments/${id}`);
  };

  useEffect((): void => {
    setPayments([
      {
        id: 1,
        nickname: 'Nickname',
        itemName: '산타맛 토스트',
        itemType: 'ICON',
        createdAt: '2024-01-01',
      },
      {
        id: 2,
        nickname: 'Nickname',
        itemName: '프리미엄',
        itemType: 'PREMIUM',
        createdAt: '2024-01-01',
      },
    ]);
  }, []);

  return (
    <div>
      {payments.map((payment: Payment, idx: number) => (
        <ListElem
          key={idx}
          title={`${payment.nickname} - ${payment.itemName}`}
          subtitle={payment.createdAt}
          background="bg-white"
          divider={idx < payments.length - 1}
          buttons={[
            <Button text="상세 보기" onClick={() => handleButtonClick(payment.id)} />,
          ]}
        />
      ))} 
    </div>
  );
};

export default PaymentListPage;
