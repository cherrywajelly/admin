import { ReactNode } from "react";
import { Divider } from "@mui/material";
import { InfoSectionProps } from "../types/Props";

const InfoSection = (props: InfoSectionProps): ReactNode => {
  const { infos } = props;
  
  return (
    <div>
      <h2 className="text-xl font-bold">INFO</h2>
      <Divider sx={{ width: '100%', height: '2px', backgroundColor: '#E9E6E4', marginBottom: '8px' }} />
      <div className="space-y-2">
        {infos.map((info: { key: string; value: string }, idx: number): ReactNode => (
          <div className="flex flex-row items-center w-full" key={idx}>
            <div className="w-40">{info.key}</div>
            <div>{info.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
