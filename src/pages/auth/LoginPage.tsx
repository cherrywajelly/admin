import { ReactNode, useState } from 'react';

import SelectButton from '../../components/SelectButton';
import SocialLoginButton from '../../components/SocialLoginButton';

const LoginPage = (): ReactNode => {
  const [isCreatorClicked, setIsCreatorClicked] = useState<boolean>(false);
  const [isAdminClicked, setIsAdminClicked] = useState<boolean>(false);

  const handleCreatorClick = (): void => {
    setIsAdminClicked(false);
    if (isCreatorClicked) {
      setIsCreatorClicked(false);
      localStorage.removeItem('role');
      return;
    }

    setIsCreatorClicked(true);
    localStorage.setItem('role', 'creator');
  };

  const handleAdminClick = (): void => {
    setIsCreatorClicked(false);
    if (isAdminClicked) {
      setIsAdminClicked(false);
      localStorage.removeItem('role');
      return;
    }

    setIsAdminClicked(true);
    localStorage.setItem('role', 'admin');
  };

  return (
    <div className="flex flex-row items-center justify-center min-h-screen space-x-14">
      <img src="/images/timetoast.png" alt="timetoast" className="max-w-md" />
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4 w-1/3">
        <h1 className="text-8xl text-[#D4985C] font-bold">Time Toast</h1>
        <div className="flex flex-row justify-between space-x-4 w-full">
          <SelectButton
            text="제작자 로그인"
            onClick={handleCreatorClick}
            isClicked={isCreatorClicked}
          />
          <SelectButton
            text="관리자 로그인"
            onClick={handleAdminClick}
            isClicked={isAdminClicked}
          />
        </div>
        <SocialLoginButton
          social="kakao"
          role={localStorage.getItem('role') || ''}
          styles="bg-[#FEE500] border-none"
          icon="/images/kakao.svg"
          text="카카오로 시작하기"
        />
        <SocialLoginButton
          social="google"
          role={localStorage.getItem('role') || ''}
          styles="bg-white border border-gray-300"
          icon="/images/google.svg"
          text="구글 계정으로 시작하기"
        />
      </div>
    </div>
  );
};

export default LoginPage;
