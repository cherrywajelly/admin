import { ReactNode, useContext, useEffect, useState } from 'react';
import { Creator } from '../../types/Props';
import CreatorSection from '../../sections/CreatorSection';
import IconGroupsSection from '../../sections/IconGroupsSection';
import { BankName } from '../../types/Enums';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import Context from '../../contexts/Context';
import { ContextProps } from '../../types/Props';

const MyPage = (): ReactNode => {
  const [creatorDetail, setCreatorDetail] = useState<Creator>({} as Creator);

  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  const handleAccountModification = () => {
    setSelectedMenu('수정하기');
    navigate('/creator/modify');
  };

  useEffect(() => {
    setCreatorDetail({
      id: 0,
      nickname: 'Cherry',
      profilePicture: '/images/empty.png',
      bankName: BankName.IBKOKRSE,
      accountNumber: '1234567890',
      madeIconNumber: 2,
      soldIconNumber: 50,
      revenue: 100000,
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
          soldIconNumber: 20,
          revenue: 40000,
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
          soldIconNumber: 30,
          revenue: 60000,
        },
      ],
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen p-8">
      <div className="flex flex-row items-center mb-6">
        <img src={creatorDetail.profilePicture} alt="Profile" className="w-24 h-24 rounded-full mr-8" />
        <div className="mx-4">
          <h1 className="text-2xl font-bold">{creatorDetail.nickname}</h1>
        </div>
        <Button
          text="수정하기"
          styles="ml-auto"
          onClick={handleAccountModification}
        />
      </div>
      <CreatorSection
        madeIconNumber={creatorDetail.madeIconNumber}
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

export default MyPage;
