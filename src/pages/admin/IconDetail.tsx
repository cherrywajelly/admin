import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApprovalState } from '../../types/Enums';
import { IconGroup } from '../../types/Props';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
import Button from '../../components/Button';
import IconsSection from '../../sections/IconsSection';

const IconDetail = (): ReactNode => {
  const { id } = useParams();
  const [iconDetail, setIconDetail] = useState<IconGroup>({} as IconGroup);

  const handleSave = (): void => {
    console.log('save');
  };

  useEffect((): void => {
    setIconDetail({
      id: Number(id),
      title: '노노노',
      creator: '에이핑크',
      headImage: '/images/empty.png',
      description:
        '이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요이 아이콘은 내가 만든건데 아주 귀엽습니다? 등록해주세요',
      iconImages: [
        '/images/empty.png',
        '/images/empty.png',
        '/images/empty.png',
        '/images/empty.png',
        '/images/empty.png',
      ],
      approvalState: ApprovalState.APPROVED,
    });
  }, [id]);

  return (
    <div className="flex flex-col min-h-screen p-8">
      <div className="flex flex-row items-center mb-6">
        <img src={iconDetail.headImage} alt="Profile" className="w-24 h-24 rounded-full mr-8" />
        <div className="mx-4">
          <h1 className="text-2xl font-bold">{iconDetail.title}</h1>
          <p className="text-gray-500">{iconDetail.creator}</p>
          <p className="mt-2">{iconDetail.description}</p>
        </div>
        <div className="flex flex-row justify-end items-center w-full">
          <Select
            value={iconDetail.approvalState ?? ApprovalState.PENDING}
            onChange={(e: SelectChangeEvent): void =>
              setIconDetail({
                ...iconDetail,
                approvalState: e.target.value as ApprovalState,
              })
            }
            className={`border-gray-300 !rounded-lg`}
          >
            {Object.values(ApprovalState).map((state: ApprovalState) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
          <Button
            text="저장"
            styles="ml-4"
            onClick={handleSave}
          />
        </div>
      </div>
      <IconsSection iconImages={iconDetail.iconImages ?? []} />
    </div>
  );
};

export default IconDetail;
