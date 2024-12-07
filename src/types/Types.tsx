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

export type EventToast = {
  id: number;
  title: string;
  nickname: string;
  image: string;
};

export type EventToastDetail = {
  id: number;
  image: string;
  title: string;
  nickname: string;
  openDate: string;
  isOpened: boolean;
  createdAt: string;
  jams: Jam[];
};

export type Jam = {
  id: number;
  title: string;
  image: string;
  nickname: string;
  createdAt: string;
};

export type CapsuleToast = {
  id: number;
  title: string;
  group: string;
  image: string;
};

export type CapsuleToastDetail = {
  id: number;
  image: string;
  title: string;
  group: string;
  memoDate: string;
  openDate: string;
  isOpened: boolean;
  toastType: string;
  createdAt: string;
  pieces: Piece[];
};

export type Piece = {
  id: number;
  title: string;
  image: string;
  nickname: string;
  createdAt: string;
};

export type Group = {
  id: number;
  title: string;
  image: string;
};

export type GroupDetail = {
  id: number;
  image: string;
  title: string;
  createdAt: string;
  members: Member[];
};

export type Member = {
  id: number;
  nickname: string;
  image: string;
};

export type Payment = {
  id: number;
  nickname: string;
  itemName: string;
  itemType: string;
  createdAt: string;
};

export type PaymentDetail = {
  id: string;
  nickname: string;
  itemName: string;
  itemType: string;
  amount: number;
  paymentState: string;
  expiredDate: string;
  image: string;
  createdAt: string;
};

export type User = {
  id: number;
  title: string;
  image: string;
};

export type UserDetail = {
  id: number;
  title: string;
  image: string;
  email: string;
  loginType: string;
  premium: string;
};

export type UserDetailFollower = {
  nickname: string;
  image: string;
};

export type UserDetailFollowing = {
  nickname: string;
  image: string;
};

export type UserDetailGroup = {
  name: string;
  image: string;
};

export type UserDetailShowcase = {
  title: string;
  image: string;
};

export type UserDetailEvent = {
  title: string;
  image: string;
};

export type UserDetailCapsule = {
  title: string;
  image: string;
};

export type UserDetailIconGroup = {
  name: string;
  images: string[];
};

export type UserDetailPayment = {
  id: number;
  itemName: string;
  itemType: string;
  amount: number;
  state: string;
  nickname: string;
  images: string[];
  createdAt: string;
  expiredDate: string;
};
