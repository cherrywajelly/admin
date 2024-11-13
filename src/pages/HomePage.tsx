import { ReactNode } from 'react';
import Header from '../components/Header';
import CreatorPage from './creator/CreatorPage.tsx';
import AdminPage from './admin/AdminPage.tsx';
import { Divider } from '@mui/material';

const HomePage = (): ReactNode => {
  const role = localStorage.getItem('role');

  const renderPage = () => {
    switch (role) {
      case 'creator':
        return <CreatorPage />;
      case 'admin':
        return <AdminPage />;
    }
  };

  return (
    <>
      <Header />
      <Divider sx={{ width: '100%', backgroundColor: 'black' }} />
      <div>{renderPage()}</div>
    </>
  );
};

export default HomePage;
