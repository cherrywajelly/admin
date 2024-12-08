import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EventToast } from '../../../types/Types';
import Button from '../../../components/Button';
import { getEventToasts } from '../../../api/admin/eventToast';
import TableHeader from '../../../components/TableHeader';
import Divider from '@mui/material/Divider';

const EventToastListPage = (): ReactNode => {
  const navigate = useNavigate();
  const [eventToasts, setEventToasts] = useState<EventToast[]>([]);

  const handleButtonClick = (id: number): void => {
    navigate(`/admin/eventToasts/${id}`);
  };

  useEffect((): void => {
    const fetchEventToastList = async () => {
      const data = await getEventToasts();
      setEventToasts(data);
    };

    fetchEventToastList();
}, []);

  return (
    <div>
      <TableHeader headers={[
        { width: '1/12', text: '토스트 이미지' },
        { width: '2/12', text: '토스트 제목' },
        { width: '2/12', text: '토스트 작성자' },
        { width: '2/12', text: '열림 날짜' },
        { width: '1/12', text: '열림 여부' },
        { width: '2/12', text: '' },
        { width: '2/12', text: '' },
      ]} />
      {eventToasts.map((eventToast: EventToast, idx: number) => (
        <div className={`w-full`}>
          <div className={`flex flex-row items-center p-4 w-full h-28`}>
            {eventToast.image && (
              <div className="w-1/12 h-20 overflow-hidden">
                <img src={eventToast.image} alt="icon" className="w-full h-full object-contain" />
              </div>
            )}
            <p className="text-lg w-2/12 text-center">{eventToast.title}</p>
            <p className="text-lg w-2/12 text-center">{eventToast.nickname}</p>
            <p className="text-lg w-2/12 text-center">{eventToast.openDate}</p>
            <p className="text-lg w-1/12 text-center">{eventToast.isOpened ? '열림' : '닫힘'}</p>
            <div className="flex flex-row w-2/12 justify-center"/>
            <div className="flex flex-row w-2/12 justify-center">
              <Button text="상세 보기" onClick={(): void => handleButtonClick(eventToast.id)} />
            </div>
          </div>
          {idx < eventToasts.length - 1 && <Divider sx={{ width: '100%', backgroundColor: 'gray-80' }} />}
        </div>
      ))}
    </div>
  );
};

export default EventToastListPage;
