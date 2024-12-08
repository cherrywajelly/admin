import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconPayment } from '../../../types/Types';
import ListElem from '../../../components/ListElem';
import Button from '../../../components/Button';
import { getIconPayments } from '../../../api/admin/iconPayment';

const IconPaymentListPage = (): ReactNode => {
  const navigate = useNavigate();
  const [iconPayments, setIconPayments] = useState<IconPayment[]>([]);

  const handleButtonClick = (id: number): void => {
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
      {iconPayments.map((iconPayment: IconPayment, idx: number) => (
        <ListElem
          key={idx}
          title={`${iconPayment.nickname} - ${iconPayment.itemName}`}
          subtitle={iconPayment.createdAt}
          background="bg-white"
          divider={idx < iconPayments.length - 1}
          buttons={[
            <Button text="상세 보기" onClick={() => handleButtonClick(iconPayment.id)} />,
          ]}
        />
      ))}
    </div>
  );
};

export default IconPaymentListPage;
