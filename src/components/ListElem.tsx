import { ReactNode } from 'react';
import Button from './Button';
import { ListElemProps } from '../types/Props';
import { Divider } from '@mui/material';

const ListElem = (props: ListElemProps): ReactNode => {
  const { title, subtitle, image, divider } = props;

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
        <Button text="수정하기" styles="bg-secondary-main text-white border-none w-40" />
        <Button text="상세 보기" styles="bg-secondary-main text-white border-none w-40" />
      </div>
      </div>
      {divider && <Divider sx={{ width: '100%', backgroundColor: 'gray-80' }} />}
    </>
  );
};

export default ListElem;
