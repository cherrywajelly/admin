import { ReactNode, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const GroupDetailPage = (): ReactNode => {
  const { id } = useParams();

  useEffect(() => {

  }, [id]);

  return (
    <div>
      GroupDetail
    </div>
  );
};

export default GroupDetailPage;
