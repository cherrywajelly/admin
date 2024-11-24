import { ReactNode, useEffect, useState } from 'react';
import { Creator } from '../../types/Props';
import CreatorSection from '../../sections/CreatorSection';
import IconGroupsSection from '../../sections/IconGroupsSection';
import { BankName } from '../../types/Enums';

const SettlementDetail = (): ReactNode => {
  const [settlementDetail, setSettlementDetail] = useState<Creator>({} as Creator);

  useEffect(() => {
    setSettlementDetail({
      id: 0,
      nickname: '노노노',
      profilePicture: '/images/empty.png',
      soldIconNumber: 150,
      revenue: 300000,
      iconGroups: [
        {
          id: 0,
          title: '아이콘 그룹 1',
          iconImages: [
            '/images/empty.png',
            '/images/empty.png',
            '/images/empty.png',
            '/images/empty.png',
            '/images/empty.png',
          ],
          soldIconNumber: 50,
          revenue: 100000,
        },
        {
          id: 1,
          title: '아이콘 그룹 2',
          iconImages: [
            '/images/empty.png',
            '/images/empty.png',
            '/images/empty.png',
            '/images/empty.png',
            '/images/empty.png',
          ],
          soldIconNumber: 100,
          revenue: 200000,
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
