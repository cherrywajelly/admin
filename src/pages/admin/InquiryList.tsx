import { ReactNode, useEffect, useState } from 'react';
import { Inquiry } from '../../types/Types';
import ListElem from '../../components/ListElem';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { getInquiries } from '../../api/admin/inquiry';

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
      {inquiries.map((inquiry: Inquiry, idx: number) => (
        <ListElem
          key={idx}
          title={inquiry.title}
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

export default InquiryListPage;
