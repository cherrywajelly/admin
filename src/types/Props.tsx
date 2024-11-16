import { SelectChangeEvent } from '@mui/material';
import { BankName, ApprovalState } from './Enums';
import { ReactNode } from 'react';

export type ButtonProps = {
  styles?: string;
  icon?: string;
  text: string;
  onClick?: () => void;
  isClicked?: boolean;
};

export type TextInputProps = {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textStyles?: string;
  inputStyles?: string;
};

export type BankInputProps = {
  label: string;
  bankName?: BankName | string;
  accountNumber?: string;
  onBankNameChange?: (e: SelectChangeEvent) => void;
  onAccountNumberChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textStyles?: string;
  bankNameInputStyles?: string;
  accountNumberInputStyles?: string;
};

export type ListElemProps = {
  id?: number;
  title: string;
  subtitle?: string;
  image: string;
  divider?: boolean;
  state?: ApprovalState;
  buttons: ReactNode[];
};

export type IconDetailProps = {
  id: number;
  title: string;
  creator: string;
  headImage: string;
  description: string;
  approvalState: ApprovalState;
  iconImages: string[];
  sales?: number;
  revenue?: number;
};

export type ContextProps = {
  selectedMenu: string;
  setSelectedMenu: (selectedMenu: string) => void;
};

export type IconsSectionProps = {
  iconImages: string[];
};

export type CreatorSectionProps = {
  madeIconNumber?: number;
  sales?: number;
  revenue?: number;
};

export type IconGroup = {
  id: number;
  title: string;
  iconImages: string[];
  sales?: number;
  revenue?: number;
};

export type CreatorDetailProps = {
  id: number;
  title: string;
  headImage: string;
  madeIconNumber: number;
  totalRevenue: number;
  iconGroups: IconGroup[];
};

export type IconGroupsSectionProps = {
  iconGroups: IconGroup[];
};

export type UserInfo = {
  nickname: string;
  bankName: BankName | string;
  accountNumber: string;
  profilePicture: File | null;
};

export type IconInfoSectionProps = {
  sales: number;
  revenue: number;
};

export type SettlementDetailProps = {
  id: number;
  title: string;
  headImage: string;
  sales: number;
  revenue: number;
  iconGroups: IconGroup[];

export type IconUploadSectionProps = {
  iconImages: string[];
  setIconImages: (iconImages: string[]) => void;
};
