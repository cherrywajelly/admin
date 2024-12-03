import { ReactNode } from "react";
import { Divider } from "@mui/material";
import { CreatorSectionProps } from "../types/Props";

const CreatorInfoSection = (props: CreatorSectionProps): ReactNode => {
  const { madeIconNumber, soldIconNumber, revenue, settlement, bankName, accountNumber } = props;
  
  return (
    <div>
      <h2 className="text-xl font-bold">INFO</h2>
      <Divider sx={{ width: '100%', height: '2px', backgroundColor: '#E9E6E4', marginBottom: '8px' }} />
      <div className="space-y-2">
        {madeIconNumber !== undefined &&
          <div className="flex flex-row items-center w-full">
            <div className="w-40">제작한 아이콘 수</div>
            <div>{madeIconNumber}개</div>
          </div>
        }
        {soldIconNumber !== undefined &&
          <div className="flex flex-row items-center w-full">
            <div className="w-40">판매한 아이콘 수</div>
            <div>{soldIconNumber}개</div>
          </div>
        }
        {revenue !== undefined &&
          <div className="flex flex-row items-center w-full">
            <div className="w-40">총 수익</div>
            <div>{revenue.toLocaleString()}원</div>
          </div>
        }
        {settlement !== undefined &&
          <div className="flex flex-row items-center w-full">
            <div className="w-40">정산 금액</div>
            <div>{settlement.toLocaleString()}원</div>
          </div>
        }
        {bankName !== undefined && accountNumber !== undefined && 
          <div className="flex flex-row items-center w-full">
            <div className="w-40">계좌 정보</div>
            <div>{bankName} {accountNumber}</div>
          </div>
        }
      </div>
    </div>
  );
};

export default CreatorInfoSection;
