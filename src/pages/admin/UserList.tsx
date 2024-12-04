import { ReactNode, useContext, useEffect } from 'react';
import { ContextProps } from '../../types/Props';
import { useNavigate } from 'react-router-dom';
import Context from '../../contexts/Context';
import { AdminMenu } from '../../types/Enums';

const UserListPage = (): ReactNode => {
  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  const handleButtonClick = (id: number): void => {
    setSelectedMenu(AdminMenu.USER_DETAIL);
    navigate(`/admin/users/${id}`);
  };

  useEffect((): void => {

  }, []);

  return (
    <div>
      UserList
    </div>
  );
};

export default UserListPage;
