import { ReactNode, useState } from 'react';
import IconUploadSection from '../../sections/IconUploadSection';
import ProfileInput from '../../components/ProfileInput';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const IconRegister = (): ReactNode => {
  const [iconImages, setIconImages] = useState<string[]>([]);
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row items-center justify-center space-y-4 mx-auto space-x-4 w-2/3">
        <ProfileInput
          profilePicture={profilePicture}
          setProfilePicture={setProfilePicture}
          styles="!w-1/4"
        />
        <div className="flex flex-col justify-around space-y-4 w-2/4">
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
        <Button text="등록하기"/>
      </div>

      <IconUploadSection iconImages={iconImages} setIconImages={setIconImages} />
    </div>
  );
};

export default IconRegister;
