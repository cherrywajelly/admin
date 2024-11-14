import { ReactNode, useState, useEffect } from 'react';
import TextInput from '../../components/TextInput';
import ProfileInput from '../../components/ProfileInput';
import BankInput from '../../components/BankInput';
import { BankName } from '../../types/Enums';
import Button from '../../components/Button';
import { UserInfo } from '../../types/Props';
import { SelectChangeEvent } from '@mui/material';

const MyPage = (): ReactNode => {
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);
  const [nickname, setNickname] = useState<string>('');
  const [bankName, setBankName] = useState<BankName | string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const handleModifyClick = (): void => {
    if (
      [nickname, bankName, accountNumber, profilePicture].some(
        (field: string | BankName | File | null | undefined): boolean => !field
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

  useEffect((): void => {
    setUserInfo({
      nickname: '홍길동',
      bankName: BankName.CZNBKRSE,
      accountNumber: '1234567890',
      profilePicture: null,
    });
  }, []);

  return (
    <div className="flex flex-col h-1/3 items-center justify-center w-full gap-4">
      <div className="flex flex-row space-x-4 w-1/2">
        <ProfileInput
          profilePicture={userInfo?.profilePicture || null}
          setProfilePicture={setProfilePicture}
          styles="!w-1/3"
        />
        <div className="flex flex-col justify-around w-2/3">
          <TextInput
            label="닉네임"
            value={userInfo?.nickname || ''}
            onChange={(e): void => setNickname(e.target.value)}
            textStyles="!w-1/6"
            inputStyles="!w-5/6"
          />
          <BankInput
            label="계좌 정보"
            bankName={userInfo?.bankName || ''}
            accountNumber={userInfo?.accountNumber || ''}
            onBankNameChange={(e: SelectChangeEvent): void =>
              setBankName(e.target.value as BankName)
            }
            onAccountNumberChange={(e): void => setAccountNumber(e.target.value)}
            textStyles="!w-1/6"
            bankNameInputStyles="!w-2/6 h-[42px]"
            accountNumberInputStyles="!w-3/6"
          />
        </div>
      </div>
      <div className="w-32">
        <Button text="수정" onClick={handleModifyClick} />
      </div>
    </div>
  );
};

export default MyPage;
