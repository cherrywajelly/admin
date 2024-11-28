import { ReactNode, useState } from 'react';
import IconUploadSection from '../../sections/IconGroupUploadSection';
import ProfileInput from '../../components/ProfileInput';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const IconRegister = (): ReactNode => {
  const [iconImages, setIconImages] = useState<string[]>([]);
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  return (
    <div className="min-h-screen p-8 space-y-8">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center space-x-4">
          <ProfileInput profilePicture={profilePicture} setProfilePicture={setProfilePicture} />
          <div className="flex flex-col justify-center space-y-4 w-full">
            <TextInput
              label="아이콘 이름"
              value={title}
              onChange={(e): void => setTitle(e.target.value)}
              textStyles="w-20"
              inputStyles="flex-1"
            />
            <TextInput
              label="아이콘 설명"
              value={description}
              onChange={(e): void => setDescription(e.target.value)}
              textStyles="w-20"
              inputStyles="flex-1"
            />
          </div>
        </div>
        <div className="flex flex-row items-center space-x-4">
          <Button
            text="등록하기"
            onClick={() => {
              alert('아이콘 등록 신청되었습니다.');
            }}
          />
        </div>
      </div>

      <IconUploadSection iconImages={iconImages} setIconImages={setIconImages} />
    </div>
  );
};

export default IconRegister;
