import { ReactNode, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextProps, Settlement } from '../../types/Props';
import Context from '../../contexts/Context';
import ListElem from '../../components/ListElem';
import Button from '../../components/Button';

const SettlementList = (): ReactNode => {
  const [settlementList, setSettlementList] = useState<Settlement[]>([]);

  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  const handleButtonClick = (id: number): void => {
    console.log(id);
    setSelectedMenu('정산 상세');
    navigate(`/creator/settlements/${id}`);
  };

  useEffect(() => {
    setSettlementList([
      {
        year: 2024,
        month: 12,
        creator: {
          id: 1,
          nickname: 'creator1',
          revenue: 1000000,
        },
        date: '2025.01.01',
      },
      {
        year: 2024,
        month: 11,
        creator: {
          id: 2,
          nickname: 'creator2',
          revenue: 2000000,
        },
        date: '2024.12.01',
      },
      {
        year: 2024,
        month: 10,
        creator: {
          id: 3,
          nickname: 'creator3',
          revenue: 3000000,
        },
        date: '2024.11.01',
      },
      {
        year: 2024,
        month: 9,
        creator: {
          id: 4,
          nickname: 'creator4',
          revenue: 4000000,
        },
        date: '2024.10.01',
      },
    ]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {settlementList.map((settlement: Settlement, idx: number) => (
        <ListElem
          key={idx}
          title={`${settlement.year}년 ${settlement.month}월 정산`}
          subtitle={`정산금 ${settlement.creator.revenue}원`}
          divider={idx < settlementList.length - 1}
          buttons={[
            <Button
              text={settlement.date ?? ''}
            />,
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
