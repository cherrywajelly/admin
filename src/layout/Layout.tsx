import { ReactNode, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.tsx';
import Sidebar from './Sidebar.tsx';
import Divider from '@mui/material/Divider';
import { SidebarMenu } from '../types/Props.tsx';
import { AdminMenu, CreatorMenu } from '../types/Enums.tsx';

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
        ]);

        setExternalLinks([
          {
            menu: AdminMenu.PROMETHEUS,
            url: 'https://prometheus.timetoast.app/graph?g0.expr=100%20-%20(avg%20by%20(instance)%20(irate(node_cpu_seconds_total%7Bmode%3D%22idle%22%7D%5B5m%5D))%20*%20100)&g0.tab=0&g0.display_mode=lines&g0.show_exemplars=1&g0.range_input=12h&g1.expr=node_memory_MemTotal_bytes%20-%20node_memory_MemAvailable_bytes&g1.tab=0&g1.display_mode=lines&g1.show_exemplars=0&g1.range_input=12h',
          },
          {
            menu: AdminMenu.LOKI,
            url: 'https://grafana.com/oss/loki/',
          },
        ]);
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
