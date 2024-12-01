import { ReactNode, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BankName, CreatorMenu } from '../../types/Enums';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import ProfileInput from '../../components/ProfileInput';
import BankInput from '../../components/BankInput';
import { ContextProps } from '../../types/Props';
import Context from '../../contexts/Context';
import { putCreatorInfo } from '../../api/creator/members';

const AccountModification = (): ReactNode => {
  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  const [nickname, setNickname] = useState<string>('');
  const [bankName, setBankName] = useState<BankName | string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const handleModifyClick = (): void => {
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

    setSelectedMenu(CreatorMenu.MY_PAGE);
    navigate('/creator/mypage');
  };

  // 수정하기 버튼 클릭 시 실행되는 api - put
  const handleSubmit = async () => {
    const res = await putCreatorInfo({
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

    console.log(res);
  };

  return (
    <div className="min-h-screen p-8 space-y-8">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row space-x-4">
          <ProfileInput profilePicture={profilePicture} setProfilePicture={setProfilePicture} />
          <div className="flex flex-col justify-center space-y-4 w-full">
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
        <div className="flex flex-row justify-end items-center space-x-4">
          <Button text="수정하기" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default AccountModification;
