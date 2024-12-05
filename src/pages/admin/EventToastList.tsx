import { ReactNode, useContext, useEffect, useState } from 'react';
import { ContextProps } from '../../types/Props';
import { useNavigate } from 'react-router-dom';
import Context from '../../contexts/Context';
import { AdminMenu } from '../../types/Enums';
import { EventToast } from '../../types/Types';
import ListElem from '../../components/ListElem';
import Button from '../../components/Button';

const EventToastListPage = (): ReactNode => {
  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;
  const [eventToasts, setEventToasts] = useState<EventToast[]>([]);

  const handleButtonClick = (id: number): void => {
    setSelectedMenu(AdminMenu.TOAST_DETAIL);
    navigate(`/admin/eventtoasts/${id}`);
  };

  useEffect((): void => {
    setEventToasts([
      {
        id: 1,
        title: 'Title',
        nickname: 'Nickname',
        image: '/images/empty.png',
      },
      {
        id: 2,
        title: 'Title',
        nickname: 'Nickname',
        image: '/images/empty.png',
      },
    ]);
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