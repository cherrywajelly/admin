import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Creator } from '../../types/Props';
import CreatorSection from '../../sections/CreatorInfoSection';
import IconGroupsSection from '../../sections/IconGroupsSection';
import { ApprovalState, BankName } from '../../types/Enums';
import Button from '../../components/Button';

const SettlementDetailPage = (): ReactNode => {
  const { id } = useParams();
  const [creatorDetail, setCreatorDetail] = useState<Creator>();

  useEffect(() => {
    setCreatorDetail({
      id: Number(id),
      nickname: '박하준',
      profilePicture: '/images/test/1.jpeg',
      bankName: BankName.IBKOKRSE,
      accountNumber: '974-039950-01-013',
      madeIconNumber: 2,
      soldIconNumber: 48,
      revenue: 52800,
      iconGroups: [
        {
          title: '루돌프 토스트',
          iconImages: [
            '/images/christmas/r1.png',
            '/images/christmas/r2.png',
            '/images/christmas/r3.png',
            '/images/christmas/r4.png',
            '/images/christmas/r5.png',
          ],
          headImage: '/images/christmas/r1.png',
          creator: 'cherry',
          description: '루돌프 토스트',
          approvalState: ApprovalState.APPROVED,
          soldIconNumber: 21,
          revenue: 23100,
        },
        {
          title: '산타 토스트',
          iconImages: [
            '/images/christmas/s1.png',
            '/images/christmas/s2.png',
            '/images/christmas/s3.png',
            '/images/christmas/s4.png',
            '/images/christmas/s5.png',
          ],
          headImage: '/images/christmas/s1.png',
          creator: 'cherry',
          description: '산타 토스트',
          approvalState: ApprovalState.APPROVED,
          soldIconNumber: 27,
          revenue: 29700,
        },
      ],
    });
  }, [id]);

  return (
    creatorDetail && (
      <div className="min-h-screen p-8 space-y-8">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-4">
            <img src={creatorDetail.profilePicture} alt="Profile" className="w-24 h-24" />
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-bold w-40">{creatorDetail.nickname}</h1>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <Button text="정산하기" onClick={() => alert('정산이 완료되었습니다.')} />
          </div>
        </div>
        <CreatorSection
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

export default SettlementDetailPage;
