import { ReactNode } from "react";
import { MemberSectionProps } from "../types/Props";
import { Member } from "../types/Types";
import { Divider } from "@mui/material";

const MemberSection = (props: MemberSectionProps): ReactNode => {
  const { members } = props;
  
  return (
    <div>
      <h2 className="text-xl font-bold">MEMBERS</h2>
      <Divider sx={{ width: '100%', height: '2px', backgroundColor: '#E9E6E4', marginBottom: '8px' }} />
      {members.map((member: Member, index: number) => (
        <div key={index}>
          <div className="flex flex-row items-center justify-between p-4 w-full h-28">
            <div className="flex flex-row items-center space-x-4">
              {member.image && (
                <div className="w-20 h-20 overflow-hidden">
                  <img src={member.image} alt="icon" className="w-full h-full object-contain" />
                </div>
              )}
              <div className="flex flex-col">
                <h2 className="text-lg font-bold">{member.nickname}</h2>
              </div>
            </div>
          </div>
        </div>  
      ))}
    </div>
  );
};

export default MemberSection;
