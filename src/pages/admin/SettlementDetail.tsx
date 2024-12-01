import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CreatorSection from '../../sections/CreatorInfoSection';
import IconGroupsSection from '../../sections/IconGroupsSection';
import Button from '../../components/Button';
import { SettlementDetail } from '../../types/Types';
import { getSettlement, postSettlement } from '../../api/admin/Settlement';
import { SettlementRequestBody } from '../../types/api/admin/API';

const SettlementDetailPage = (): ReactNode => {
  const { id, year, month } = useParams<{ id: string; year: string; month: string }>();
  const [settlementDetail, setSettlementDetail] = useState<SettlementDetail>();

  const handleSettlement = () => {
    const uploadSettlement = async () => {
      if (!id || !year || !month) {
        return;
      }
      
      const requestBody: SettlementRequestBody = {
        year: parseInt(year),
        month: parseInt(month),
      };
      
      const res = await postSettlement(id, requestBody);
      
      if (res.ok) {
        alert('정산이 완료되었습니다.');
      }
    };

    uploadSettlement();
  };
  
  useEffect(() => {
    const fetchSettlement = async () => {
      if (!id || !year || !month) {
        return;
      }

      const data = await getSettlement(parseInt(id), parseInt(year), parseInt(month));
      setSettlementDetail(data);
    };

    fetchSettlement();
  }, [id]);

  return (
    settlementDetail && (
      <div className="min-h-screen p-8 space-y-8">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-4">
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-bold">{`${settlementDetail.year}년 ${settlementDetail.month}월 ${settlementDetail.nickname}님의 정산 내역`}</h1>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <Button text="정산하기" onClick={handleSettlement} />
          </div>
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
