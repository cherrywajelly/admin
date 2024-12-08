import { ReactNode } from "react";
import { JamSectionProps } from "../types/Props";
import { Jam } from "../types/Types";
import { Divider } from "@mui/material";

const JamsSection = (props: JamSectionProps): ReactNode => {
  const { jams } = props;
  
  return (
    <div>
      <h2 className="text-xl font-bold">JAMS</h2>
      <Divider sx={{ width: '100%', height: '2px', backgroundColor: '#E9E6E4', marginBottom: '8px' }} />
      {jams.map((jam: Jam, index: number) => (
        <div key={index}>
          <div className="flex flex-row items-center justify-between p-4 w-full h-28">
            <div className="flex flex-row items-center space-x-4">
              {jam.image && (
                <div className="w-20 h-20 overflow-hidden">
                  <img src={jam.image} alt="icon" className="w-full h-full object-contain" />
                </div>
              )}
              <div className="flex flex-col">
                <h2 className="text-lg font-bold">{jam.title}</h2>
                <p className="text-gray-500">{jam.nickname}</p>
              </div>
            </div>
            <div className="flex justify-end">{`작성 일자 ${jam.createdAt}`}</div>
          </div>
        </div>  
      ))}
    </div>
  );
};

export default JamsSection;
