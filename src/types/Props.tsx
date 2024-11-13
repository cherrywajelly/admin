import { SelectChangeEvent } from "@mui/material";
import { BankName, ApprovalState } from "./Enums";

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

type ListElemProps = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  divider?: boolean;
  state?: ApprovalState;
}

type IconDetailProps = {
  id: number;
  title: string;
  creator: string;
  headImage: string;
  description: string;
  approvalState: ApprovalState;
  iconImages: string[];
}

type ContextProps = {
  selectedMenu: string;
  setSelectedMenu: (selectedMenu: string) => void;
};

type IconsSectionProps = {
  iconImages: string[];
};

export type { ButtonProps, TextInputProps, BankInputProps, ListElemProps, ContextProps, IconDetailProps, IconsSectionProps };
