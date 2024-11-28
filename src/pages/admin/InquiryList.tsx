import { ReactNode, useContext, useEffect, useState } from 'react';
import { ContextProps } from '../../types/Props';
import ListElem from '../../components/ListElem';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import Context from '../../contexts/Context';
import { AdminMenu } from '../../types/Enums';

type Inquiry = {
  id: number;
  title: string;
  contents: string;
  isResolved: boolean;
};

const InquiryList = (): ReactNode => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  const handleButtonClick = (id: number): void => {
    setSelectedMenu(AdminMenu.INQUIRY_DETAIL);
    navigate(`/admin/inquiries/${id}`);
  };

  useEffect((): void => {
    setInquiries([
      {
        id: 0,
        title: '이미지가 안 올라갑니다',
        contents: '제가 찍은 사진을 올렸는데...',
        isResolved: true,
      },
      {
        id: 1,
        title: '아이콘은 어떻게 구매해요?',
        contents: '어디로 가면 살 수 있나요?...',
        isResolved: true,
      },
      {
        id: 2,
        title: '왤케 느리나요',
        contents: '빠르게 해주세요...',
        isResolved: false,
      },
      {
        id: 3,
        title: '멍 빨리 빼는 법',
        contents: '냉찜질하면 되나여ㅛ...',
        isResolved: false,
      },
    ]);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {inquiries.map((inquiry: Inquiry, idx: number) => (
        <ListElem
          key={idx}
          title={inquiry.title}
          subtitle={inquiry.contents}
          background={inquiry.isResolved ? 'bg-white' : 'bg-ivory'}
          divider={idx < inquiries.length - 1}
          buttons={[
            <Button text={inquiry.isResolved ? '해결 완료' : '미해결'} />,
            <Button text="상세 보기" onClick={() => handleButtonClick(inquiry.id ?? 0)} />,
          ]}
        />
      ))}
    </div>
  );
};

export default InquiryList;
