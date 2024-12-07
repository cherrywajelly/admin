import { ReactNode, useState, useEffect } from "react";
import { UserDetailSectionProps } from "../../types/Props";
import ListElem from "../../components/ListElem";
import { UserDetailGroup } from "../../types/Types";
import { getUserGroups } from "../../api/admin/user";

const UserDetailGroupPage = (props: UserDetailSectionProps): ReactNode => {
  const { userId } = props;
  const [groups, setGroups] = useState<UserDetailGroup[]>([]);

  useEffect((): void => {
    const fetchUserGroups = async () => {
      const data = await getUserGroups(userId);
      setGroups(data);
    };

    fetchUserGroups();
  }, []);
  
  return (
    <div className="flex flex-col w-full">
      {groups.map((group: UserDetailGroup, idx: number) => (
        <ListElem
          key={idx}
          title={group.name}
          image={group.image}
          background={'bg-white'}
          divider={idx < groups.length - 1}
        />
      ))}
    </div>
  );
};

export default UserDetailGroupPage;
