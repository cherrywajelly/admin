import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import SocialLoginButton from '../components/SocialLoginButton';

const LoginPage = (): ReactNode => {
  const [isCreatorClicked, setIsCreatorClicked] = useState<boolean>(false);
  const [isAdminClicked, setIsAdminClicked] = useState<boolean>(false);
  const [role, setRole] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    printState();
  }, [isCreatorClicked, isAdminClicked, role]);

  const printState = (): void => {
    console.log(`isCreatorClicked: ${isCreatorClicked}`);
    console.log(`isAdminClicked: ${isAdminClicked}`);
    console.log(`role: ${role}`);
    console.log('--------------------------------');
  };

  const handleCreatorClick = (): void => {
    setIsAdminClicked(false);
    if (isCreatorClicked) {
      setIsCreatorClicked(false);
      setRole('');
      return;
    }

    setIsCreatorClicked(true);
    setRole('creator');
  };

  const handleAdminClick = (): void => {
    setIsCreatorClicked(false);
    if (isAdminClicked) {
      setIsAdminClicked(false);
      setRole('');
      return;
    }

    setIsAdminClicked(true);
    setRole('admin');
  };

  const handleKakaoLogin = (): void => {
    if (role) {
      navigate('/', { state: { role } });
    }
  };

  const handleGoogleLogin = (): void => {
    if (role) {
      navigate('/login', { state: { role } });
    }
  };

  return (
    <div className="flex flex-row items-center justify-center min-h-screen space-x-14">
      <img src="/images/timetoast.png" alt="timetoast" className="max-w-md" />
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4 w-1/3">
        <h1 className="text-8xl text-[#D4985C] font-bold">Time Toast</h1>
        <div className="flex flex-row justify-between space-x-4 w-full">
          <Button text="제작자 로그인" onClick={handleCreatorClick} isClicked={isCreatorClicked} />
          <Button text="관리자 로그인" onClick={handleAdminClick} isClicked={isAdminClicked} />
        </div>
        <SocialLoginButton
          styles="bg-[#FEE500] border-none"
          icon="/public/images/kakao.svg"
          text="카카오로 시작하기"
          onClick={handleKakaoLogin}
        />
        <SocialLoginButton
          styles="bg-white border border-gray-300"
          icon="/public/images/google.svg"
          text="구글 계정으로 시작하기"
          onClick={handleGoogleLogin}
        />
      </div>
    </div>
  );
};

export default LoginPage;
