import { ReactNode, useContext, useEffect, useState } from 'react';
import { ContextProps, SidebarMenu } from '../../types/Props.tsx';
import Sidebar from '../../layout/Sidebar.tsx';
import IconList from './IconList.tsx';
import IconDetail from './IconDetail.tsx';
import IconRegister from './IconRegister.tsx';
import SettlementList from './SettlementList.tsx';
import SettlementDetail from './SettlementDetail.tsx';
import MyPage from './MyPage.tsx';
import Context from '../../contexts/Context.tsx';
import AccountModification from './AccountModification.tsx';
import { CreatorMenu } from '../../types/Enums.tsx';

const CreatorPage = (): ReactNode => {
  const [sidebarMenus, setSidebarMenus] = useState<SidebarMenu[]>();
  const { selectedMenu } = useContext(Context) as ContextProps;

  const renderContent = (): ReactNode => {
    switch (selectedMenu) {
      case CreatorMenu.ICON_LIST:
        return <IconList />;
      case CreatorMenu.ICON_DETAIL:
        return <IconDetail />;
      case CreatorMenu.ICON_REGISTER:
        return <IconRegister />;
      case CreatorMenu.SETTLEMENT_LIST:
        return <SettlementList />;
      case CreatorMenu.SETTLEMENT_DETAIL:
        return <SettlementDetail />;
      case CreatorMenu.MY_PAGE:
        return <MyPage />;
      case CreatorMenu.ACCOUNT_MODIFICATION:
        return <AccountModification />;
    }
  };

  useEffect((): void => {
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
  }, []);

  return (
    <div className="flex flex-row">
      {sidebarMenus && <Sidebar sidebarMenus={sidebarMenus} />}
      <div className="w-full">{renderContent()}</div>
    </div>
  );
};

export default CreatorPage;
