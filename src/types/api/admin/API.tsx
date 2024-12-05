export type InquiriesElemResponse = {
  inquiryId: number;
  title: string;
  inquiryState: string;
};

export type InquiryResponse = {
  id: number;
  title: string;
  inquiryState: string;
  createdAt: string;
  email: string;
  contentsUrl: string;
};

export type SettlementsResponse = {
  memberId: number;
  nickname: string;
  profileUrl: string;
  settlementState: string;
};

export type SettlementResponse = {
  year: number;
  month: number;
  creatorNickname: string;
  salesIconCount: number;
  totalRevenue: number;
  settlement: number;
  bank: string;
  accountNumber: string;
  settlementState: string;
  settlementIcons: [
    {
      title: string;
      revenue: number;
      salesCount: number;
      settlementState: string;
    }
  ]
};

export type SettlementRequestBody = {
  year: number;
  month: number;
};

export type IconGroupsElemResponse = {
  iconGroupId: number;
  title: string;
  thumbnailUrl: string;
  iconType: string;
  iconState: string;
};

export type IconGroupResponse = {
  thumbnailImageUrl: string;
  title: string;
  creatorNickname: string;
  iconState: string;
  price: number;
  description: string;
  iconResponses: {
    iconId: number;
    iconImageUrl: string;
  }[];
};

export type IconGroupRequestBody = {
  iconGroupId: number;
  iconState: string;
};

export type CreatorsElemResponse = {
  memberId: number;
  profileUrl: string;
  nickname: string;
};

export type CreatorInfoResponse = {
  profileUrl: string;
  nickname: string;
  bank: string;
  accountNumber: string;
};

export type CreatorIconResponse = {
  salesIconCount: number;
  totalRevenue: number;
  createdIconCount: number;
  creatorIconInfos: {
    title: string;
    revenue: number;
    salesCount: number;
    iconImageUrl: string[];
  }[];
};

export type GroupsElemResponse = {
  teamId: number;
  name: string;
  teamProfileUrl: string;
};

export type GroupResponse = {
  teamId: number;
  teamProfileUrl: string;
  name: string;
  createdAt: string;
  memberManagerResponses: {
    nickname: string;
    memberProfileUrl: string;
  }[];
};

export type PaymentsElemResponse = {
  paymentId: number;
  nickname: string;
  itemName: string;
  itemType: string;
  createdAt: string;
};

export type PaymentResponse = {
  orderId: number;
  nickname: string;
  itemType: string;
  itemName: string;
  amount: number;
  paymentState: string;
  expiredDate: string;
  createdAt: string;
  iconThumbnailImageUrl: string;
};

export type EventToastsElemResponse = {
  eventToastId: number;
  iconImageUrl: string;
  title: string;
  nickname: string;
};

export type EventToastResponse = {
  eventToastId: number;
  iconImageUrl: string;
  title: string;
  nickname: string;
  openedDate: string;
  isOpened: boolean;
  createdAt: string;
  jamManagerResponses: {
    jamId: number;
    iconImageUrl: string;
    title: string;
    nickname: string;
    createdAt: string;
  }[];
};

export type CapsuleToastsElemResponse = {
  giftToastId: number;
  iconImageUrl: string;
  title: string;
  name: string;
};

export type CapsuleToastResponse = {
  giftToastId: number;
  iconImageUrl: string;
  title: string;
  name: string;
  memorizedDate: string;
  openedDate: string;
  isOpened: boolean;
  giftToastType: string;
  createdAt: string;
  toastPieceManagerResponses: {
    toastPieceId: number;
    iconImageUrl: string;
    title: string;
    nickname: string;
    createdAt: string;
  }[];
};

export type UsersElemResponse = {
  memberId: number;
  nickname: string;
  memberProfileUrl: string;
};