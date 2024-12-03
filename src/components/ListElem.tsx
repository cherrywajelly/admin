import { ReactNode } from 'react';
import { ListElemProps } from '../types/Props';
import { Divider } from '@mui/material';

const ListElem = (props: ListElemProps): ReactNode => {
  const { title, subtitle, background, image, divider, buttons } = props;

  return (
    <div>
      <div className={`flex flex-row items-center justify-between p-4 w-full h-28 ${background}`}>
        <div className="flex flex-row items-center space-x-4">
          {image && (
            <div className="w-20 h-20 overflow-hidden">
              <img src={image} alt="icon" className="w-full h-full object-contain" />
            </div>
          )}
          <div className="flex flex-col">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-gray-500">{subtitle}</p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-4">
          {buttons?.map((button: ReactNode, idx: number) => <div key={idx}>{button}</div>)}
        </div>
      </div>
      {divider && <Divider sx={{ width: '100%', backgroundColor: 'gray-80' }} />}
    </div>
  );
};

export default ListElem;
