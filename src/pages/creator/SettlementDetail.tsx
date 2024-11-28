import { ReactNode, useEffect, useState } from 'react';
import { Creator } from '../../types/Props';
import CreatorSection from '../../sections/CreatorInfoSection';
import IconGroupsSection from '../../sections/IconGroupsSection';
import { ApprovalState } from '../../types/Enums';
import { useParams } from 'react-router-dom';

const SettlementDetail = (): ReactNode => {
  const { id } = useParams();
  const [settlementDetail, setSettlementDetail] = useState<Creator>();

  useEffect(() => {
    setSettlementDetail({
      id: Number(id),
      nickname: '박하준',
      profilePicture: '/images/test/1.jpeg',
      bankName: '국민은행',
      accountNumber: '1234567890',
      madeIconNumber: 0,
      soldIconNumber: 48,
      revenue: 52800,
      iconGroups: [
        {
          id: 0,
          title: '루돌프 토스트',
          headImage: '/images/christmas/r1.png',
          iconImages: [
            '/images/christmas/r1.png',
            '/images/christmas/r2.png',
            '/images/christmas/r3.png',
            '/images/christmas/r4.png',
            '/images/christmas/r5.png',
            '/images/christmas/r6.png',
            '/images/christmas/r7.png',
            '/images/christmas/r8.png',
            '/images/christmas/r9.png',
          ],
          soldIconNumber: 21,
          revenue: 23100,
          creator: '박하준',
          description: '루돌프 토스트',
          approvalState: ApprovalState.APPROVED,
        },
        {
          id: 1,
          title: '산타 토스트',
          headImage: '/images/christmas/s1.png',
          iconImages: [
            '/images/christmas/s1.png',
            '/images/christmas/s2.png',
            '/images/christmas/s3.png',
            '/images/christmas/s4.png',
            '/images/christmas/s5.png',
            '/images/christmas/s6.png',
            '/images/christmas/s7.png',
            '/images/christmas/s8.png',
            '/images/christmas/s9.png',
          ],
          soldIconNumber: 27,
          revenue: 29700,
          creator: '박하준',
          description: '산타 토스트',
          approvalState: ApprovalState.APPROVED,
        },
      ],
    });
  }, [id]);

  return (
    settlementDetail && (
      <div className="min-h-screen p-8 space-y-8">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-4">
            <img src={settlementDetail.profilePicture} alt="Profile" className="w-24 h-24" />
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-bold w-40">{settlementDetail.nickname}</h1>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4"></div>
        </div>
        <CreatorSection
          soldIconNumber={settlementDetail.soldIconNumber}
          revenue={settlementDetail.revenue}
        />
        <IconGroupsSection iconGroups={settlementDetail.iconGroups} />
      </div>
    )
  );
};

export default SettlementDetail;
