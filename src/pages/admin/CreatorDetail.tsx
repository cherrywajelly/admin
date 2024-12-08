import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CreatorInfoSection from '../../sections/CreatorInfoSection';
import IconGroupsSection from '../../sections/IconGroupsSection';
import { CreatorDetail } from '../../types/Types';
import { getCreator } from '../../api/admin/creator';
import DetailHeaderSection from '../../sections/DetailHeaderSection';

const CreatorDetailPage = (): ReactNode => {
  const { id } = useParams();
  const [creatorDetail, setCreatorDetail] = useState<CreatorDetail>();

  useEffect(() => {
    const fetchCreatorDetail = async () => {
      if (!id) return;
      
      const data = await getCreator(id);
      setCreatorDetail(data);
    };

    fetchCreatorDetail();   
  }, [id]);

  return (
    creatorDetail && (
      <div className="min-h-screen p-8 space-y-8">
        <DetailHeaderSection title={'제작자 상세 조회'} />
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-4">
            <img src={creatorDetail.profilePicture} alt="Profile" className="w-24 h-24" />
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-bold">{creatorDetail.nickname}</h1>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4"></div>
        </div>
        <CreatorInfoSection
          madeIconNumber={creatorDetail.madeIconNumber}
          soldIconNumber={creatorDetail.soldIconNumber}
          revenue={creatorDetail.revenue}
          bankName={creatorDetail.bankName}
          accountNumber={creatorDetail.accountNumber}
        />
        <IconGroupsSection iconGroups={creatorDetail.iconGroups} />
      </div>
    )
  );
};

export default CreatorDetailPage;
