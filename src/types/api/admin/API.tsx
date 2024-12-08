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
  nickname: string;
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
  salesIconCount: number;
  totalRevenue: number;
  createdIconCount: number;
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
  createdAt: string;
  memberCount: number;
};

export type GroupResponse = {
  teamId: number;
  teamProfileUrl: string;
  name: string;
  createdAt: string;
  managerProfileResponses: {
    nickname: string;
    memberProfileUrl: string;
  }[];
};

export type IconPaymentsElemResponse = {
  paymentId: number;
  nickname: string;
  itemName: string;
  itemType: string;
  amount: number;
  paymentState: string;
  createdAt: string;
  expiredDate: string;
};

export type PremiumPaymentsElemResponse = {
  paymentId: number;
  nickname: string;
  itemName: string;
  itemType: string;
  amount: number;
  paymentState: string;
  createdAt: string;
  expiredDate: string;
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
  openedDate: string;
  isOpened: boolean;
  createdAt: string;
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
  memorizedDate: string;
  openedDate: string;
  isOpened: boolean;
  giftToastType: string;
  createdAt: string;
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
  email: string;
  loginType: string;
  premiumType: string;
  memberRole: string;
};

export type EventToastRequestBody = {
  openedDate: string;
  isOpened: boolean;
};

export type CapsuleToastRequestBody = {
  memorizedDate: string;
  openedDate: string;
  isOpened: boolean;
};

export type UserDetailResponse = {
  memberId: number;
  memberProfileUrl: string;
  nickname: string;
  email: string;
  memberRole: string;
  loginType: string;
  premiumType: string;
};

export type UserDetailFollowerResponse = {
  followMemberNickname: string;
  followMemberProfileUrl: string;
};

export type UserDetailFollowingResponse = {
  followingMemberNickname: string;
  followingMemberProfileUrl: string;
};

export type UserDetailGroupResponse = {
  teamName: string;
  teamProfileUrl: string;
};

export type UserDetailShowcaseResponse = {
  showcaseName: string;
  showcaseIconImage: string;
};

export type UserDetailEventResponse = {
  eventToastName: string;
  eventToastIconImage: string;
};

export type UserDetailCapsuleResponse = {
  giftToastName: string;
  giftToastIconImage: string;
};

export type UserDetailIconGroupResponse = {
  iconGroupName: string;
  iconImages: string[];
};

export type UserDetailPaymentResponse = {
  amount: number;
  paymentState: string;
  orderId: string;
  itemType: string;
  itemTypeData: string;
  createdAt: string;
  nickname: string;
  images: string[];
  expiredDate: string;
};
