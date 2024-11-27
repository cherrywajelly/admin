import { ReactNode, useContext, useState, useEffect } from 'react';
import { ContextProps, SidebarMenu } from '../../types/Props.tsx';
import Sidebar from '../../components/Sidebar.tsx';
import IconList from './IconList.tsx';
import IconDetail from './IconDetail.tsx';
import CreatorList from './CreatorList.tsx';
import CreatorDetail from './CreatorDetail.tsx';
import SettlementList from './SettlementList.tsx';
import SettlementDetail from './SettlementDetail.tsx';
import InquiryList from './InquiryList.tsx';
import InquiryDetail from './InquiryDetail.tsx';
import Context from '../../contexts/Context.tsx';
import { AdminMenu } from '../../types/Enums.tsx';

const AdminPage = (): ReactNode => {
  const [sidebarMenus, setSidebarMenus] = useState<SidebarMenu[]>();
  const [externalLinks, setExternalLinks] = useState<SidebarMenu[]>();
  const { selectedMenu } = useContext(Context) as ContextProps;

  const renderContent = (): ReactNode => {
    switch (selectedMenu) {
      case AdminMenu.ICON_LIST:
        return <IconList />;
      case AdminMenu.ICON_DETAIL:
        return <IconDetail />;
      case AdminMenu.CREATOR_LIST:
        return <CreatorList />;
      case AdminMenu.CREATOR_DETAIL:
        return <CreatorDetail />;
      case AdminMenu.SETTLEMENT_LIST:
        return <SettlementList />;
      case AdminMenu.SETTLEMENT_DETAIL:
        return <SettlementDetail />;
      case AdminMenu.INQUIRY_LIST:
        return <InquiryList />;
      case AdminMenu.INQUIRY_DETAIL:
        return <InquiryDetail />;
    }
  };

  useEffect((): void => {
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
        url: 'https://prometheus.io',
      },
      {
        menu: AdminMenu.LOKI,
        url: 'https://grafana.com/oss/loki/',
      },
    ]);
  }, []);

  return (
    <div className="flex flex-row">
      {sidebarMenus && externalLinks && (
        <Sidebar sidebarMenus={sidebarMenus} externalLinks={externalLinks} />
      )}
      <div className="w-full">{renderContent()}</div>
    </div>
  );
};

export default AdminPage;
