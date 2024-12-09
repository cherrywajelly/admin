import { ReactNode, useContext, useEffect, useState } from 'react';
import CreatorSection from '../../sections/CreatorInfoSection';
import { CreatorMenu } from '../../types/Enums';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import Context from '../../contexts/Context';
import { ContextProps } from '../../types/Props';
import { CreatorMember } from '../../types/Types';
import { deleteWithdrawal, getCreatorInfo } from '../../api/creator/member';
import IconGroupsSection from '../../sections/IconGroupsSection';

const MyPage = (): ReactNode => {
  const [creatorDetail, setCreatorDetail] = useState<CreatorMember>();

  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  const handleAccountModification = () => {
    setSelectedMenu(CreatorMenu.ACCOUNT_MODIFICATION);
    navigate('/creator/modify');
  };

  useEffect(() => {
    const fetchCreatorInfo = async () => {
      const data = await getCreatorInfo();
      console.log(data);
      setCreatorDetail(data);
    };

    fetchCreatorInfo();
  }, []);

  const handleWithdrawal = () => {
    deleteWithdrawal()
      .then((res) => {
        console.log(res);
        alert('제작자 탈퇴 완료');
        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    creatorDetail && (
      <div className="min-h-screen p-8 space-y-8">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-4">
            <img src={creatorDetail.profilePicture} alt="Profile" className="w-24 h-24" />
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-bold">{creatorDetail.nickname}</h1>
            </div>
            <button
              onClick={handleWithdrawal}
              className="text-navigation1 border py-2 px-4 rounded-[10px]"
            >
              탈퇴하기
            </button>
          </div>

          <div className="flex flex-col items-center gap-4 space-x-4">
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
