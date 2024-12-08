import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import { User } from '../../../types/Types';
import { getUsers } from '../../../api/admin/user';
import TableHeader from '../../../components/TableHeader';
import Divider from '@mui/material/Divider';

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
      <TableHeader headers={[
        { width: '1/12', text: '유저 이미지' },
        { width: '2/12', text: '유저 닉네임' },
        { width: '2/12', text: '유저 이메일' },
        { width: '1/12', text: '유저 역할' },
        { width: '1/12', text: '로그인 타입' },
        { width: '1/12', text: '프리미엄' },
        { width: '2/12', text: '' },
        { width: '2/12', text: '' },
      ]} />
      {users.map((user: User, idx: number) => (
        <div className={`w-full`}>
          <div className={`flex flex-row items-center p-4 w-full h-28`}>
            {user.image && (
              <div className="w-1/12 h-20 overflow-hidden">
                <img src={user.image} alt="icon" className="w-full h-full object-contain" />
              </div>
            )}
            <p className="text-lg w-2/12 text-center">{user.title}</p>
            <p className="text-lg w-2/12 text-center">{user.email}</p>
            <p className="text-lg w-1/12 text-center">{user.role}</p>
            <p className="text-lg w-1/12 text-center">{user.loginType}</p>
            <p className="text-lg w-1/12 text-center">{user.premium}</p>
            <div className="flex flex-row w-2/12 justify-center"/>
            <div className="flex flex-row w-2/12 justify-center">
              <Button text="상세 보기" onClick={(): void => handleButtonClick(user.id)} />
            </div>
          </div>
          {idx < users.length - 1 && <Divider sx={{ width: '100%', backgroundColor: 'gray-80' }} />}
        </div>
      ))}
    </div>
  );
};

export default UserListPage;
