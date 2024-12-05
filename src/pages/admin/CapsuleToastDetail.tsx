import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CapsuleToastDetail } from '../../types/Types';
import InfoSection from '../../sections/InfoSection';
import PiecesSection from '../../sections/PiecesSection';

const CapsuleToastDetailPage = (): ReactNode => {
  const { id } = useParams();
  const [capsuleToastDetail, setCapsuleToastDetail] = useState<CapsuleToastDetail>();

  useEffect(() => {
    setCapsuleToastDetail({
      id: 1,
      image: '/images/empty.png',
      title: 'Title',
      group: 'Group',
      memoDate: '2024-01-01',
      openDate: '2024-01-01',
      isOpened: false,
      capsuleToastType: 'GROUP',
      createdAt: '2024-01-01',
      pieces: [
        {
          id: 1,
          title: 'Title',
          image: '/images/empty.png',
          nickname: 'Nickname',
          createdAt: '2024-01-01',
        },
        {
          id: 2,
          title: 'Title',
          image: '/images/empty.png',
          nickname: 'Nickname',
          createdAt: '2024-01-01',
        },
      ],
    });
  }, [id]);

  return (
    capsuleToastDetail && (
      <div className="min-h-screen p-8 space-y-8">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-4">
            <img src={capsuleToastDetail.image} alt="Profile" className="w-24 h-24" />
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-bold">{capsuleToastDetail.title}</h1>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4"></div>
        </div>
        <InfoSection infos={[
          { key: '기록 날짜', value: capsuleToastDetail.memoDate },
          { key: '열림 날짜', value: capsuleToastDetail.openDate },
          { key: '열림 여부', value: capsuleToastDetail.isOpened ? '열림' : '닫힘' },
          { key: '생성 날짜', value: capsuleToastDetail.createdAt },
          { key: '그룹', value: capsuleToastDetail.group },
          { key: '토스트 타입', value: capsuleToastDetail.capsuleToastType },
        ]} />

        <PiecesSection pieces={capsuleToastDetail.pieces} />
      </div>
    )
  );
};

export default CapsuleToastDetailPage;
