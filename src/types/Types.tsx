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