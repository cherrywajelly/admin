import { ReactNode, useContext, useEffect, useState } from 'react';
import { ContextProps } from '../../../types/Props';
import { useNavigate } from 'react-router-dom';
import Context from '../../../contexts/Context';
import { AdminMenu } from '../../../types/Enums';
import ListElem from '../../../components/ListElem';
import { Payment } from '../../../types/Types';
import Button from '../../../components/Button';
import { getPayments } from '../../../api/admin/payment';

const PaymentListPage = (): ReactNode => {
  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;
  const [payments, setPayments] = useState<Payment[]>([]);

  const handleButtonClick = (id: number): void => {
    setSelectedMenu(AdminMenu.PAYMENT_DETAIL);
    navigate(`/admin/payments/${id}`);
  };

  useEffect((): void => {
    const fetchPaymentList = async () => {
      const data = await getPayments(0, 200);
      setPayments(data);
    };

    fetchPaymentList();
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
