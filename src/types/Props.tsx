import { SelectChangeEvent } from "@mui/material";
import { BankName } from "./Enums";

type ButtonProps = {
  styles?: string;
  icon?: string;
  text: string;
  onClick?: () => void;
  isClicked?: boolean;
};

type TextInputProps = {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textStyles?: string;
  inputStyles?: string;
};

type BankInputProps = {
  label: string;
  bankName?: BankName | string;
  accountNumber?: string;
  onBankNameChange?: (e: SelectChangeEvent) => void;
  onAccountNumberChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textStyles?: string;
  bankNameInputStyles?: string;
  accountNumberInputStyles?: string;
};

export type { ButtonProps, TextInputProps, BankInputProps };
