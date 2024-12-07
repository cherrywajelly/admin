import { ReactNode, useState, useEffect } from "react";
import { UserDetailSectionProps } from "../../types/Props";
import { UserDetailShowcase } from "../../types/Types";
import { getUserShowcases } from "../../api/admin/user";
import ListElem from "../../components/ListElem";

const UserDetailShowcasePage = (props: UserDetailSectionProps): ReactNode => {
  const { userId } = props;
  const [showcases, setShowcases] = useState<UserDetailShowcase[]>([]);

  useEffect((): void => {
    const fetchUserShowcases = async () => {
      const data = await getUserShowcases(userId);
      setShowcases(data);
    };

    fetchUserShowcases();
  }, []);
  
  return (
    <div className="flex flex-col w-full">
      {showcases.map((showcase: UserDetailShowcase, idx: number) => (
        <ListElem
          key={idx}
          title={showcase.title}
          image={showcase.image}
          background={'bg-white'}
          divider={idx < showcases.length - 1}
        />
      ))}
    </div>
  );
};

export default UserDetailShowcasePage;
