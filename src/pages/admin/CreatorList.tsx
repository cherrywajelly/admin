import { ReactNode, useEffect, useState } from 'react';
import { Creator } from '../../types/Props';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { getCreators } from '../../api/admin/creator';
import TableHeader from '../../components/TableHeader';
import { Divider } from '@mui/material';

const CreatorListPage = (): ReactNode => {
  const [creators, setCreators] = useState<Creator[]>([]);
  const navigate = useNavigate();

  const handleButtonClick = (id: number): void => {
    navigate(`/admin/creators/${id}`);
  };

  useEffect((): void => {
    const fetchCreators = async () => {
      const data = await getCreators();
      setCreators(data);
    };

    fetchCreators();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <TableHeader headers={[
        { width: '1/12', text: '제작자 이미지' },
        { width: '2/12', text: '제작자 이름' },
        { width: '2/12', text: '제작한 아이콘 수' },
        { width: '2/12', text: '판매한 아이콘 수' },
        { width: '2/12', text: '총 수익' },
        { width: '1/12', text: '' },
        { width: '2/12', text: '' },
      ]} />
      {creators.map((creator: Creator, idx: number) => (
        <div>
          <div className={`flex flex-row items-center p-4 w-full h-28`}>
            {creator.profilePicture && (
              <div className="w-1/12 h-20 overflow-hidden">
                <img src={creator.profilePicture} alt="icon" className="w-full h-full object-contain" />
              </div>
            )}
            <p className="text-lg w-2/12 text-center">{creator.nickname}</p>
            <p className="text-lg w-2/12 text-center">{creator.createdIconCount}</p>
            <p className="text-lg w-2/12 text-center">{creator.salesIconCount}</p>
            <p className="text-lg w-2/12 text-center">{creator.totalRevenue}</p>
            <div className="flex flex-row w-1/12 justify-center"/>
            <div className="flex flex-row w-2/12 justify-center">
              <Button text="상세 보기" onClick={(): void => handleButtonClick(creator.id)} />
            </div>
          </div>
          {idx < creators.length - 1 && <Divider sx={{ width: '100%', backgroundColor: 'gray-80' }} />}
        </div>
      ))}
    </div>
  );
};

export default CreatorListPage;
