import { ReactNode, useEffect, useState } from 'react';
import { CreatorDetailProps } from '../../types/Props';
import CreatorSection from '../../sections/CreatorSection';
import IconGroupsSection from '../../sections/IconGroupsSection';

const CreatorDetail = (): ReactNode => {
  const [creatorDetail, setCreatorDetail] = useState<CreatorDetailProps>();

  useEffect(() => {
    setCreatorDetail({
      id: 0,
      title: '노노노',
      headImage: '/images/empty.png',
      madeIconNumber: 2,
      totalRevenue: 200000,
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
          revenue: 100000
        },
      ],
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen p-8">
      <div className="flex flex-row items-center mb-6">
        <img src={creatorDetail?.headImage} alt="Profile" className="w-24 h-24 rounded-full mr-8" />
        <div className="mx-4">
          <h1 className="text-2xl font-bold">{creatorDetail?.title}</h1>
        </div>
      </div>
      <CreatorSection madeIconNumber={creatorDetail?.madeIconNumber ?? 0} totalRevenue={creatorDetail?.totalRevenue ?? 0} />
      <div className='mb-8'/>
      <IconGroupsSection iconGroups={creatorDetail?.iconGroups ?? []} />
    </div>
  );
};

export default CreatorDetail;
