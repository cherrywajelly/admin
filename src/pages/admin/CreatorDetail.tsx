import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CreatorInfoSection from '../../sections/CreatorInfoSection';
import IconGroupsSection from '../../sections/IconGroupsSection';
import { CreatorDetail } from '../../types/Types';
import { getCreator } from '../../api/admin/creator';

const CreatorDetailPage = (): ReactNode => {
  const { id } = useParams();
  const [creatorDetail, setCreatorDetail] = useState<CreatorDetail>();

  useEffect(() => {
    // setCreatorDetail({
    //   id: Number(id),
    //   nickname: 'Cherry',
    //   profilePicture: '/images/empty.png',
    //   bankName: BankName.IBKOKRSE,
    //   accountNumber: '1234567890',
    //   madeIconNumber: 2,
    //   soldIconNumber: 50,
    //   revenue: 100000,
    //   iconGroups: [
    //     {
    //       title: '아이콘 그룹 1',
    //       headImage: '/images/empty.png',
    //       creator: 'cherry',
    //       description: '아이콘 그룹 1',
    //       approvalState: ApprovalState.APPROVED,
    //       iconImages: [
    //         '/images/empty.png',
    //         '/images/empty.png',
    //         '/images/empty.png',
    //         '/images/empty.png',
    //         '/images/empty.png',
    //         '/images/empty.png',
    //         '/images/empty.png',
    //         '/images/empty.png',
    //         '/images/empty.png',
    //       ],
    //       soldIconNumber: 20,
    //       revenue: 40000,
    //     },
    //     {
    //       title: '아이콘 그룹 2',
    //       headImage: '/images/empty.png',
    //       creator: 'cherry',
    //       description: '아이콘 그룹 2',
    //       approvalState: ApprovalState.APPROVED,
    //       iconImages: [
    //         '/images/empty.png',
    //         '/images/empty.png',
    //         '/images/empty.png',
    //         '/images/empty.png',
    //         '/images/empty.png',
    //         '/images/empty.png',
    //         '/images/empty.png',
    //         '/images/empty.png',
    //         '/images/empty.png',
    //       ],
    //       soldIconNumber: 30,
    //       revenue: 60000,
    //     },
    //   ],
    // });
    const fetchCreatorDetail = async () => {
      if (!id) return;
      
      const data = await getCreator(id);
      console.log(data);
      setCreatorDetail(data);
    };

    fetchCreatorDetail();   
  }, [id]);

  return (
    creatorDetail && (
      <div className="min-h-screen p-8 space-y-8">
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
