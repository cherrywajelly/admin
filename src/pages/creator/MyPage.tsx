import { ReactNode, useEffect, useState } from 'react';
import CreatorSection from '../../sections/CreatorInfoSection';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { CreatorMember } from '../../types/Types';
import { getCreatorInfo } from '../../api/creator/member';
import IconGroupsSection from '../../sections/IconGroupsSection';

const MyPage = (): ReactNode => {
  const [creatorDetail, setCreatorDetail] = useState<CreatorMember>();

  const navigate = useNavigate();

  const handleAccountModification = () => {
    navigate('/creator/modify');
  };

  useEffect(() => {
    const fetchCreatorInfo = async () => {
      const data = await getCreatorInfo();
      setCreatorDetail(data);
    };

    fetchCreatorInfo();
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
