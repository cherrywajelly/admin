import { ReactNode, useEffect, useState } from 'react';
import { SettlementDetail } from '../../types/Types';
import CreatorSection from '../../sections/CreatorInfoSection';
import IconGroupsSection from '../../sections/IconGroupsSection';
import { useParams } from 'react-router-dom';
import { getSettlement } from '../../api/creator/Settlement';

const SettlementDetailPage = (): ReactNode => {
  const { year, month } = useParams<{ year: string; month: string }>();
  const [settlementDetail, setSettlementDetail] = useState<SettlementDetail>();

  useEffect(() => {
    const fetchSettlement = async () => {
      if (!year || !month) {
        return;
      }

      const data = await getSettlement(parseInt(year), parseInt(month));
      setSettlementDetail(data);
    };

    fetchSettlement();
  }, [year, month]);

  return (
    settlementDetail && (
      <div className="min-h-screen p-8 space-y-8">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-4">
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-bold">{`${settlementDetail.year}년 ${settlementDetail.month}월 ${settlementDetail.nickname}님의 정산 내역`}</h1>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4"></div>
        </div>
        <CreatorSection
          soldIconNumber={settlementDetail.soldIconNumber}
          revenue={settlementDetail.revenue}
          settlement={settlementDetail.settlement}
        />
        <IconGroupsSection iconGroups={settlementDetail.iconGroups} />
      </div>
    )
  );
};

export default SettlementDetailPage;
