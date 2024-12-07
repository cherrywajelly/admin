import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InfoSection from '../../sections/InfoSection';
import { UserDetail } from '../../types/Types';
import { getUserDetail } from '../../api/admin/user';
import UserDetailSection from '../../sections/UserDetailSection';

const UserDetailPage = (): ReactNode => {
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState<UserDetail>();
  
  useEffect(() => {
    const fetchUserDetail = async () => {
      if (!id) return;
      
      const data = await getUserDetail(id);
      setUserDetail(data);
    };

    fetchUserDetail();
  }, [id]);
  
  return (
    userDetail && (
      <div className="min-h-screen p-8 space-y-8">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-4">
            <img src={userDetail.image} alt="Profile" className="w-24 h-24" />
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-bold">{userDetail.title}</h1>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4"></div>
        </div>
        <InfoSection infos={[
          { key: '이메일', value: userDetail.email },
          { key: '로그인 방식', value: userDetail.loginType },
          { key: '프리미엄', value: userDetail.premium },
        ]} />

        {id && <UserDetailSection userId={id} />}
      </div>
    )
  );
};

export default UserDetailPage;
