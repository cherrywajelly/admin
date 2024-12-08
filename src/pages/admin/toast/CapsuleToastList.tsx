import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CapsuleToast } from '../../../types/Types';
import Button from '../../../components/Button';
import { getCapsuleToasts } from '../../../api/admin/capsuleToast';
import Divider from '@mui/material/Divider';
import TableHeader from '../../../components/TableHeader';

const CapsuleToastListPage = (): ReactNode => {
  const navigate = useNavigate();
  const [capsuleToasts, setCapsuleToasts] = useState<CapsuleToast[]>([]);

  const handleButtonClick = (id: number): void => {
    navigate(`/admin/capsuleToasts/${id}`);
  };

  useEffect((): void => {
    const fetchCapsuleToastList = async () => {
      const data = await getCapsuleToasts();
      setCapsuleToasts(data);
    };

    fetchCapsuleToastList();
  }, []);

  return (
    <div>
      <TableHeader headers={[
        { width: '1/12', text: '토스트 이미지' },
        { width: '2/12', text: '토스트 제목' },
        { width: '2/12', text: '토스트 작성자' },
        { width: '2/12', text: '열림 날짜' },
        { width: '1/12', text: '열림 여부' },
        { width: '2/12', text: '대상 유형' },
        { width: '2/12', text: '' },
      ]} />
      {capsuleToasts.map((capsuleToast: CapsuleToast, idx: number) => (
        <div className={`w-full`}>
          <div className={`flex flex-row items-center p-4 w-full h-28`}>
            {capsuleToast.image && (
              <div className="w-1/12 h-20 overflow-hidden">
                <img src={capsuleToast.image} alt="icon" className="w-full h-full object-contain" />
              </div>
            )}
            <p className="text-lg w-2/12 text-center">{capsuleToast.title}</p>
            <p className="text-lg w-2/12 text-center">{capsuleToast.group}</p>
            <p className="text-lg w-2/12 text-center">{capsuleToast.memoDate}</p>
            <p className="text-lg w-1/12 text-center">{capsuleToast.isOpened ? '열림' : '닫힘'}</p>
            <p className="text-lg w-2/12 text-center">{capsuleToast.toastType}</p>
            <div className="flex flex-row w-2/12 justify-center">
              <Button text="상세 보기" onClick={(): void => handleButtonClick(capsuleToast.id)} />
            </div>
          </div>
          {idx < capsuleToasts.length - 1 && <Divider sx={{ width: '100%', backgroundColor: 'gray-80' }} />}
        </div>
      ))}
    </div>
  );
};

export default CapsuleToastListPage;
