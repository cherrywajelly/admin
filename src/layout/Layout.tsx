import { Outlet } from 'react-router-dom';
import Sidebar from '../pages/admin/Sidebar';
import { Sidebar2 } from '../pages/admin/Sidebar2';
import Header from '../components/Header';
import { Divider } from '@mui/material';

const Layout = () => {
  return (
    <>
      <Header />
      <Divider sx={{ width: '100%', backgroundColor: 'black' }} />

      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full border-2 border-blue-500">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
