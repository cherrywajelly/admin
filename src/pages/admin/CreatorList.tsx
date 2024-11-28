import { ReactNode, useContext, useEffect, useState } from 'react';
import { ContextProps, Creator } from '../../types/Props';
import ListElem from '../../components/ListElem';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import Context from '../../contexts/Context';
import { AdminMenu, BankName } from '../../types/Enums';

const CreatorList = (): ReactNode => {
  const [creators, setCreators] = useState<Creator[]>([]);
  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  const handleButtonClick = (id: number): void => {
    setSelectedMenu(AdminMenu.CREATOR_DETAIL);
    navigate(`/admin/creators/${id}`);
  };

  useEffect((): void => {
    setCreators([
      {
        id: 0,
        nickname: 'Cherry',
        profilePicture: '/images/empty.png',
        bankName: BankName.IBKOKRSE,
        accountNumber: '1234567890',
        madeIconNumber: 2,
        soldIconNumber: 50,
        revenue: 100000,
        iconGroups: [],
      },
      {
        id: 1,
        nickname: 'Wade',
        profilePicture: '/images/empty.png',
        bankName: BankName.IBKOKRSE,
        accountNumber: '1234567890',
        madeIconNumber: 2,
        soldIconNumber: 50,
        revenue: 100000,
        iconGroups: [],
      },
      {
        id: 2,
        nickname: 'Julia',
        profilePicture: '/images/empty.png',
        bankName: BankName.IBKOKRSE,
        accountNumber: '1234567890',
        madeIconNumber: 2,
        soldIconNumber: 50,
        revenue: 100000,
        iconGroups: [],
      },
      {
        id: 3,
        nickname: 'Kelly',
        profilePicture: '/images/empty.png',
        bankName: BankName.IBKOKRSE,
        accountNumber: '1234567890',
        madeIconNumber: 2,
        soldIconNumber: 50,
        revenue: 100000,
        iconGroups: [],
      },
    ]);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {creators.map((creator: Creator, idx: number) => (
        <ListElem
          key={idx}
          title={creator.nickname}
          image={creator.profilePicture}
          divider={idx < creators.length - 1}
          buttons={[
            <Button text="상세 보기" onClick={() => handleButtonClick(creator.id)} />,
          ]}
        />
      ))}
    </div>
  );
};

export default CreatorList;
