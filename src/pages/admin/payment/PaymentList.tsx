import { ReactNode, useState } from 'react';
import { PaymentType } from '../../../types/Enums';
import { Tab, Tabs } from '@mui/material';
import IconPaymentList from '../payment/IconPaymentList';
import PremiumPaymentList from '../payment/PremiumPaymentList';

const PaymentListPage = (): ReactNode => {
  const [paymentType, setPaymentType] = useState<PaymentType>(PaymentType.ICON);

  const handlePaymentTapChange = (_: React.SyntheticEvent, newValue: PaymentType): void => {
    setPaymentType(newValue);
  };

  return (
    <div>
      <Tabs value={paymentType} onChange={handlePaymentTapChange} aria-label="payment tabs">
        {[PaymentType.ICON, PaymentType.PREMIUM].map((payment: PaymentType) => (
          <Tab key={payment} value={payment} label={payment} />
        ))}
      </Tabs>
      {paymentType === PaymentType.ICON && <IconPaymentList />}
      {paymentType === PaymentType.PREMIUM && <PremiumPaymentList />}
    </div>
  );
};

export default PaymentListPage;
