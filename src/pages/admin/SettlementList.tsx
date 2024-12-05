import { ReactNode, useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ListElem from '../../components/ListElem';
import Button from '../../components/Button';
import { Tab, Tabs } from '@mui/material';
import { ContextProps } from '../../types/Props';
import Context from '../../contexts/Context';
import { AdminMenu } from '../../types/Enums';
import { CreatorSettlement } from '../../types/Types';
import { getSettlements } from '../../api/admin/settlement';

const SettlementListPage = (): ReactNode => {
  const { setSelectedMenu } = useContext(Context) as ContextProps;
  const navigate = useNavigate();
  const [settlements, setSettlements] = useState<CreatorSettlement[]>([]);
  const [year, setYear] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);

  const handleYearChange = (_: React.SyntheticEvent, newValue: number) => {
    console.log(`year: ${newValue + 2023}`);
    setYear(newValue);
    
    const fetchSettlements = async () => {
      const data = await getSettlements(newValue + 2023, month + 1);
      setSettlements(data);
    };
    
    fetchSettlements();
  };

  const handleMonthChange = (_: React.SyntheticEvent, newValue: number) => {
    console.log(`month: ${newValue + 1}`);
    setMonth(newValue);

    const fetchSettlements = async () => {
      const data = await getSettlements(year + 2023, newValue + 1);
      setSettlements(data);
    };
    
    fetchSettlements();
  };

  const handleButtonClick = (id: number, year: number, month: number): void => {
    setSelectedMenu(AdminMenu.SETTLEMENT_DETAIL);
    navigate(`/admin/settlements/${id}/${year}/${month}`);
  };

  useEffect(() => {
    const fetchSettlements = async () => {
      const data = await getSettlements(year + 2023, month + 1);
      setSettlements(data);
    };

    fetchSettlements();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Tabs value={year} onChange={handleYearChange} aria-label="year settlements tabs">
        {Array.from({ length: 2 }, (_, i) => i).map((year) => (
          <Tab key={year} label={`${year + 2023}년`} />
        ))}
      </Tabs>
      <Tabs
        value={month}
        onChange={handleMonthChange}
        aria-label="month settlements tabs"
        className="w-full"
        variant="scrollable"
        scrollButtons={false}
      >
        {Array.from({ length: 12 }, (_, i) => i).map((month) => (
          <Tab key={month} label={`${month + 1}월`} className="flex-1 min-w-0" />
        ))}
      </Tabs>
      {settlements.map((settlement: CreatorSettlement, index: number) => (
        <div key={index} className="w-full">
          <ListElem
            key={index}
            id={index}
            title={settlement.nickname}
            image={settlement.profileUrl}
            background={settlement.isSettled ? 'bg-white' : 'bg-ivory'}
            buttons={[
              <Button text={`${settlement.isSettled ? '정산 완료' : '정산 미완료'}`} />,
              <Button text="상세 보기" onClick={() => handleButtonClick(settlement.id, year + 2023, month + 1)} />,
            ]}
            divider={index < settlements.length - 1}
          />
        </div>
      ))}
    </div>
  );
};

export default SettlementListPage;
