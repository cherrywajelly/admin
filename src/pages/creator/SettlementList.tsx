import { ReactNode, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextProps } from '../../types/Props';
import Context from '../../contexts/Context';
import ListElem from '../../components/ListElem';
import Button from '../../components/Button';
import { CreatorMenu } from '../../types/Enums';
import { getSettlements } from '../../api/creator/Settlement';
import { Settlement } from '../../types/Types';

const SettlementListPage = (): ReactNode => {
  const [settlementList, setSettlementList] = useState<Settlement[]>([]);

  const navigate = useNavigate();
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  const handleButtonClick = (year: number, month: number): void => {
    setSelectedMenu(CreatorMenu.SETTLEMENT_DETAIL);
    navigate(`/creator/settlements/${year}/${month}`);
  };

  useEffect(() => {
    const fetchSettlements = async () => {
      const data = await getSettlements();
      setSettlementList(data);
    };

    fetchSettlements();
  }, []);

  return (
    <div className="flex flex-col w-full">
      {settlementList.map((settlement: Settlement, idx: number) => (
        <ListElem
          key={idx}
          title={`${settlement.year}년 ${settlement.month}월 정산`}
          divider={idx < settlementList.length - 1}
          buttons={[
            <Button text={settlement.settlementDate} />,
            <Button
              text="상세 보기"
              onClick={(): void => handleButtonClick(settlement.year, settlement.month)}
            />,
          ]}
        />
      ))}
    </div>
  );
};

export default SettlementListPage;
