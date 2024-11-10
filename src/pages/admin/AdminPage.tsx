import { ReactNode, useState } from 'react';
import Sidebar from './Sidebar.tsx';
import IconList from './IconList.tsx';
import CreatorList from './CreatorList.tsx';
import MyPage from './MyPage.tsx';
import Settlement from './Settlement.tsx';

const AdminPage = (): ReactNode => {
  const [selectedMenu, setSelectedMenu] = useState<string>('');

  const renderContent = () => {
    switch (selectedMenu) {
      case '아이콘 목록':
        return <IconList />;
      case '제작자 목록':
        return <CreatorList />;
      case '정산':
        return <Settlement />;
      case '마이페이지':
        return <MyPage />;
    }
  };

  return (
    <div className="flex flex-row">
      <Sidebar setSelectedMenu={setSelectedMenu} />
      <div className="ml-4">{renderContent()}</div>
    </div>
  );
};

export default AdminPage;
