import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Creator } from '../../types/Props';
import CreatorSection from '../../sections/CreatorSection';
import IconGroupsSection from '../../sections/IconGroupsSection';
import { BankName } from '../../types/Enums';
import Button from '../../components/Button';

const SettlementDetail = (): ReactNode => {
  const { id } = useParams();
  const [creatorDetail, setCreatorDetail] = useState<Creator>({} as Creator);

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
          id: 0,
          title: '루돌프 토스트',
          iconImages: [
            '/images/christmas/r1.png',
            '/images/christmas/r2.png',
            '/images/christmas/r3.png',
            '/images/christmas/r4.png',
            // '/images/christmas/r5.png',
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
            // '/images/christmas/s5.png',
          ],
          soldIconNumber: 27,
          revenue: 29700,
        },
      ],
    });
  }, [id]);

  return (
    <div className="flex flex-col min-h-screen p-8">
      <div className="flex flex-row items-center mb-6">
        <img src={creatorDetail.profilePicture} alt="Profile" className="w-24 h-24 rounded-full mr-8" />
        <div className="mx-4">
          <h1 className="text-2xl font-bold">{creatorDetail.nickname}</h1>
        </div>
        <div className="ml-auto">
          <Button
            text="정산하기"
            onClick={() => alert('정산이 완료되었습니다.')}
          />
        </div>
      </div>
      <CreatorSection
        soldIconNumber={creatorDetail.soldIconNumber}
        revenue={creatorDetail.revenue}
        bankName={creatorDetail.bankName}
        accountNumber={creatorDetail.accountNumber}
      />
      <div className="mb-8" />
      <IconGroupsSection iconGroups={creatorDetail.iconGroups ?? []} />
    </div>
  );
};

export default SettlementDetail;
