import { ReactNode, useContext, useEffect, useState } from 'react';
import { ContextProps } from '../../../types/Props';
import { useNavigate } from 'react-router-dom';
import Context from '../../../contexts/Context';
import { AdminMenu } from '../../../types/Enums';
import { PremiumPayment } from '../../../types/Types';
import Button from '../../../components/Button';
import { getPremiumPayments } from '../../../api/admin/premiumPayment';
import TableHeader from '../../../components/TableHeader';
import Divider from '@mui/material/Divider';

const PremiumPaymentListPage = (): ReactNode => {
  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;
  const [premiumPayments, setPremiumPayments] = useState<PremiumPayment[]>([]);

  const handleButtonClick = (id: number): void => {
    setSelectedMenu(AdminMenu.TOAST_DETAIL);
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
      <TableHeader headers={[
        { width: '2/12', text: '구매 항목' },
        { width: '2/12', text: '구매자' },
        { width: '1/12', text: '가격' },
        { width: '1/12', text: '결제 상태' },
        { width: '2/12', text: '결제 일자' },
        { width: '2/12', text: '만료 일자' },
        { width: '2/12', text: '' },
      ]} />
      {premiumPayments.map((premiumPayment: PremiumPayment, idx: number) => (
        <div className={`w-full`}>
          <div className={`flex flex-row items-center p-4 w-full h-28`}>
            <p className="text-lg w-2/12 text-center">{'Premium'}</p>
            <p className="text-lg w-2/12 text-center">{premiumPayment.nickname}</p>
            <p className="text-lg w-1/12 text-center">{premiumPayment.amount}</p>
            <p className="text-lg w-1/12 text-center">{premiumPayment.paymentState}</p>
            <p className="text-lg w-2/12 text-center">{premiumPayment.createdAt}</p>
            <p className="text-lg w-2/12 text-center">{premiumPayment.expiredDate}</p>
            <div className="flex flex-row w-2/12 justify-center">
              <Button text="상세 보기" onClick={(): void => handleButtonClick(premiumPayment.id)} />
            </div>
          </div>
          {idx < premiumPayments.length - 1 && <Divider sx={{ width: '100%', backgroundColor: 'gray-80' }} />}
        </div>
      ))}
    </div>
  );
};

export default PremiumPaymentListPage;
