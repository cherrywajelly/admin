import { ReactNode, useState, useEffect } from "react";
import { UserDetailSectionProps } from "../../../types/Props";
import { getUserFollowings } from "../../../api/admin/user";
import { UserDetailFollowing } from "../../../types/Types";
import ListElem from "../../../components/ListElem";

const UserDetailFollowingPage = (props: UserDetailSectionProps): ReactNode => {
  const { userId } = props;
  const [followings, setFollowings] = useState<UserDetailFollowing[]>([]);

  useEffect((): void => {
    const fetchUserFollowings = async () => {
      const data = await getUserFollowings(userId);
      setFollowings(data);
    };

    fetchUserFollowings();
  }, []);
  
  return (
    <div className="flex flex-col w-full">
      {followings.map((following: UserDetailFollowing, idx: number) => (
        <ListElem
          key={idx}
          title={following.nickname}
          image={following.image}
          background={'bg-white'}
          divider={idx < followings.length - 1}
        />
      ))}
    </div>
  );
};

export default UserDetailFollowingPage;
