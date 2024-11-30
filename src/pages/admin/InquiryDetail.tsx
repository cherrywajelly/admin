import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InquiryDetail } from '../../types/Types';
import Button from '../../components/Button';
import { getInquiryDetail, putInquiryResolve } from '../../api/admin/inquiry';

const InquiryDetailPage = (): ReactNode => {
  const { id } = useParams<string>();
  const [inquiry, setInquiry] = useState<InquiryDetail>();
  const [isResolved, setIsResolved] = useState<boolean>();

  useEffect(() => {
    const fetchInquiryDetail = async () => {
      if (!id) return;
      
      const data = await getInquiryDetail(id);
      setInquiry(data);
      setIsResolved(data.isResolved);
    };

    fetchInquiryDetail();
  }, [id, isResolved]);

  const handleResolve = async () => {
    if (!id) return;

    await putInquiryResolve(id);
    setIsResolved(true);
  };

  return (
    inquiry && (
      <div className="flex flex-col w-full max-w-3xl mx-auto p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{inquiry.title}</h2>
          <div className="flex items-center gap-4">
            <span
              className={`px-4 py-2 rounded-full ${inquiry.isResolved ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
            >
              {inquiry.isResolved ? '해결 완료' : '미해결'}
            </span>
            <span className="text-gray-500">{inquiry.createdAt}</span>
            <Button text="해결 완료" onClick={handleResolve} />
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-600">작성자: {inquiry.author}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-800 whitespace-pre-line">{inquiry.content}</p>
          <div className="flex">
            {(inquiry.images ?? []).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`inquiry-${index}`}
                className="w-1/3 h-auto my-4 rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default InquiryDetailPage;
