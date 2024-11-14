import { ReactNode } from "react";
import { Divider } from "@mui/material";
import { IconGroup, IconGroupsSectionProps } from "../types/Props";

const IconGroupsSection = (props: IconGroupsSectionProps): ReactNode => {
  const { iconGroups } = props;
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">ICONS</h2>
      <Divider sx={{ width: '100%', height: '2px', backgroundColor: '#E9E6E4', marginBottom: '8px' }} />
      <div className="grid grid-cols-3 gap-4 w-full">
        {iconGroups.map((iconGroup: IconGroup, index1: number) => (
          <div key={index1}>
            <div className="flex justify-between">
              <div>{iconGroup.title}</div>
              <div>수익 {iconGroup.revenue.toLocaleString()}원</div>
            </div>
            <div className="flex flex-row gap-4">
              {iconGroup.iconImages.map((image: string, index2: number) => (
                <div key={index2} className="w-fit">
                  <img src={image} alt={`Icon ${index2 + 1}`} className="w-32 h-32 rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconGroupsSection;