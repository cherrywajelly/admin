import { ReactNode, useEffect, useState } from 'react';
import { ApprovalState } from '../../types/Enums';
import { IconGroup } from '../../types/Props';
import Button from '../../components/Button';
import IconsSection from '../../sections/IconsSection';
import IconInfoSection from '../../sections/IconInfoSection';

const IconDetail = (): ReactNode => {
  const [iconDetail, setIconDetail] = useState<IconGroup>({} as IconGroup);

  useEffect((): void => {
    setIconDetail({
      id: 0,
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
      approvalState: ApprovalState.PENDING,
      soldIconNumber: 100,
      revenue: 200000,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen p-8">
      <div className="flex flex-row items-center mb-6">
        <img src={iconDetail.headImage} alt="Profile" className="w-24 h-24 rounded-full mr-8" />
        <div className="mx-4">
          <h1 className="text-2xl font-bold">{iconDetail.title}</h1>
          <p className="text-gray-500">{iconDetail.creator}</p>
          <p className="mt-2">{iconDetail.description}</p>
        </div>
        <div className="flex flex-row justify-end w-full mb-4">
          <Button
            text={iconDetail.approvalState ?? ApprovalState.PENDING}
          />
        </div>
      </div>
      <IconInfoSection soldIconNumber={iconDetail.soldIconNumber} revenue={iconDetail.revenue} />
      <div className="mb-4"></div>
      <IconsSection iconImages={iconDetail.iconImages ?? []} />
    </div>
  );
};

export default IconDetail;
