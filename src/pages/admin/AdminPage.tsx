import { ReactNode, useContext } from 'react';
import { ContextProps } from '../../types/Props.tsx';
import Sidebar from './Sidebar.tsx';
import IconList from './IconList.tsx';
import IconDetail from './IconDetail.tsx';
import CreatorList from './CreatorList.tsx';
import CreatorDetail from './CreatorDetail.tsx';
import Settlement from './SettlementList.tsx';
import SettlementDetail from './SettlementDetail.tsx';
import InquiryList from './InquiryList.tsx';
import InquiryDetail from './InquiryDetail.tsx';
import Context from '../../contexts/Context.tsx';

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
      case '정산하기':
        return <Settlement />;
      case '정산 상세':
        return <SettlementDetail />;
      case '문의 목록':
        return <InquiryList />;
      case '문의 상세':
        return <InquiryDetail />;
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
