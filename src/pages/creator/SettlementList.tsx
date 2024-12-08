import { ReactNode, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextProps } from '../../types/Props';
import Context from '../../contexts/Context';
import Button from '../../components/Button';
import { CreatorMenu } from '../../types/Enums';
import { getSettlements } from '../../api/creator/settlement';
import { Settlement } from '../../types/Types';
import TableHeader from '../../components/TableHeader';
import Divider from '@mui/material/Divider';

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
      <TableHeader headers={[
        { width: '2/12', text: '정산 년월' },
        { width: '2/12', text: '정산 일자' },
        { width: '2/12', text: '판매한 아이콘 수' },
        { width: '2/12', text: '총 수익' },
        { width: '2/12', text: '정산 금액' },
        { width: '1/12', text: '' },
        { width: '2/12', text: '' },
      ]} />
      {settlementList.map((settlement: Settlement, idx: number) => (
        <div className={`w-full`}>
          <div className={`flex flex-row items-center p-4 w-full h-28`}>
            <p className="text-lg w-2/12 text-center">{`${settlement.year}년 ${settlement.month}월`}</p>
            <p className="text-lg w-2/12 text-center">{settlement.settlementDate}</p>
            <p className="text-lg w-2/12 text-center">{settlement.saleCount}</p>
            <p className="text-lg w-2/12 text-center">{settlement.revenue}</p>
            <p className="text-lg w-2/12 text-center">{settlement.settlement}</p>
            <div className="flex flex-row w-1/12 justify-center"/>
            <div className="flex flex-row w-2/12 justify-center">
              <Button text="상세 보기" onClick={(): void => handleButtonClick(settlement.year, settlement.month)} />
            </div>
          </div>
          {idx < settlementList.length - 1 && <Divider sx={{ width: '100%', backgroundColor: 'gray-80' }} />}
        </div>
      ))}
    </div>
  );
};

export default SettlementListPage;
