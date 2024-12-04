import { ReactNode, useContext, useEffect } from 'react';
import { ContextProps } from '../../types/Props';
import { useNavigate } from 'react-router-dom';
import Context from '../../contexts/Context';
import { AdminMenu } from '../../types/Enums';

const PaymentListPage = (): ReactNode => {
  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  const handleButtonClick = (id: number): void => {
    setSelectedMenu(AdminMenu.PAYMENT_DETAIL);
    navigate(`/admin/payments/${id}`);
  };

  useEffect((): void => {

  }, []);

  return (
    <div>
      PaymentList
    </div>
  );
};

export default PaymentListPage;
