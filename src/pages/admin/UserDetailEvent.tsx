import { ReactNode, useState, useEffect } from "react";
import { UserDetailSectionProps } from "../../types/Props";
import { UserDetailEvent } from "../../types/Types";
import { getUserEvents } from "../../api/admin/user";
import ListElem from "../../components/ListElem";

const UserDetailEventPage = (props: UserDetailSectionProps): ReactNode => {
  const { userId } = props;
  const [events, setEvents] = useState<UserDetailEvent[]>([]);

  useEffect((): void => {
    const fetchUserEvents = async () => {
      const data = await getUserEvents(userId);
      setEvents(data);
    };

    fetchUserEvents();
  }, []);
  
  return (
    <div className="flex flex-col w-full">
      {events.map((event: UserDetailEvent, idx: number) => (
        <ListElem
          key={idx}
          title={event.title}
          image={event.image}
          background={'bg-white'}
          divider={idx < events.length - 1}
        />
      ))}
    </div>
  );
};

export default UserDetailEventPage;
