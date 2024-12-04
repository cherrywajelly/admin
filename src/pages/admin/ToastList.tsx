import { ReactNode, useContext, useEffect } from 'react';
import { ContextProps } from '../../types/Props';
import { useNavigate } from 'react-router-dom';
import Context from '../../contexts/Context';
import { AdminMenu } from '../../types/Enums';

const ToastListPage = (): ReactNode => {
  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  const handleButtonClick = (id: number): void => {
    setSelectedMenu(AdminMenu.TOAST_DETAIL);
    navigate(`/admin/toasts/${id}`);
  };

  useEffect((): void => {

  }, []);

  return (
    <div>
      ToastList
    </div>
  );
};

export default ToastListPage;
