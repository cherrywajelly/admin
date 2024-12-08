import { ReactNode, useEffect, useState } from "react";
import { UserDetailSectionProps } from "../../../types/Props";
import { UserDetailFollower } from "../../../types/Types";
import ListElem from "../../../components/ListElem";
import { getUserFollowers } from "../../../api/admin/user";

const UserDetailFollowerPage = (props: UserDetailSectionProps): ReactNode => {
  const { userId } = props;
  const [followers, setFollowers] = useState<UserDetailFollower[]>([]);

  useEffect((): void => {
    const fetchUserFollowers = async () => {
      const data = await getUserFollowers(userId);
      setFollowers(data);
    };

    fetchUserFollowers();
  }, []);
  
  return (
    <div className="flex flex-col w-full">
      {followers.map((follower: UserDetailFollower, idx: number) => (
        <ListElem
          key={idx}
          title={follower.nickname}
          image={follower.image}
          background={'bg-white'}
          divider={idx < followers.length - 1}
        />
      ))}
    </div>
  );
};

export default UserDetailFollowerPage;
