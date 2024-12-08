import Button from '../components/Button';
import { ReactNode, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { getCreatorInfo } from '../api/creator/member';
const Header = (): ReactNode => {
  const [nickname, setNickname] = useState<string>();

  const handleLogout = (): void => {
    sessionStorage.clear();
    localStorage.clear();
    Cookies.remove('accessToken');
    window.location.href = '/login';
  };
  
  useEffect(() => {
    switch (localStorage.getItem('role')) {
      case 'admin':
        setNickname('관리자');
        break;
      case 'creator':
        const fetchCreatorInfo = async () => {
          const data = await getCreatorInfo();
          setNickname(data.nickname);
        };
    
        fetchCreatorInfo();
        break;
    }
  }, []);

  return (
    <header className="p-4 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/timetoast.png" alt="Time Toast" className="w-12 h-12" />
          <h1 className="text-4xl font-bold ml-2">Time Toast</h1>
        </div>
        <div className="flex flex-row items-center space-x-4">
          <span className="text-xl">안녕하세요! {nickname}님</span>
          <Button text="로그아웃" onClick={handleLogout} styles="!w-28" />
        </div>
      </div>
    </header>
  );
};

export default Header;
