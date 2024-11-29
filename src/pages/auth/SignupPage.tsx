import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BankName } from '../../types/Enums';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import ProfileInput from '../../components/ProfileInput';
import BankInput from '../../components/BankInput';
import { isAllFieldsFilled } from '../../utils/utils';

const SignupPage = (): ReactNode => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState<string>();
  const [bankName, setBankName] = useState<BankName | string>();
  const [accountNumber, setAccountNumber] = useState<string>();
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const handleSignupClick = (): void => {
    if (!isAllFieldsFilled([nickname, bankName, accountNumber, profilePicture])) {
      alert('모든 필드를 입력해야 합니다.');
      return;
    }

    const nicknameRegex = /^[가-힣a-zA-Z]{1,10}$/;
    if (!nicknameRegex.test(nickname!)) {
      alert('닉네임은 한글 또는 영문으로 10글자 이하여야 합니다.');
      return;
    }

    alert('회원가입이 완료되었습니다.');
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
    </div>
  );
};

export default SignupPage;
