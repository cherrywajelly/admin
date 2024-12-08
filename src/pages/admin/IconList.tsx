import { ReactNode, useEffect, useState } from 'react';
import { IconGroup } from '../../types/Types';
import { ApprovalState } from '../../types/Enums';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { getIconGroups } from '../../api/admin/iconGroup';
import { Divider } from '@mui/material';
import TableHeader from '../../components/TableHeader';

const IconListPage = (): ReactNode => {
  const [icons, setIcons] = useState<IconGroup[]>([]);

  const navigate = useNavigate();

  const handleButtonClick = (id: number): void => {
    navigate(`/admin/icons/${id}`);
  };

  useEffect((): void => {
    const fetchIconGroups = async () => {
      const data = await getIconGroups();
      setIcons(data);
    };

    fetchIconGroups();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <TableHeader headers={[
        { width: '1/12', text: '아이콘 이미지' },
        { width: '2/12', text: '아이콘 이름' },
        { width: '2/12', text: '제작자' },
        { width: '2/12', text: '아이콘 종류' },
        { width: '2/12', text: '승인 상태' },
        { width: '1/12', text: '' },
        { width: '2/12', text: '' },
      ]} />
      {icons.map((icon: IconGroup, idx: number) => (
        <div className={`w-full ${icon.approvalState === ApprovalState.PENDING ? 'bg-ivory' : 'bg-white'}`}>
          <div className={`flex flex-row items-center p-4 w-full h-28`}>
            {icon.headImage && (
              <div className="w-1/12 h-20 overflow-hidden">
                <img src={icon.headImage} alt="icon" className="w-full h-full object-contain" />
              </div>
            )}
            <p className="text-lg w-2/12 text-center">{icon.title}</p>
            <p className="text-lg w-2/12 text-center">{icon.nickname}</p>
            <p className="text-lg w-2/12 text-center">{icon.type === 'TOAST' ? '토스트' : '잼'}</p>
            <p className="text-lg w-2/12 text-center">{icon.approvalState}</p>
            <div className="flex flex-row w-1/12 justify-center"/>
            <div className="flex flex-row w-2/12 justify-center">
              <Button text="상세 보기" onClick={(): void => handleButtonClick(icon.id)} />
            </div>
          </div>
          {idx < icons.length - 1 && <Divider sx={{ width: '100%', backgroundColor: 'gray-80' }} />}
        </div>
      ))}
    </div>
  );
};

export default IconListPage;
