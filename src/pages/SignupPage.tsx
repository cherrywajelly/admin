import { ReactNode, useState } from 'react';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

const SignupPage = (): ReactNode => {
  const [nickname, setNickname] = useState<string>('');
  const [accountInfo, setAccountInfo] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // 회원가입 로직을 여기에 추가하세요.
    console.log('회원가입 정보:', { nickname, accountInfo, profilePicture });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 w-1/3 mx-auto">
      <h1 className="text-4xl font-bold">회원가입</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
        <TextInput
          text="닉네임"
          value={nickname}
          onChange={(e): void => setNickname(e.target.value)}
          required
        />
        <TextInput
          text="계좌 정보"
          value={accountInfo}
          onChange={(e): void => setAccountInfo(e.target.value)}
          required
        />
        <div className="relative w-full flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-300 flex items-center justify-center">
            {profilePicture ? (
              <img
                src={URL.createObjectURL(profilePicture)}
                alt="Profile Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src="/public/images/empty.png"
                alt="Profile Preview"
                className="w-3/4 h-3/4 object-cover"
              />
            )}
            <label className="absolute top-1/2 left-1/2 transform translate-x-full translate-y-full w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center cursor-pointer">
              <input
                type="file"
                onChange={(e): void => {
                  if (e.target.files) {
                    setProfilePicture(e.target.files[0]);
                  }
                }}
                className="hidden"
                required
              />
              <img src="/public/images/share.svg" alt="Upload Icon" className="w-4 h-4" />
            </label>
          </div>
        </div>
        <Button text="회원가입" />
      </form>
      <Button text="로그인" />
    </div>
  );
};

export default SignupPage;
