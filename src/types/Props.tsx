import { SelectChangeEvent } from '@mui/material';
import { BankName, ApprovalState } from './Enums';
import { ReactNode } from 'react';

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
  id?: number;
  title: string;
  subtitle?: string;
  image: string;
  divider?: boolean;
  state?: ApprovalState;
  buttons: ReactNode[];
};

type IconDetailProps = {
  id: number;
  title: string;
  creator: string;
  headImage: string;
  description: string;
  approvalState: ApprovalState;
  iconImages: string[];
};

type ContextProps = {
  selectedMenu: string;
  setSelectedMenu: (selectedMenu: string) => void;
};

type IconsSectionProps = {
  iconImages: string[];
};

type CreatorSectionProps = {
  madeIconNumber: number;
  totalRevenue: number;
};

type IconGroup = {
  id: number;
  title: string;
  iconImages: string[];
  revenue: number;
};

type CreatorDetailProps = {
  id: number;
  title: string;
  headImage: string;
  madeIconNumber: number;
  totalRevenue: number;
  iconGroups: IconGroup[];
};

type IconGroupsSectionProps = {
  iconGroups: IconGroup[];
};

type UserInfo = {
  nickname: string;
  bankName: BankName | string;
  accountNumber: string;
  profilePicture: File | null;
};

export type {
  ButtonProps,
  TextInputProps,
  BankInputProps,
  ListElemProps,
  ContextProps,
  IconDetailProps,
  IconsSectionProps,
  IconGroup,
  CreatorSectionProps,
  CreatorDetailProps,
  IconGroupsSectionProps,
  UserInfo,
};
