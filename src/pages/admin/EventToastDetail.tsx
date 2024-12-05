import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EventToastDetail } from '../../types/Types';
import InfoSection from '../../sections/InfoSection';
import JamsSection from '../../sections/JamsSection';
import { getEventToast } from '../../api/admin/eventToast';

const EventToastDetailPage = (): ReactNode => {
  const { id } = useParams();
  const [eventToastDetail, setEventToastDetail] = useState<EventToastDetail>();

  useEffect(() => {
    const fetchEventToastDetail = async () => {
      if (!id) return;
      
      const data = await getEventToast(id);
      setEventToastDetail(data);
    };

    fetchEventToastDetail();
  }, [id]);

  return (
    eventToastDetail && (
      <div className="min-h-screen p-8 space-y-8">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-4">
            <img src={eventToastDetail.image} alt="Profile" className="w-24 h-24" />
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-bold">{eventToastDetail.title}</h1>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4"></div>
        </div>
        <InfoSection infos={[
          { key: '열림 날짜', value: eventToastDetail.openDate },
          { key: '열림 여부', value: eventToastDetail.nickname },
          { key: '생성 날짜', value: eventToastDetail.createdAt },
        ]} />

        <JamsSection jams={eventToastDetail.jams} />
      </div>
    )
  );
};

export default EventToastDetailPage;
