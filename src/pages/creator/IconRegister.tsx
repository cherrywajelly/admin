import { ReactNode, useState } from 'react';
import ProfileInput from '../../components/ProfileInput';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import IconUploadSection from '../../sections/IconUploadSection';

const IconRegister = (): ReactNode => {
  const [headImage, setHeadImage] = useState<File | null>(null);
  const [iconName, setIconName] = useState<string>('');
  const [iconDescription, setIconDescription] = useState<string>('');
  const [iconImages, setIconImages] = useState<string[]>([]);

  const handleRegisterClick = (): void => {
    console.log('headImage: ', headImage);
    console.log('iconName: ', iconName);
    console.log('iconDescription: ', iconDescription);
    console.log('iconImages: ', iconImages);
  };

  return (
    <div className="flex flex-col min-h-screen p-8">
      <div className="flex flex-col h-1/3 items-center justify-center w-full gap-4">
        <div className="flex flex-row space-x-4 w-2/3">
          <ProfileInput
            profilePicture={headImage || null}
            setProfilePicture={setHeadImage}
            styles="!w-1/4"
          />
          <div className="flex flex-col justify-around w-2/4">
            <TextInput
              label="아이콘 이름"
              value={iconName}
              onChange={(e): void => setIconName(e.target.value)}
              textStyles="!w-1/6"
              inputStyles="!w-5/6"
            />
            <TextInput
              label="아이콘 설명"
              value={iconDescription}
              onChange={(e): void => setIconDescription(e.target.value)}
              textStyles="!w-1/6"
              inputStyles="!w-5/6"
            />
          </div>
          <div className="flex items-center justify-center w-32">
            <Button text="등록" onClick={handleRegisterClick} />
          </div>
        </div>
      </div>
      <IconUploadSection iconImages={iconImages} setIconImages={setIconImages} />
    </div>
  );
};

export default IconRegister;
