import { ReactNode, useEffect, useState } from 'react';
import ListElem from '../../components/ListElem';
import Button from '../../components/Button';
import { Tab, Tabs } from '@mui/material';

const Settlement = (): ReactNode => {
  const [monthlySettlements, setMonthlySettlements] = useState<
    { year: number; month: number; amount: number; creators: string[] }[]
  >([]);
  const [year, setYear] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);

  useEffect(() => {
    // 예시 데이터: 실제 데이터는 API 호출 등을 통해 가져올 수 있습니다.
    setMonthlySettlements([
      { year: 2023, month: 7, amount: 100000, creators: ['디자이너무빙'] },
      { year: 2023, month: 10, amount: 150000, creators: ['디자이너무빙'] },
      { year: 2023, month: 12, amount: 200000, creators: ['디자이너무빙'] },
      { year: 2024, month: 2, amount: 250000, creators: ['디자이너무빙', '다른제작자'] },
      { year: 2024, month: 6, amount: 300000, creators: ['디자이너무빙'] },
    ]);
  }, []);

  const handleYearChange = (_: React.SyntheticEvent, newValue: number) => {
    console.log(`year: ${newValue}`);
    setYear(newValue);
  };

  const handleMonthChange = (_: React.SyntheticEvent, newValue: number) => {
    console.log(`month: ${newValue}`);
    setMonth(newValue);
  };

  const handleSettlement = () => {
    alert('정산 완료');
  };

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
      {monthlySettlements.map((settlement, index) => (
        <div key={index} hidden={year !== settlement.year - 2023 || month !== settlement.month - 1} className="w-full">
          {settlement.creators.map((creator, creatorIndex) => (
            <ListElem
              key={creatorIndex}
              id={creatorIndex}
              title={creator}
              subtitle={`정산 금액: ${settlement.amount.toLocaleString()}원`}
              image={'/images/empty.png'}
              buttons={[
                <Button
                  text={`${settlement.amount.toLocaleString()}원`}
                  onClick={handleSettlement}
                  styles="!bg-secondary-main !text-white !w-40 border-none"
                />,
              ]}
              divider={creatorIndex < settlement.creators.length - 1}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Settlement;
