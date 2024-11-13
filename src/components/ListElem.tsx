import { ReactNode, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { ContextProps, ListElemProps } from '../types/Props';
import { Divider } from '@mui/material';
import Context from '../contexts/Context';

const ListElem = (props: ListElemProps): ReactNode => {
  const { id, title, subtitle, image, state, divider } = props;
  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  const handleButtonClick = () => {
    console.log(id);
    setSelectedMenu('아이콘 상세');
    navigate(`/admin/icons/${id}`);
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-[#FFFCEC] w-full">
        <div className="flex items-center space-x-4">
        <img src={image} alt="icon" className="w-20 h-20" />
        <div className="flex flex-col">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-gray-500">{subtitle}</p>
        </div>
        </div>
        <div className="flex space-x-[10px] ml-auto">
          <Button text={state as string} styles="!bg-secondary-main !text-white !w-40 border-none" />
          <Button text="상세 보기" styles="!bg-secondary-main !text-white !w-40 border-none" onClick={handleButtonClick} />
        </div>
      </div>
      {divider && <Divider sx={{ width: '100%', backgroundColor: 'gray-80' }} />}
    </>
  );
};

export default ListElem;
