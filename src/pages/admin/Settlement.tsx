import { ReactNode, useEffect, useState } from 'react';
import ListElem from '../../components/ListElem';
import Button from '../../components/Button';
import { Tab, Tabs } from '@mui/material';

const Settlement = (): ReactNode => {
  const [monthlySettlements, setMonthlySettlements] = useState<
    { month: string; amount: number; creators: string[] }[]
  >([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    // 예시 데이터: 실제 데이터는 API 호출 등을 통해 가져올 수 있습니다.
    setMonthlySettlements([
      { month: '1월', amount: 100000, creators: ['디자이너무빙'] },
      { month: '2월', amount: 150000, creators: ['디자이너무빙'] },
      { month: '6월', amount: 200000, creators: ['디자이너무빙'] },
      { month: '7월', amount: 250000, creators: ['디자이너무빙', '다른제작자'] },
      { month: '10월', amount: 300000, creators: ['디자이너무빙'] },
    ]);
  }, []);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    e.preventDefault();
    setValue(newValue);
  };

  const handleSettlement = () => {
    alert('정산 완료');
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Tabs value={value} onChange={handleChange} aria-label="monthly settlements tabs">
        {monthlySettlements.map((settlement, index) => (
          <Tab key={index} label={settlement.month} />
        ))}
      </Tabs>
      {monthlySettlements.map((settlement, index) => (
        <div key={index} hidden={value !== index} className="w-full">
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
