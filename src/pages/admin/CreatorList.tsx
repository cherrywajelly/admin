import { ReactNode, useContext, useEffect, useState } from 'react';
import { ContextProps, Creator } from '../../types/Props';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import Context from '../../contexts/Context';
import { AdminMenu } from '../../types/Enums';
import { getCreators } from '../../api/admin/creator';
import TableHeader from '../../components/TableHeader';
import { Divider } from '@mui/material';

const CreatorListPage = (): ReactNode => {
  const [creators, setCreators] = useState<Creator[]>([]);
  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  const handleButtonClick = (id: number): void => {
    setSelectedMenu(AdminMenu.CREATOR_DETAIL);
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
        { width: '7/12', text: '' },
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
            <div className="flex flex-row w-7/12 justify-center"/>
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
