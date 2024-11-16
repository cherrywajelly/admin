import { ReactNode, useEffect, useState } from 'react';
import { SettlementDetailProps } from '../../types/Props';
import CreatorSection from '../../sections/CreatorSection';
import IconGroupsSection from '../../sections/IconGroupsSection';

const SettlementDetail = (): ReactNode => {
  const [settlementDetail, setSettlementDetail] = useState<SettlementDetailProps>();

  useEffect(() => {
    setSettlementDetail({
      id: 0,
      title: '노노노',
      headImage: '/images/empty.png',
      sales: 150,
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
          sales: 50,
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
          sales: 100,
          revenue: 200000,
        },
      ],
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen p-8">
      <div className="flex flex-row items-center mb-6">
        <img src={settlementDetail?.headImage} alt="Profile" className="w-24 h-24 rounded-full mr-8" />
        <div className="mx-4">
          <h1 className="text-2xl font-bold">{settlementDetail?.title}</h1>
        </div>
      </div>
      <CreatorSection
        sales={settlementDetail?.sales ?? 0}
        revenue={settlementDetail?.revenue ?? 0}
      />
      <div className="mb-8" />
      <IconGroupsSection iconGroups={settlementDetail?.iconGroups ?? []} />
    </div>
  );
};

export default SettlementDetail;
