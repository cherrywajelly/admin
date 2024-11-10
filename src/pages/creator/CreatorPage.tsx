import { ReactNode, useState } from 'react';
import Sidebar from './Sidebar.tsx';
import IconList from './IconList.tsx';
import RegisterIcon from './RegisterIcon.tsx';
import Settlement from './Settlement.tsx';
import MyPage from './MyPage.tsx';

const CreatorPage = (): ReactNode => {
  const [selectedMenu, setSelectedMenu] = useState<string>('');

  const renderContent = () => {
    switch (selectedMenu) {
      case '아이콘 목록':
        return <IconList />;
      case '아이콘 등록':
        return <RegisterIcon />;
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

export default CreatorPage;
