import { ReactNode, useContext, useEffect } from 'react';
import { ContextProps } from '../../types/Props';
import { useNavigate } from 'react-router-dom';
import Context from '../../contexts/Context';
import { AdminMenu } from '../../types/Enums';

const GroupListPage = (): ReactNode => {
  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  const handleButtonClick = (id: number): void => {
    setSelectedMenu(AdminMenu.GROUP_DETAIL);
    navigate(`/admin/groups/${id}`);
  };

  useEffect((): void => {

  }, []);

  return (
    <div>
      GroupList
    </div>
  );
};

export default GroupListPage;
