import { ReactNode } from 'react';
import { BankInputProps } from '../types/Props';
import { MenuItem, Select } from '@mui/material';
import { BankName } from '../types/Enums';

const BankInput = (props: BankInputProps): ReactNode => {
  const { label, bankName, accountNumber, onBankNameChange, onAccountNumberChange, textStyles, bankNameInputStyles, accountNumberInputStyles } = props;

  return (
    <div className="flex items-center">
      <label className={`font-bold ${textStyles}`}>{label}</label>
      <div className="flex flex-row justify-between space-x-2">
        <Select
          value={bankName}
          onChange={onBankNameChange}
          className={`border-gray-300 !rounded-lg ${bankNameInputStyles}`}
        >
          {Object.values(BankName).map((bank: BankName) => (
            <MenuItem key={bank} value={Object.keys(BankName).find(key => BankName[key as keyof typeof BankName] === bank)}>
              {bank}
            </MenuItem>
          ))}
        </Select>
        <input
          type="text"
          value={accountNumber}
          onChange={onAccountNumberChange}
          className={`border border-gray-300 p-2 rounded-lg ${accountNumberInputStyles}`}
        />
      </div>
    </div>
  );
};

export default BankInput;
