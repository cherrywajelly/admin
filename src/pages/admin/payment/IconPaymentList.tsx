import { ReactNode, useContext, useEffect, useState } from 'react';
import { ContextProps } from '../../../types/Props';
import { useNavigate } from 'react-router-dom';
import Context from '../../../contexts/Context';
import { AdminMenu } from '../../../types/Enums';
import { IconPayment } from '../../../types/Types';
import Button from '../../../components/Button';
import { getIconPayments } from '../../../api/admin/iconPayment';
import TableHeader from '../../../components/TableHeader';
import Divider from '@mui/material/Divider';

const IconPaymentListPage = (): ReactNode => {
  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;
  const [iconPayments, setIconPayments] = useState<IconPayment[]>([]);

  const handleButtonClick = (id: number): void => {
    setSelectedMenu(AdminMenu.TOAST_DETAIL);
    navigate(`/admin/iconPayments/${id}`);
  };

  useEffect((): void => {
    const fetchIconPaymentList = async () => {
      const data = await getIconPayments(0, 1000);
      setIconPayments(data);
    };

    fetchIconPaymentList();
}, []);

  return (
    <div>
      <TableHeader headers={[
        { width: '2/12', text: '구매 항목' },
        { width: '2/12', text: '구매자' },
        { width: '1/12', text: '가격' },
        { width: '1/12', text: '결제 상태' },
        { width: '2/12', text: '결제 일자' },
        { width: '2/12', text: '' },
        { width: '2/12', text: '' },
      ]} />
      {iconPayments.map((iconPayment: IconPayment, idx: number) => (
        <div className={`w-full`}>
          <div className={`flex flex-row items-center p-4 w-full h-28`}>
            <p className="text-lg w-2/12 text-center">{iconPayment.itemName}</p>
            <p className="text-lg w-2/12 text-center">{iconPayment.nickname}</p>
            <p className="text-lg w-1/12 text-center">{iconPayment.amount}</p>
            <p className="text-lg w-1/12 text-center">{iconPayment.paymentState}</p>
            <p className="text-lg w-2/12 text-center">{iconPayment.createdAt}</p>
            <div className="flex flex-row w-2/12 justify-center"/>
            <div className="flex flex-row w-2/12 justify-center">
              <Button text="상세 보기" onClick={(): void => handleButtonClick(iconPayment.id)} />
            </div>
          </div>
          {idx < iconPayments.length - 1 && <Divider sx={{ width: '100%', backgroundColor: 'gray-80' }} />}
        </div>
      ))}
    </div>
  );
};

export default IconPaymentListPage;
