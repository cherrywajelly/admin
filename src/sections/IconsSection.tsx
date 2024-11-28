import { ReactNode } from 'react';
import { Divider } from '@mui/material';
import { IconsSectionProps } from '../types/Props';

const IconsSection = (props: IconsSectionProps): ReactNode => {
  const { iconImages } = props;

  return (
    <div>
      <h2 className="text-xl font-bold">ICONS</h2>
      <Divider sx={{ width: '100%', height: '2px', backgroundColor: '#E9E6E4', marginBottom: '8px' }} />
      <div className="grid grid-cols-3 gap-4 w-full justify-items-center">
        {iconImages.map((image: string, index: number) => (
          <div key={index} className="flex flex-col items-center w-fit">
            <img src={image} alt={`Icon ${index + 1}`} className="w-32 h-32" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconsSection;
