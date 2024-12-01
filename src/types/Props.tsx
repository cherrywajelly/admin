import { SelectChangeEvent } from '@mui/material';
import { BankName, ApprovalState } from './Enums';
import { ReactNode } from 'react';
import { IconGroupDetail } from './Types';

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
  title?: string;
  subtitle?: string;
  background?: string;
  image?: string;
  divider?: boolean;
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
  soldIconNumber: number;
  revenue: number;
  bankName?: BankName | string;
  accountNumber?: string;
};

export type CreatorDetailProps = {
  id: number;
  title: string;
  headImage: string;
  madeIconNumber: number;
  soldIconNumber: number;
  revenue: number;
  iconGroups: IconGroupDetail[];
};

export type IconGroupsSectionProps = {
  iconGroups: IconGroupDetail[];
};

export type Creator = {
  id: number;
  nickname: string;
  profilePicture: string;
  bankName: BankName | string;
  accountNumber: string;
  madeIconNumber: number;
  soldIconNumber: number;
  revenue: number;
  iconGroups: IconGroupDetail[];
};

export type IconInfoSectionProps = {
  soldIconNumber: number;
  revenue: number;
};

export type SettlementDetailProps = {
  id: number;
  title: string;
  headImage: string;
  sales: number;
  revenue: number;
  iconGroups: IconGroupDetail[];
};

export type IconUploadSectionProps = {
  iconImages: string[];
  setIconImages: (iconImages: string[]) => void;
};

export type Settlement = {
  year: number;
  month: number;
  creator: Creator;
  isSettled: boolean;
  date: string;
};

export type SidebarMenu = {
  menu: string;
  url: string;
};

export type SidebarMenusProps = {
  sidebarMenus: SidebarMenu[];
  externalLinks?: SidebarMenu[];
};

export type ProfileInputProps = {
  profilePicture: File | null;
  setProfilePicture: (file: File | null) => void;
  styles?: string;
};

export type SocialLoginButtonProps = {
  social: string;
  role: string;
  styles: string;
  icon: string;
  text: string;
};

export type SocialAuthCallbackProps = {
  social: string;
  role: string;
  version: string;
};
