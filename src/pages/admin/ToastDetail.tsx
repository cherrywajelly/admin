import { ReactNode, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ToastDetailPage = (): ReactNode => {
  const { id } = useParams();

  useEffect(() => {

  }, [id]);

  return (
    <div>
      ToastDetail
    </div>
  );
};

export default ToastDetailPage;
