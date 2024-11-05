import Button from '../components/Button';
import SocialLoginButton from '../components/SocialLoginButton';

const LoginPage = () => {
  return (
    <div className="flex flex-row items-center justify-center min-h-screen space-x-14">
      <img src="/images/timetoast.png" alt="timetoast" className="max-w-md" />
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4 w-1/3">
        <h1 className="text-8xl text-[#D4985C] font-bold">Time Toast</h1>
        <div className="flex flex-row justify-between space-x-4 w-full">
          <Button text="제작자 로그인" />
          <Button text="관리자 로그인" />
        </div>
        <SocialLoginButton
          styles="bg-[#FEE500] border-none"
          icon="/public/images/kakao.svg"
          text="카카오로 시작하기"
        />
        <SocialLoginButton
          styles="bg-white border border-gray-300"
          icon="/public/images/google.svg"
          text="구글 계정으로 시작하기"
        />
      </div>
    </div>
  );
};

export default LoginPage;
