import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EventToastDetail } from '../../types/Types';
import InfoSection from '../../sections/InfoSection';
import JamsSection from '../../sections/JamsSection';
import { getEventToast, putEventToast } from '../../api/admin/eventToast';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';

const EventToastDetailPage = (): ReactNode => {
  const { id } = useParams();
  const [eventToastDetail, setEventToastDetail] = useState<EventToastDetail>();
  const [openModal, setOpenModal] = useState(false);
  const [openDate, setOpenDate] = useState('');
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenModal = (): void => {
    setOpenModal(true);
  };

  const handleCloseModal = (): void => {
    setOpenModal(false);
  };

  const handleOpenDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setOpenDate(e.target.value);
  };

  const handleIsOpenedChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsOpened(e.target.value === 'true');
  };

  const handleSave = async (): Promise<void> => {
    if (!eventToastDetail) return;
    
    const data = await putEventToast(eventToastDetail.id, { ...eventToastDetail, openDate, isOpened });

    setEventToastDetail({ ...eventToastDetail, openDate: data.openedDate, isOpened: data.isOpened });
    
    handleCloseModal();
  };

  useEffect(() => {
    const fetchEventToastDetail = async () => {
      if (!id) return;
      
      const data = await getEventToast(id);
      setEventToastDetail(data);

      setOpenDate(data.openDate);
      setIsOpened(data.isOpened);
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
          <div className="flex flex-row items-center space-x-4">
            <Button text="수정하기" onClick={handleOpenModal} />
            <Modal open={openModal} onClose={handleCloseModal}>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-4 bg-white rounded-lg shadow-lg space-y-4">
                <h2 className="text-2xl font-bold">이벤트 토스트 정보 수정</h2>
                <Divider />
                <TextInput
                  label="열림 날짜"
                  value={openDate}
                  onChange={handleOpenDateChange}
                  textStyles="w-20"
                  inputStyles="flex-1"
                />
                <div className="flex items-center">
                  <span className="w-20 font-bold">열림 여부</span>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="isOpened"
                        value="true"
                        checked={isOpened === true}
                        onChange={handleIsOpenedChange}
                        className="form-radio"
                      />
                      <span>열림</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="isOpened"
                        value="false"
                        checked={isOpened === false}
                        onChange={handleIsOpenedChange}
                        className="form-radio"
                      />
                      <span>닫힘</span>
                    </label>
                  </div>
                </div>
                <div className="flex justify-around">
                  <Button text="취소" onClick={handleCloseModal} />
                  <Button text="저장" onClick={handleSave} />
                </div>
              </div>
            </Modal>
          </div>
        </div>

        <InfoSection infos={[
          { key: '열림 날짜', value: eventToastDetail.openDate },
          { key: '열림 여부', value: eventToastDetail.isOpened ? '열림' : '닫힘' },
          { key: '생성 날짜', value: eventToastDetail.createdAt },
        ]} />

        <JamsSection jams={eventToastDetail.jams} />
      </div>
    )
  );
};

export default EventToastDetailPage;
