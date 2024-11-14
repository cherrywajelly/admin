import { ReactNode, useContext } from 'react';
import { ContextProps } from '../../types/Props.tsx';
import Sidebar from './Sidebar.tsx';
import IconList from './IconList.tsx';
import CreatorList from './CreatorList.tsx';
import MyPage from './MyPage.tsx';
import Settlement from './Settlement.tsx';
import IconDetail from './IconDetail.tsx';
import Context from '../../contexts/Context.tsx';
import CreatorDetail from './CreatorDetail.tsx';

const AdminPage = (): ReactNode => {
  const { selectedMenu } = useContext(Context) as ContextProps;

  const renderContent = (): ReactNode => {
    switch (selectedMenu) {
      case '아이콘 목록':
        return <IconList />;
      case '아이콘 상세':
        return <IconDetail />;
      case '제작자 목록':
        return <CreatorList />;
      case '제작자 상세':
        return <CreatorDetail />;
      case '정산':
        return <Settlement />;
      case '마이페이지':
        return <MyPage />;
    }
  };

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full">{renderContent()}</div>
    </div>
  );
};

export default AdminPage;
