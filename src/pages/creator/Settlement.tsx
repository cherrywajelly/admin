import { ReactNode, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextProps, ListElemProps } from '../../types/Props';
import Context from '../../contexts/Context';
import ListElem from '../../components/ListElem';
import Button from '../../components/Button';

const Settlement = (): ReactNode => {
  const [settlementList, setSettlementList] = useState<ListElemProps[]>([]);

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
        id: 0,
        title: '2024년 12월 정산',
        image: '/images/empty.png',
        buttons: [],
      },
      {
        id: 1,
        title: '2024년 11월 정산',
        image: '/images/empty.png',
        buttons: [],
      },
      {
        id: 2,
        title: '2024년 10월 정산',
        image: '/images/empty.png',
        buttons: [],
      },
      {
        id: 3,
        title: '2024년 09월 정산',
        image: '/images/empty.png',
        buttons: [],
      },
    ]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {settlementList.map((settlement: ListElemProps, idx: number) => (
        <ListElem
          key={idx}
          title={settlement.title}
          image={settlement.image}
          divider={idx < settlementList.length - 1}
          buttons={[
            <Button
              text="정산금 4억"
              styles="!bg-secondary-main !text-white !w-40 border-none"
            />,
            <Button
              text="2025.01.01"
              styles="!bg-secondary-main !text-white !w-40 border-none"
            />,
            <Button
              text="상세 보기"
              styles="!bg-secondary-main !text-white !w-40 border-none"
              onClick={(): void => handleButtonClick(settlement.id ?? 0)}
            />,
          ]}
        />
      ))}
    </div>
  );
};

export default Settlement;
