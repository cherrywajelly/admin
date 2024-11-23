import { ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type InquiryDetailType = {
  id: number;
  author: string;
  title: string;
  content: string;
  createdAt: string;
  images: string[];
  isResolved: boolean;
};

const InquiryDetail = (): ReactNode => {
  const { id } = useParams();
  const [inquiry, setInquiry] = useState<InquiryDetailType>({} as InquiryDetailType);

  useEffect(() => {
    // API 호출 대신 임시 데이터
    setInquiry({
      id: Number(id),
      author: '홍길동',
      title: '이미지가 안 올라갑니다',
      content: '제가 찍은 사진을 올렸는데 계속 에러가 발생합니다. 어떻게 해결할 수 있을까요?',
      createdAt: '2024-02-14',
      images: ['/images/empty.png', '/images/empty.png'],
      isResolved: false,
    });
  }, [id]);

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{inquiry.title}</h2>
        <div className="flex items-center gap-4">
          <span className={`px-4 py-2 rounded-full ${inquiry.isResolved ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {inquiry.isResolved ? '해결 완료' : '미해결'}
          </span>
          <span className="text-gray-500">{inquiry.createdAt}</span>
        </div>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-gray-600">작성자: {inquiry.author}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-800 whitespace-pre-line">{inquiry.content}</p>
        <div className="flex">
          {(inquiry.images ?? []).map((image, index) => (
            <img key={index} src={image} alt={`inquiry-${index}`} className="w-1/3 h-auto my-4 rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InquiryDetail;
