import { ReactNode, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextProps, Settlement } from '../../types/Props';
import Context from '../../contexts/Context';
import ListElem from '../../components/ListElem';
import Button from '../../components/Button';
import { CreatorMenu } from '../../types/Enums';

const SettlementList = (): ReactNode => {
  const [settlementList, setSettlementList] = useState<Settlement[]>([]);

  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  const handleButtonClick = (id: number): void => {
    setSelectedMenu(CreatorMenu.SETTLEMENT_DETAIL);
    navigate(`/creator/settlements/${id}`);
  };

  useEffect(() => {
    setSettlementList([
      {
        year: 2024,
        month: 10,
        creator: {
          id: 3,
          nickname: '박하준',
          revenue: 36960,
          profilePicture: '',
          bankName: '국민은행',
          accountNumber: '1234567890',
          madeIconNumber: 0,
          soldIconNumber: 0,
          iconGroups: [],
        },
        date: '2024.11.27',
        isSettled: true,
      },
      {
        year: 2024,
        month: 9,
        creator: {
          id: 4,
          nickname: '박하준',
          revenue: 31280,
          profilePicture: '',
          bankName: '국민은행',
          accountNumber: '1234567890',
          madeIconNumber: 0,
          soldIconNumber: 0,
          iconGroups: [],
        },
        date: '2024.10.30',
        isSettled: true,
      },
    ]);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {settlementList.map((settlement: Settlement, idx: number) => (
        <ListElem
          key={idx}
          title={`${settlement.year}년 ${settlement.month}월 정산`}
          subtitle={`정산금: ${settlement.creator.revenue.toLocaleString()}원`}
          divider={idx < settlementList.length - 1}
          buttons={[
            <Button text={settlement.date} />,
            <Button
              text="상세 보기"
              onClick={(): void => handleButtonClick(settlement.creator.id)}
            />,
          ]}
        />
      ))}
    </div>
  );
};

export default SettlementList;
