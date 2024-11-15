import { ReactNode } from "react";
import { Divider } from "@mui/material";
import { IconInfoSectionProps } from "../types/Props";

const IconInfoSection = (props: IconInfoSectionProps): ReactNode => {
  const { sales, revenue } = props;
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">INFO</h2>
      <Divider sx={{ width: '100%', height: '2px', backgroundColor: '#E9E6E4', marginBottom: '8px' }} />
      <div className="flex flex-row items-center w-full">
        <div className="!w-40">판매한 아이콘 수</div>
        <div>{sales}개</div>
      </div>
      <div className="flex flex-row items-center w-full">
        <div className="!w-40">총 수익</div>
        <div>{revenue.toLocaleString()}원</div>
      </div>
    </div>
  );
};

export default IconInfoSection;
