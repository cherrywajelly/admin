import { ReactNode, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BankName, CreatorMenu } from '../../types/Enums';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import ProfileInput from '../../components/ProfileInput';
import BankInput from '../../components/BankInput';
import { ContextProps } from '../../types/Props';
import Context from '../../contexts/Context';
import { getNicknameCheck, putCreatorInfo } from '../../api/creator/member';
import { isAllFieldsFilled } from '../../utils/utils';

const AccountModificationPage = (): ReactNode => {
  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  const [nickname, setNickname] = useState<string>('');
  const [bankName, setBankName] = useState<BankName | string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [isValidNickname, setIsValidNickname] = useState<boolean>(false);

  const handleModifyClick = async (): Promise<void> => {
    if (!isAllFieldsFilled([nickname, bankName, accountNumber, profilePicture])) {
      alert('모든 필드를 입력해야 합니다.');
      return;
    }

    await putCreatorInfo({
      profile: profilePicture as File,
      creatorRequest: {
        nickname: nickname,
        creatorAccountResponse: {
          bank: bankName,
          accountNumber: accountNumber,
        },
      },
    });

    alert('수정이 완료되었습니다.');
    setSelectedMenu(CreatorMenu.MY_PAGE);
    navigate('/creator/mypage');
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
    <div className="min-h-screen p-8 space-y-8">
      <div className="flex flex-col items-center justify-between">
        <div className="flex flex-row space-x-4">
          <ProfileInput profilePicture={profilePicture} setProfilePicture={setProfilePicture} />
          <div className="flex flex-col justify-center space-y-4 w-full">
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
        <div className="flex flex-row justify-end items-center space-x-4">
          <Button text="수정하기" onClick={handleModifyClick} disabled={!isValidNickname || !isAllFieldsFilled([nickname, bankName, accountNumber, profilePicture])} />
        </div>
      </div>
    </div>
  );
};

export default AccountModificationPage;
