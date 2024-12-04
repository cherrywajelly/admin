import { ReactNode, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PaymentDetailPage = (): ReactNode => {
  const { id } = useParams();

  useEffect(() => {

  }, [id]);

  return (
    <div>
      PaymentDetail
    </div>
  );
};

export default PaymentDetailPage;
