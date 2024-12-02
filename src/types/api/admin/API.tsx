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

export type CreatorResponse = {
  profileUrl: string;
  nickname: string;
  bank: string;
  accountNumber: string;
};
