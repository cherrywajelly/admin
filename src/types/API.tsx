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

export type IconGroupRequestJson = {
  name: string;
  price: number;
  iconType: string;
  iconBuiltin: string;
  description: string;
};

export type IconGroupRequestBody = {
  thumbnailIcon: File;
  files: File[];
  iconGroupPostRequest: IconGroupRequestJson;
};

export type IconGroupsElemResponse = {
  iconGroupId: number;
  iconImageUrl: string;
  iconTitle: string;
};

export type IconGroupResponse = {
  iconGroupOrderedResponse: {
    iconName: string;
    iconImageUrl: string[];
    orderCount: number;
    income: number;
  };
  price: number;
  description: string;
  creatorProfileUrl: string;
  creatorNickname: string;
};

export interface creatorRequest {
  nickname: string;
  creatorAccountResponse: {
    bank: string;
    accountNumber: string;
  };
}

export interface CreatorInfoRequestBody {
  profile: File;
  creatorRequest: creatorRequest;
}

export interface CreatorInfoResponse {
  nickname: string;
  bank: string;
  accountNumber: string;
  profileUrl: string;
}
