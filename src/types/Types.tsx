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
  iconGroups: IconGroupDetail[];
};

export type CreatorSettlement = {
  id: number;
  nickname: string;
  profileUrl: string;
  isSettled: boolean;
};