import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BankName } from '../../types/Enums';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import ProfileInput from '../../components/ProfileInput';
import BankInput from '../../components/BankInput';

const SignupPage = (): ReactNode => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState<string>('');
  const [bankName, setBankName] = useState<BankName | string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const handleSignupClick = (): void => {
    if (
      [nickname, bankName, accountNumber, profilePicture].some(
        (field: string | BankName | File | null | undefined) => !field
      )
    ) {
      alert('모든 필드를 입력해야 합니다.');
      return;
    }

    console.log('nickname: ', nickname);
    console.log('bankName: ', bankName);
    console.log('accountNumber: ', accountNumber);
    console.log('profilePicture: ', profilePicture);
  };

  const handleLoginClick = (): void => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-4xl font-bold">회원가입</h1>
      <div className="flex flex-row space-x-4">
        <ProfileInput
          profilePicture={profilePicture}
          setProfilePicture={setProfilePicture}
          styles="!w-1/3"
        />
        <div className="flex flex-col justify-around">
          <TextInput
            label="닉네임"
            value={nickname}
            onChange={(e): void => setNickname(e.target.value)}
            textStyles="w-20"
            inputStyles="flex-1"
          />
          <BankInput
            label="계좌 정보"
            bankName={bankName}
            accountNumber={accountNumber}
            onBankNameChange={(e): void => setBankName(e.target.value as BankName)}
            onAccountNumberChange={(e): void => setAccountNumber(e.target.value)}
            textStyles="w-20"
            bankNameInputStyles="w-36 h-[42px]"
            accountNumberInputStyles="flex-1"
          />
        </div>
      </div>
      <Button text="회원가입" onClick={handleSignupClick} />
      <Button text="로그인" onClick={handleLoginClick} />
    </div>
  );
};

export default SignupPage;
