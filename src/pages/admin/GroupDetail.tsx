import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GroupDetail } from '../../types/Types';
import InfoSection from '../../sections/InfoSection';
import MemberSection from '../../sections/MembersSection';

const GroupDetailPage = (): ReactNode => {
  const { id } = useParams();
  const [groupDetail, setGroupDetail] = useState<GroupDetail>();

  useEffect(() => {
    setGroupDetail({
      id: 1,
      image: '/images/empty.png',
      title: 'Title',
      createdAt: '2024-01-01',
      members: [
        {
          id: 1,
          image: '/images/empty.png',
          nickname: 'Nickname',
        },
        {
          id: 2,
          image: '/images/empty.png',
          nickname: 'Nickname',
        },
      ],
    });
  }, [id]);

  return (
    groupDetail && (
      <div className="min-h-screen p-8 space-y-8">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-4">
            <img src={groupDetail.image} alt="Profile" className="w-24 h-24" />
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-bold">{groupDetail.title}</h1>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4"></div>
        </div>
        <InfoSection infos={[
          { key: '생성 날짜', value: groupDetail.createdAt },
        ]} />

        <MemberSection members={groupDetail.members} />
      </div>
    )
  );
};

export default GroupDetailPage;
