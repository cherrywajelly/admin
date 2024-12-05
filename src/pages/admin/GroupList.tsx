import { ReactNode, useContext, useEffect, useState } from 'react';
import { ContextProps } from '../../types/Props';
import { useNavigate } from 'react-router-dom';
import Context from '../../contexts/Context';
import { AdminMenu } from '../../types/Enums';
import { Group } from '../../types/Types';
import ListElem from '../../components/ListElem';
import Button from '../../components/Button';
import { getGroups } from '../../api/admin/group';

const GroupListPage = (): ReactNode => {
  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;
  const [groups, setGroups] = useState<Group[]>([]);

  const handleButtonClick = (id: number): void => {
    setSelectedMenu(AdminMenu.GROUP_DETAIL);
    navigate(`/admin/groups/${id}`);
  };

  useEffect((): void => {
    const fetchGroupList = async () => {
      const data = await getGroups();
      setGroups(data);
    };

    fetchGroupList();
  }, []);

  return (
    <div>
      {groups.map((group: Group, idx: number) => (
        <ListElem
          key={idx}
          image={group.image}
          title={group.title}
          background="bg-white"
          divider={idx < groups.length - 1}
          buttons={[
            <Button text="상세 보기" onClick={() => handleButtonClick(group.id)} />,
          ]}
        />
      ))}
    </div>
  );
};

export default GroupListPage;
