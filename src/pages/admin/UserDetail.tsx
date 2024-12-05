import { ReactNode, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDetailPage = (): ReactNode => {
  const { id } = useParams();

  useEffect(() => {

  }, [id]);

  return (
    <div>
      UserDetail
    </div>
  );
};

export default UserDetailPage;
