import { ReactNode, useState } from 'react';
import { ToastType } from '../../types/Enums';
import { Tab, Tabs } from '@mui/material';
import EventToastList from './EventToastList';
import CapsuleToastList from './CapsuleToastList';

const ToastListPage = (): ReactNode => {
  const [toastType, setToastType] = useState<ToastType>(ToastType.EVENT);

  const handleToastTapChange = (_: React.SyntheticEvent, newValue: ToastType): void => {
    setToastType(newValue);
  };

  return (
    <div>
      <Tabs value={toastType} onChange={handleToastTapChange} aria-label="toast tabs">
        {[ToastType.EVENT, ToastType.CAPSULE].map((toast: ToastType) => (
          <Tab key={toast} value={toast} label={toast} />
        ))}
      </Tabs>
      {toastType === ToastType.EVENT && <EventToastList />}
      {toastType === ToastType.CAPSULE && <CapsuleToastList />}
    </div>
  );
};

export default ToastListPage;
