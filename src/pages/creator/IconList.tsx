import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApprovalState } from '../../types/Enums';
import Button from '../../components/Button.tsx';
import { getIconGroups } from '../../api/creator/iconGroup.ts';
import { IconGroup } from '../../types/Types.tsx';
import TableHeader from '../../components/TableHeader.tsx';
import Divider from '@mui/material/Divider';

const IconListPage = (): ReactNode => {
  const [iconList, setIconList] = useState<IconGroup[]>([]);

  const navigate = useNavigate();

  const handleButtonClick = (id: number): void => {
    navigate(`/creator/icons/${id}`);
  };

  useEffect(() => {
    const fetchIconGroups = async () => {
      const data = await getIconGroups();
      setIconList(data);
    };

    fetchIconGroups();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <TableHeader headers={[
        { width: '1/12', text: '아이콘 이미지' },
        { width: '2/12', text: '아이콘 이름' },
        { width: '2/12', text: '승인 상태' },
        { width: '2/12', text: '판매한 아이콘 수' },
        { width: '2/12', text: '총 수익' },
        { width: '1/12', text: '' },
        { width: '2/12', text: '' },
      ]} />
      {iconList.map((icon: IconGroup, idx: number) => (
        <div className={`w-full ${icon.approvalState === ApprovalState.PENDING ? 'bg-ivory' : 'bg-white'}`}>
          <div className={`flex flex-row items-center p-4 w-full h-28`}>
            {icon.headImage && (
              <div className="w-1/12 h-20 overflow-hidden">
                <img src={icon.headImage} alt="icon" className="w-full h-full object-contain" />
              </div>
            )}
            <p className="text-lg w-2/12 text-center">{icon.title}</p>
            <p className="text-lg w-2/12 text-center">{icon.approvalState}</p>
            <p className="text-lg w-2/12 text-center">{icon.orderCount}</p>
            <p className="text-lg w-2/12 text-center">{icon.revenue}</p>
            <div className="flex flex-row w-1/12 justify-center"/>
            <div className="flex flex-row w-2/12 justify-center">
              <Button text="상세 보기" onClick={(): void => handleButtonClick(icon.id ?? 0)} />
            </div>
          </div>
          {idx < iconList.length - 1 && <Divider sx={{ width: '100%', backgroundColor: 'gray-80' }} />}
        </div>
      ))}
    </div>
  );
};

export default IconListPage;
