import { ApprovalState } from './Enums';

export type Inquiry = {
  id: number;
  title: string;
  isResolved: boolean;
};

export type InquiryDetail = {
  id: number;
  author: string;
  title: string;
  content: string;
  createdAt: string;
  images?: string[];
  isResolved: boolean;
};

export type IconGroup = {
  id: number;
  title: string;
  headImage: string;
  approvalState: ApprovalState;
};

export type IconGroupDetail = {
  title: string;
  headImage: string;
  creator: string;
  description: string;
  approvalState: ApprovalState;
  iconImages: string[];
  soldIconNumber: number;
  revenue: number;
};

export type IconGroupDetail2 = {
  title: string;
  headImage: string;
  creator: string;
  description: string;
  approvalState: ApprovalState;
  iconImages: string[];
};

export type Settlement = {
  year: number;
  month: number;
  settlementDate: string;
};

export type SettlementDetail = {
  year: number;
  month: number;
  nickname: string;
  soldIconNumber: number;
  revenue: number;
  settlement: number;
  bankName: string;
  accountNumber: string;
  iconGroups: IconGroupShort[];
};

export type CreatorSettlement = {
  id: number;
  nickname: string;
  profileUrl: string;
  isSettled: boolean;
};

export type CreatorDetail = {
  profilePicture: string;
  nickname: string;
  bankName: string;
  accountNumber: string;
  madeIconNumber: number;
  soldIconNumber: number;
  revenue: number;
  iconGroups: IconGroupShort[];
};

export type CreatorMember = {
  nickname: string;
  profilePicture: string;
  bankName: string;
  accountNumber: string;
  madeIconNumber: number;
  soldIconNumber: number;
  revenue: number;
  settlement: number;
  iconGroups: IconGroupShort[];
};

export type IconGroupShort = {
  title: string;
  salesCount: number;
  revenue: number;
  iconImageUrl: string[];
};
