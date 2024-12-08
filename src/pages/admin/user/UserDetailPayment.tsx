import { ReactNode, useState, useEffect } from "react";
import { UserDetailSectionProps } from "../../../types/Props";
import { UserDetailPayment } from "../../../types/Types";
import { getUserPayments } from "../../../api/admin/user";

const UserDetailPaymentPage = (props: UserDetailSectionProps): ReactNode => {
  const { userId } = props;
  const [payments, setPayments] = useState<UserDetailPayment[]>([]);

  useEffect((): void => {
    const fetchUserPayments = async () => {
      const data = await getUserPayments(userId);
      setPayments(data);
    };

    fetchUserPayments();
  }, []);
  
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full bg-gray-100 py-3 px-4">
        <div className="w-1/6 truncate">구매 항목</div>
        <div className="w-1/6 truncate">지불 금액</div>
        <div className="w-1/6 truncate">결제 상태</div>
        <div className="w-1/6 truncate">주문 번호</div>
        <div className="w-1/6 truncate">구매 일자</div>
        <div className="w-1/6 truncate">프리미엄 만료 일자</div>
      </div>

      {payments.map((payment: UserDetailPayment, idx: number) => (
        <div 
          key={payment.id} 
          className={`flex w-full items-center py-4 px-4 ${
            idx % 2 === 0 ? 'bg-ivory' : 'bg-white'
          }`}
        >
          <div className="w-1/6 truncate">{payment.itemName}</div>
          <div className="w-1/6 truncate">{payment.amount.toLocaleString()}</div>
          <div className="w-1/6 truncate">{payment.state}</div>
          <div className="w-1/6 truncate">{payment.id}</div>
          <div className="w-1/6 truncate">{payment.createdAt}</div>
          <div className="w-1/6 truncate">{payment.expiredDate || '-'}</div>
        </div>
      ))}
    </div>
  );
};

export default UserDetailPaymentPage;
