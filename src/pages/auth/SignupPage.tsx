import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BankName } from '../../types/Enums';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import ProfileInput from '../../components/ProfileInput';
import BankInput from '../../components/BankInput';
import { isAllFieldsFilled } from '../../utils/utils';
import { getNicknameCheck, postCreatorInfo } from '../../api/creator/member';

const SignupPage = (): ReactNode => {
  const navigate = useNavigate();
  
  const [nickname, setNickname] = useState<string>('');
  const [bankName, setBankName] = useState<BankName | string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [isValidNickname, setIsValidNickname] = useState<boolean>(false);

  const handleSignupClick = async (): Promise<void> => {
    const res = await postCreatorInfo({
      profile: profilePicture as File,
      creatorRequest: {
        nickname: nickname,
        creatorAccountResponse: {
          bank: bankName,
          accountNumber: accountNumber,
        },
      },
    });

    if (!res.ok) {
      alert('fail');
      return;
    }

    alert('회원가입이 완료되었습니다.');
    navigate('/login');
  };

  const handleNicknameCheck = async (): Promise<void> => {
    const nicknameRegex = /^[가-힣a-zA-Z0-9]{1,10}$/;
    if (!nicknameRegex.test(nickname!)) {
      alert('닉네임은 한글, 영문 또는 숫자로 10글자 이하여야 합니다.');
      return;
    }
    
    const isValidNicknameCheck = await getNicknameCheck(nickname);
    if (!isValidNicknameCheck) {
      return;
    }

    setIsValidNickname(isValidNicknameCheck);
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
          <div className="flex flex-row space-x-2">
            <TextInput
              label="닉네임"
              value={nickname}
              onChange={(e): void => setNickname(e.target.value)}
              textStyles="w-20"
              inputStyles="flex-1"
            />
            <Button text="닉네임 확인" onClick={handleNicknameCheck}/>
          </div>
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
      <Button text="회원가입" onClick={handleSignupClick} disabled={!isValidNickname || !isAllFieldsFilled([nickname, bankName, accountNumber, profilePicture])} />
    </div>
  );
};

export default SignupPage;
