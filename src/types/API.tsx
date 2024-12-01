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

export type IconGroupRequestBody = {
  name: string;
  price: number;
  iconType: string;
  iconBuiltin: string;
  description: string;
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
