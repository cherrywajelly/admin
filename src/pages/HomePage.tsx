import { ReactNode, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../contexts/Context';
import Header from '../components/Header';
import CreatorPage from './creator/CreatorPage.tsx';
import AdminPage from './admin/AdminPage.tsx';

const HomePage = (): ReactNode => {
  const { role } = useContext(Context) as { role: keyof typeof pageType };
  const navigate = useNavigate();

  useEffect(() => {
    if (!role) {
      navigate('/login');
    }
  }, []);

  const pageType = {
    creator: <CreatorPage />,
    admin: <AdminPage />,
  } as const;

  return (
    <>
      <Header />
      {pageType[role]}
    </>
  );
};

export default HomePage;
