import { ReactNode } from 'react';
import { ListElemProps } from '../types/Props';
import { Divider } from '@mui/material';

const ListElem = (props: ListElemProps): ReactNode => {
  const { id, title, subtitle, image, state, divider, buttons } = props;

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
          {buttons?.map((button: ReactNode, idx: number) => (
            <div key={idx}>
              {button}
            </div>
          ))}
        </div>
      </div>
      {divider && <Divider sx={{ width: '100%', backgroundColor: 'gray-80' }} />}
    </>
  );
};

export default ListElem;
