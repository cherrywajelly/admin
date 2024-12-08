import { ReactNode, useEffect, useState } from 'react';
import { Inquiry } from '../../types/Types';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { getInquiries } from '../../api/admin/inquiry';
import Divider from '@mui/material/Divider';
import TableHeader from '../../components/TableHeader';

const InquiryListPage = (): ReactNode => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const navigate = useNavigate();

  const handleButtonClick = (id: number): void => {
    navigate(`/admin/inquiries/${id}`);
  };

  useEffect(() => {
    const fetchInquiryList = async () => {
      const data = await getInquiries();
      setInquiries(data);
    };

    fetchInquiryList();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <TableHeader headers={[
        { width: '2/12', text: '제목' },
        { width: '2/12', text: '해결 상태' },
        { width: '6/12', text: '' },
        { width: '2/12', text: '' },
      ]} />
      {inquiries.map((inquiry: Inquiry, idx: number) => (
        <div className={`w-full ${inquiry.isResolved ? 'bg-white' : 'bg-ivory'}`}>
          <div className={`flex flex-row items-center p-4 w-full h-28`}>
            <p className="text-lg w-2/12 text-center">{inquiry.title}</p>
            <p className="text-lg w-2/12 text-center">{inquiry.isResolved ? '해결 완료' : '미해결'}</p>
            <div className="flex flex-row w-6/12 justify-center"/>
            <div className="flex flex-row w-2/12 justify-center">
              <Button text="상세 보기" onClick={(): void => handleButtonClick(inquiry.id)} />
            </div>
          </div>
          {idx < inquiries.length - 1 && <Divider sx={{ width: '100%', backgroundColor: 'gray-80' }} />}
        </div>
      ))}
    </div>
  );
};

export default InquiryListPage;
