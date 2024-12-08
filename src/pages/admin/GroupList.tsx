import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Group } from '../../types/Types';
import Button from '../../components/Button';
import { getGroups } from '../../api/admin/group';
import TableHeader from '../../components/TableHeader';
import Divider from '@mui/material/Divider';

const GroupListPage = (): ReactNode => {
  const navigate = useNavigate();
  const [groups, setGroups] = useState<Group[]>([]);

  const handleButtonClick = (id: number): void => {
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
      <TableHeader headers={[
        { width: '1/12', text: '그룹 이미지' },
        { width: '2/12', text: '그룹 제목' },
        { width: '2/12', text: '그룹 인원수' },
        { width: '5/12', text: '' },
        { width: '2/12', text: '' },
      ]} />
      {groups.map((group: Group, idx: number) => (
        <div className={`w-full`}>
          <div className={`flex flex-row items-center p-4 w-full h-28`}>
            {group.image && (
              <div className="w-1/12 h-20 overflow-hidden">
                <img src={group.image} alt="icon" className="w-full h-full object-contain" />
              </div>
            )}
            <p className="text-lg w-2/12 text-center">{group.title}</p>
            <p className="text-lg w-2/12 text-center">{group.memberCount}</p>
            <div className="flex flex-row w-5/12 justify-center"/>
            <div className="flex flex-row w-2/12 justify-center">
              <Button text="상세 보기" onClick={(): void => handleButtonClick(group.id)} />
            </div>
          </div>
          {idx < groups.length - 1 && <Divider sx={{ width: '100%', backgroundColor: 'gray-80' }} />}
        </div>
      ))}
    </div>
  );
};

export default GroupListPage;
