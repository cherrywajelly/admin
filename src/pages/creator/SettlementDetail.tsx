import { ReactNode, useEffect, useState } from 'react';
import { Creator } from '../../types/Props';
import CreatorSection from '../../sections/CreatorSection';
import IconGroupsSection from '../../sections/IconGroupsSection';

const SettlementDetail = (): ReactNode => {
  const [settlementDetail, setSettlementDetail] = useState<Creator>({} as Creator);

  useEffect(() => {
    setSettlementDetail({
      id: 0,
      nickname: '박하준',
      profilePicture: '/images/test/1.jpeg',
      soldIconNumber: 48,
      revenue: 52800,
      iconGroups: [
        {
          id: 0,
          title: '루돌프 토스트',
          iconImages: [
            '/images/christmas/r1.png',
            '/images/christmas/r2.png',
            '/images/christmas/r3.png',
            '/images/christmas/r4.png',
          ],
          soldIconNumber: 21,
          revenue: 23100,
        },
        {
          id: 1,
          title: '산타 토스트',
          iconImages: [
            '/images/christmas/s1.png',
            '/images/christmas/s2.png',
            '/images/christmas/s3.png',
            '/images/christmas/s4.png',
          ],
          soldIconNumber: 27,
          revenue: 29700,
        },
      ],
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen p-8">
      <div className="flex flex-row items-center mb-6">
      <img src={settlementDetail.profilePicture} alt="Profile" className="w-24 h-24 rounded-full mr-8" />
        <div className="mx-4">
          <h1 className="text-2xl font-bold">{settlementDetail.nickname}</h1>
        </div>
      </div>
      <CreatorSection
        soldIconNumber={settlementDetail.soldIconNumber}
        revenue={settlementDetail.revenue}
      />
      <div className="mb-8" />
      <IconGroupsSection iconGroups={settlementDetail.iconGroups ?? []} />
    </div>
  );
};

export default SettlementDetail;
