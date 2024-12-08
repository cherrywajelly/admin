import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EventToast } from '../../../types/Types';
import ListElem from '../../../components/ListElem';
import Button from '../../../components/Button';
import { getEventToasts } from '../../../api/admin/eventToast';

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
      {eventToasts.map((eventToast: EventToast, idx: number) => (
        <ListElem
          key={idx}
          image={eventToast.image}
          title={eventToast.title}
          subtitle={eventToast.nickname}
          background="bg-white"
          divider={idx < eventToasts.length - 1}
          buttons={[
            <Button text="상세 보기" onClick={() => handleButtonClick(eventToast.id)} />,
          ]}
        />
      ))}
    </div>
  );
};

export default EventToastListPage;
