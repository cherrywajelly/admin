
export type SettlementsElemResponse = {
  year: number;
  month: number;
  settlementDate: number[];
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

export type IconGroupsElemResponse = {
  iconGroupId: number;
  iconImageUrl: string;
  iconTitle: string;
  iconState: string;
};

export type IconGroupResponse = {
  iconGroupOrderedResponse: {
    iconName: string;
    iconImageUrl: string[];
    orderCount: number;
    income: number;
    iconState: string;
    thumbnailImageUrl: string;
  };
  price: number;
  description: string;
  creatorProfileUrl: string;
  creatorNickname: string;
};

export type IconGroupRequestBody = {
  name: string;
  price: number;
  iconType: string;
  iconBuiltin: string;
  description: string;
};