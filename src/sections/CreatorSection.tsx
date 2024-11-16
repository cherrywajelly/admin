import { ReactNode } from "react";
import { Divider } from "@mui/material";
import { CreatorSectionProps } from "../types/Props";

const CreatorSection = (props: CreatorSectionProps): ReactNode => {
  const { sales, revenue } = props;
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">INFO</h2>
      <Divider sx={{ width: '100%', height: '2px', backgroundColor: '#E9E6E4', marginBottom: '8px' }} />
      <div className="flex flex-row items-center w-full">
        <div className="!w-40">제작한 아이콘 수</div>
        <div>{sales ?? 0}</div>
      </div>
      <div className="flex flex-row items-center w-full">
        <div className="!w-40">총 수익</div>
        <div>{revenue ?? 0}원</div>
      </div>
    </div>
  );
};

export default CreatorSection;
