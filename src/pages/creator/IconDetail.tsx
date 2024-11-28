import { ReactNode, useEffect, useState } from 'react';
import { ApprovalState } from '../../types/Enums';
import { IconGroup } from '../../types/Props';
import Button from '../../components/Button';
import IconsSection from '../../sections/IconsSection';
import IconInfoSection from '../../sections/IconInfoSection';
import { useParams } from 'react-router-dom';

const IconDetail = (): ReactNode => {
  const { id } = useParams();
  const [iconDetail, setIconDetail] = useState<IconGroup>();

  useEffect((): void => {
    setIconDetail({
      id: Number(id),
      title: '루돌프 토스트',
      headImage: '/images/christmas/r1.png',
      creator: 'cherry',
      description: '크리스마스 기념 루돌프 토스트',
      approvalState: ApprovalState.PENDING,
      iconImages: [
        '/images/christmas/r1.png',
        '/images/christmas/r2.png',
        '/images/christmas/r3.png',
        '/images/christmas/r4.png',
        '/images/christmas/r5.png',
        '/images/christmas/r7.png',
        '/images/christmas/r8.png',
        '/images/christmas/r9.png',
      ],
      soldIconNumber: 10,
      revenue: 10000,
    });
  }, [id]);

  return (
    iconDetail && (
      <div className="min-h-screen p-8 space-y-8">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-4">
            <img src={iconDetail.headImage} alt="Profile" className="w-24 h-24" />
            <div className="flex flex-col space-y-1">
              <h1 className="text-2xl font-bold w-40">{iconDetail.title}</h1>
              <p className="text-gray-500">{iconDetail.creator}</p>
              <p className="flex-1">{iconDetail.description}</p>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <Button text={iconDetail.approvalState} />
          </div>
        </div>
        <IconInfoSection soldIconNumber={iconDetail.soldIconNumber} revenue={iconDetail.revenue} />
        <IconsSection iconImages={iconDetail.iconImages} />
      </div>
    )
  );
};

export default IconDetail;
