import { ReactNode, useState, useEffect } from "react";
import { UserDetailSectionProps } from "../../../types/Props";
import { UserDetailIconGroup } from "../../../types/Types";
import { getUserIconGroups } from "../../../api/admin/user";
import { Divider } from "@mui/material";

const UserDetailIconGroupPage = (props: UserDetailSectionProps): ReactNode => {
  const { userId } = props;
  const [iconGroups, setIconGroups] = useState<UserDetailIconGroup[]>([]);

  useEffect((): void => {
    const fetchUserIconGroups = async () => {
      const data = await getUserIconGroups(userId);
      setIconGroups(data);
    };

    fetchUserIconGroups();
  }, []);
  
  return (
    <div className="flex flex-col w-full">
      {iconGroups.map((iconGroup: UserDetailIconGroup, idx: number) => (
        <div key={idx}>
          <div className="p-4">
            <div className="flex justify-between">
              <div>{iconGroup.name}</div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex overflow-x-auto space-x-4">
                {(iconGroup.images ?? []).map((image: string, index2: number) => (
                  <div key={index2} className="flex-shrink-0">
                    <img src={image} alt={`Icon ${index2 + 1}`} className="w-32 h-32 rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {idx < iconGroups.length - 1 && (
            <Divider sx={{ width: '100%', backgroundColor: 'gray-80' }} />
          )}
        </div>
      ))}
    </div>
  );
};

export default UserDetailIconGroupPage;
