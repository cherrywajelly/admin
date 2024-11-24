import { ReactNode, useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ListElem from '../../components/ListElem';
import Button from '../../components/Button';
import { Tab, Tabs } from '@mui/material';
import { ContextProps, Settlement } from '../../types/Props';
import Context from '../../contexts/Context';

const SettlementList = (): ReactNode => {
  const { setSelectedMenu } = useContext(Context) as ContextProps;
  const navigate = useNavigate();
  const [settlements, setSettlements] = useState<Settlement[]>([]);
  const [year, setYear] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  
  const handleYearChange = (_: React.SyntheticEvent, newValue: number) => {
    console.log(`year: ${newValue}`);
    setYear(newValue);
  };

  const handleMonthChange = (_: React.SyntheticEvent, newValue: number) => {
    console.log(`month: ${newValue}`);
    setMonth(newValue);
  };

  const handleButtonClick = (id: number): void => {
    console.log(id);
    setSelectedMenu('정산 상세');
    navigate(`/admin/settlements/${id}`);
  };

  useEffect(() => {
    setSettlements([
      { year: 2023, month: 7, creator: { id: 0, nickname: '디자이너무빙', profilePicture: '/images/empty.png', revenue: 100000 }, isSettled: true },
      { year: 2023, month: 10, creator: { id: 0, nickname: '디자이너무빙', profilePicture: '/images/empty.png', revenue: 100000 }, isSettled: false },
      { year: 2023, month: 12, creator: { id: 0, nickname: '디자이너무빙', profilePicture: '/images/empty.png', revenue: 100000 }, isSettled: true },
      { year: 2023, month: 12, creator: { id: 1, nickname: '디자이너너너', profilePicture: '/images/empty.png', revenue: 100000 }, isSettled: false },
      { year: 2024, month: 2, creator: { id: 0, nickname: '디자이너무빙', profilePicture: '/images/empty.png', revenue: 100000 }, isSettled: true },
      { year: 2024, month: 3, creator: { id: 0, nickname: '디자이너무빙', profilePicture: '/images/empty.png', revenue: 100000 }, isSettled: false },
    ]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Tabs value={year} onChange={handleYearChange} aria-label="year settlements tabs">
        {Array.from({ length: 2 }, (_, i) => i).map((year) => (
          <Tab key={year} label={`${year + 2023}년`} />
        ))}
      </Tabs>
      <Tabs value={month} onChange={handleMonthChange} aria-label="month settlements tabs">
        {Array.from({ length: 12 }, (_, i) => i).map((month) => (
          <Tab key={month} label={`${month + 1}월`} />
        ))}
      </Tabs>
      {settlements.map((settlement: Settlement, index: number) => (
        <div key={index} hidden={year !== settlement.year - 2023 || month !== settlement.month - 1} className="w-full">
          <ListElem
            key={index}
            id={index}
            title={settlement.creator.nickname}
            subtitle={`정산 금액: ${settlement.creator.revenue}원`}
            image={settlement.creator.profilePicture}
            buttons={[
              <Button
                text={`${settlement.isSettled ? '정산 완료' : '정산 미완료'}`}
              />,
              <Button
                text='상세 보기'
                onClick={() => handleButtonClick(index)}
              />,
            ]}
            // divider={creatorIndex < settlement.creators.length - 1}
          />
        </div>
      ))}
    </div>
  );
};

export default SettlementList;
