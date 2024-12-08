import { ReactNode, useState, useEffect } from "react";
import { UserDetailSectionProps } from "../../../types/Props";
import { UserDetailCapsule } from "../../../types/Types";
import { getUserCapsules } from "../../../api/admin/user";
import ListElem from "../../../components/ListElem";

const UserDetailCapsulePage = (props: UserDetailSectionProps): ReactNode => {
  const { userId } = props;
  const [capsules, setCapsules] = useState<UserDetailCapsule[]>([]);

  useEffect((): void => {
    const fetchUserCapsules = async () => {
      const data = await getUserCapsules(userId);
      setCapsules(data);
    };

    fetchUserCapsules();
  }, []);
  
  return (
    <div className="flex flex-col w-full">
      {capsules.map((capsule: UserDetailCapsule, idx: number) => (
        <ListElem
          key={idx}
          title={capsule.title}
          image={capsule.image}
          background={'bg-white'}
          divider={idx < capsules.length - 1}
        />
      ))}
    </div>
  );
};

export default UserDetailCapsulePage;
