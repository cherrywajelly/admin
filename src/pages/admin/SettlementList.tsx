import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { Divider, Tab, Tabs } from '@mui/material';
import { CreatorSettlement } from '../../types/Types';
import { getSettlements } from '../../api/admin/settlement';
import TableHeader from '../../components/TableHeader';

const SettlementListPage = (): ReactNode => {
  const navigate = useNavigate();
  const [settlements, setSettlements] = useState<CreatorSettlement[]>([]);
  const [year, setYear] = useState<number>(1);
  const [month, setMonth] = useState<number>(9);

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
      <TableHeader headers={[
        { width: '1/12', text: '제작자 이미지' },
        { width: '2/12', text: '제작자 이름' },
        { width: '2/12', text: '정산 상태' },
        { width: '5/12', text: '' },
        { width: '2/12', text: '' },
      ]} />
      {settlements.map((settlement: CreatorSettlement, idx: number) => (
        <div className={`w-full ${settlement.isSettled ? 'bg-white' : 'bg-ivory'}`}>
          <div className={`flex flex-row items-center p-4 w-full h-28`}>
            {settlement.profileUrl && (
              <div className="w-1/12 h-20 overflow-hidden">
                <img src={settlement.profileUrl} alt="icon" className="w-full h-full object-contain" />
              </div>
            )}
            <p className="text-lg w-2/12 text-center">{settlement.nickname}</p>
            <p className="text-lg w-2/12 text-center">{settlement.isSettled ? '정산 완료' : '정산 미완료'}</p>
            <div className="flex flex-row w-5/12 justify-center"/>
            <div className="flex flex-row w-2/12 justify-center">
              <Button text="상세 보기" onClick={(): void => handleButtonClick(settlement.id, year + 2023, month + 1)} />
            </div>
          </div>
          {idx < settlements.length - 1 && <Divider sx={{ width: '100%', backgroundColor: 'gray-80' }} />}
        </div>
      ))}
    </div>
  );
};

export default SettlementListPage;
