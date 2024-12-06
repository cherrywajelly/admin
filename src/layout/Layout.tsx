import { ReactNode, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.tsx';
import Sidebar from './Sidebar.tsx';
import Divider from '@mui/material/Divider';
import { SidebarMenu } from '../types/Props.tsx';
import { AdminMenu, CreatorMenu } from '../types/Enums.tsx';
import { getEnv } from '../utils/utils';

const Layout = (): ReactNode => {
  const [sidebarMenus, setSidebarMenus] = useState<SidebarMenu[]>();
  const [externalLinks, setExternalLinks] = useState<SidebarMenu[]>();

  const renderSidebar = (): ReactNode => {
    if (!sidebarMenus) {
      return <></>;
    }

    switch (localStorage.getItem('role')) {
      case 'creator':
        return <Sidebar sidebarMenus={sidebarMenus} />;

      case 'admin':
        return <Sidebar sidebarMenus={sidebarMenus} externalLinks={externalLinks} />;
    }
  };

  useEffect(() => {
    if (!localStorage.getItem('role')) {
      window.location.href = '/login';
      return;
    }
    
    switch (localStorage.getItem('role')) {
      case 'creator':
        setSidebarMenus([
          {
            menu: CreatorMenu.ICON_LIST,
            url: '/creator/icons',
          },
          {
            menu: CreatorMenu.ICON_REGISTER,
            url: '/creator/register',
          },
          {
            menu: CreatorMenu.SETTLEMENT_LIST,
            url: '/creator/settlements',
          },
          {
            menu: CreatorMenu.MY_PAGE,
            url: '/creator/mypage',
          },
        ]);
        break;

      case 'admin':
        setSidebarMenus([
          {
            menu: AdminMenu.ICON_LIST,
            url: '/admin/icons',
          },
          {
            menu: AdminMenu.CREATOR_LIST,
            url: '/admin/creators',
          },
          {
            menu: AdminMenu.SETTLEMENT_LIST,
            url: '/admin/settlements',
          },
          {
            menu: AdminMenu.INQUIRY_LIST,
            url: '/admin/inquiries',
          },
          {
            menu: AdminMenu.USER_LIST,
            url: '/admin/users',
          },
          {
            menu: AdminMenu.TOAST_LIST,
            url: '/admin/toasts',
          },
          {
            menu: AdminMenu.GROUP_LIST,
            url: '/admin/groups',
          },
          {
            menu: AdminMenu.PAYMENT_LIST,
            url: '/admin/payments',
          },
        ]);

        setExternalLinks([
          {
            menu: AdminMenu.PROMETHEUS,
            url: getEnv('VITE_PROMETHEUS_URL'),
          },
          // {
          //   menu: AdminMenu.LOKI,
          //   url: 'https://grafana.com/oss/loki/',
          // },
        ]);
        break;
    }
  }, []);

  return (
    <>
      <Header />
      <Divider sx={{ width: '100%', backgroundColor: 'black' }} />

      <div className="flex flex-row">
        {renderSidebar()}
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
