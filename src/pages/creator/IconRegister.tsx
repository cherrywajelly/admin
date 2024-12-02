import { ReactNode, useState } from 'react';
import IconUploadSection from '../../sections/IconGroupUploadSection';
import ProfileInput from '../../components/ProfileInput';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { postIconGroup } from '../../api/creator/iconGroup';
import { IconGroupRequestBody } from '../../types/api/creator/API';
import { useNavigate } from 'react-router-dom';
import { Radio } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { RadioGroup } from '@mui/material';

const IconRegisterPage = (): ReactNode => {
  const navigate = useNavigate();
  
  const [iconImages, setIconImages] = useState<string[]>([]);
  const [iconFiles, setIconFiles] = useState<File[]>([]);
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [iconType, setIconType] = useState<string>('JAM');

  const handleAddIconFiles = (files: File[]): void => {
    const newFilePreviews = files.map((file: File) => URL.createObjectURL(file));
    setIconFiles((prev) => [...prev, ...files]);
    setIconImages((prev) => [...prev, ...newFilePreviews]);
  };
  
  const handleRegisterIcon = async (requestBody: IconGroupRequestBody): Promise<void> => {
    await postIconGroup(requestBody);

    navigate('/creator/icons');
  };
  
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
          <div className="flex flex-col justify-center space-y-4 w-full">
            <TextInput
              label="아이콘 가격"
              value={price}
              onChange={(e): void => setPrice(e.target.value)}
              textStyles="w-20"
              inputStyles="flex-1"
            />
            <div className="flex flex-row items-center space-x-4">
              <span className="font-bold w-20">아이콘 타입</span>
              <RadioGroup
                row
                value={iconType}
                onChange={(e): void => setIconType(e.target.value)}
              >
                <FormControlLabel 
                  value="JAM" 
                  control={<Radio />} 
                  label="잼"
                />
                <FormControlLabel 
                  value="TOAST" 
                  control={<Radio />} 
                  label="토스트" 
                />
              </RadioGroup>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-4">
          <Button
            text="등록하기"
            onClick={() => handleRegisterIcon({
              thumbnailIcon: profilePicture as File,
              files: iconFiles,
              iconGroupPostRequest: {
                name: title,
                price: Number(price),
                iconType: iconType,
                iconBuiltin: 'NONBUILTIN',
                description: description,
              },
            })}
          />
        </div>
      </div>

      <IconUploadSection iconImages={iconImages} setIconFiles={handleAddIconFiles} />
    </div>
  );
};

export default IconRegisterPage;
