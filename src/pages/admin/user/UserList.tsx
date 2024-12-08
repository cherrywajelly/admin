import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import ListElem from '../../../components/ListElem';
import { User } from '../../../types/Types';
import { getUsers } from '../../../api/admin/user';

const UserListPage = (): ReactNode => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);

  const handleButtonClick = (id: number): void => {
    navigate(`/admin/users/${id}`);
  };
  
  useEffect((): void => {
    const fetchUserList = async () => {
      const data = await getUsers();
      setUsers(data);
    };

    fetchUserList();
  }, []);

  return (
    <div>
      {users.map((user: User, idx: number) => (
        <ListElem
          key={idx}
          image={user.image}
          title={user.title}
          background="bg-white"
          divider={idx < users.length - 1}
          buttons={[
            <Button text="상세 보기" onClick={() => handleButtonClick(user.id)} />,
          ]}
        />
      ))}
    </div>
  );
};

export default UserListPage;
