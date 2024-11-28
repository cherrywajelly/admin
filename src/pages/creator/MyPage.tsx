import { ReactNode, useContext, useEffect, useState } from 'react';
import { Creator } from '../../types/Props';
import CreatorSection from '../../sections/CreatorInfoSection';
import IconGroupsSection from '../../sections/IconGroupsSection';
import { ApprovalState, BankName, CreatorMenu } from '../../types/Enums';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import Context from '../../contexts/Context';
import { ContextProps } from '../../types/Props';

const MyPage = (): ReactNode => {
  const [creatorDetail, setCreatorDetail] = useState<Creator>();

  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  const handleAccountModification = () => {
    setSelectedMenu(CreatorMenu.ACCOUNT_MODIFICATION);
    navigate('/creator/modify');
  };

  useEffect(() => {
    setCreatorDetail({
      id: 0,
      nickname: '박하준',
      profilePicture: '/images/test/1.jpeg',
      bankName: BankName.IBKOKRSE,
      accountNumber: '1234567890',
      madeIconNumber: 2,
      soldIconNumber: 50,
      revenue: 100000,
      iconGroups: [
        {
          id: 0,
          title: '아이콘 그룹 1',
          headImage: '/images/empty.png',
          creator: 'Cherry',
          description: '아이콘 그룹 1 설명',
          approvalState: ApprovalState.PENDING,
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
          headImage: '/images/empty.png',
          creator: 'Cherry',
          description: '아이콘 그룹 2 설명',
          approvalState: ApprovalState.PENDING,
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
    creatorDetail && (
      <div className="min-h-screen p-8 space-y-8">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-4">
            <img src={creatorDetail.profilePicture} alt="Profile" className="w-24 h-24" />
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-bold">{creatorDetail.nickname}</h1>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <Button text="수정하기" onClick={handleAccountModification} />
          </div>
        </div>
        <CreatorSection
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

export default MyPage;
