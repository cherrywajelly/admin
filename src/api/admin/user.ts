import { apiRequest } from "..";
import { UsersElemResponse, UserDetailResponse, UserDetailFollowerResponse, UserDetailFollowingResponse, UserDetailGroupResponse, UserDetailShowcaseResponse, UserDetailEventResponse, UserDetailCapsuleResponse, UserDetailIconGroupResponse, UserDetailPaymentResponse } from '../../types/api/admin/API';

export const getUsers = async (): Promise<any> => {
  try {
    const res = await apiRequest('/api/v3/members');

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: UsersElemResponse[] = (await res.json()).memberManagerResponses;

    const mappedData = data.map((user: UsersElemResponse) => ({
      id: user.memberId,
      title: user.nickname,
      image: user.memberProfileUrl,
      email: user.email,
      loginType: user.loginType,
      premium: user.premiumType,
      role: user.memberRole,
    }));

    return mappedData;
  } catch (error) {
    console.error('Failed to get icon group list:', error);
  }
};

export const getUserDetail = async (id: string): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/members/${id}/info`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: UserDetailResponse = await res.json();

    const mappedData = {
      id: data.memberId,
      image: data.memberProfileUrl,
      title: data.nickname,
      email: data.email,
      role: data.memberRole,
      loginType: data.loginType,
      premium: data.premiumType,
    };
    
    return mappedData;
  } catch (error) {
    console.error('Failed to get user detail:', error);
  }
};

export const getUserFollowers = async (id: string): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/members/${id}/follows`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: UserDetailFollowerResponse[] = (await res.json()).followManagerResponses;

    const mappedData = data.map((follower: UserDetailFollowerResponse) => ({
      nickname: follower.followMemberNickname,
      image: follower.followMemberProfileUrl,
    }));

    return mappedData;
  } catch (error) {
    console.error('Failed to get user follows:', error);
  }
};

export const getUserFollowings = async (id: string): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/members/${id}/followings`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: UserDetailFollowingResponse[] = (await res.json()).followingManagerResponses;
    const mappedData = data.map((following: UserDetailFollowingResponse) => ({
      nickname: following.followingMemberNickname,
      image: following.followingMemberProfileUrl,
    }));

    return mappedData;
  } catch (error) {
    console.error('Failed to get user followings:', error);
  }
};

export const getUserGroups = async (id: string): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/members/${id}/teams`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: UserDetailGroupResponse[] = (await res.json()).teamManagerResponses;
    const mappedData = data.map((group: UserDetailGroupResponse) => ({
      name: group.teamName,
      image: group.teamProfileUrl,
    }));

    return mappedData;
  } catch (error) {
    console.error('Failed to get user groups:', error);
  }
};

export const getUserShowcases = async (id: string): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/members/${id}/showcases`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: UserDetailShowcaseResponse[] = (await res.json()).showcaseManagerResponses;
    const mappedData = data.map((showcase: UserDetailShowcaseResponse) => ({
      title: showcase.showcaseName,
      image: showcase.showcaseIconImage,
    }));

    return mappedData;
  } catch (error) {
    console.error('Failed to get user showcases:', error);
  }
};

export const getUserEvents = async (id: string): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/members/${id}/eventToasts`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: UserDetailEventResponse[] = (await res.json()).eventToastManagerResponses;
    const mappedData = data.map((event: UserDetailEventResponse) => ({
      title: event.eventToastName,
      image: event.eventToastIconImage,
    }));

    return mappedData;
  } catch (error) {
    console.error('Failed to get user events:', error);
  }
};

export const getUserCapsules = async (id: string): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/members/${id}/giftToasts`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: UserDetailCapsuleResponse[] = (await res.json()).giftToastManagerResponses;
    const mappedData = data.map((capsule: UserDetailCapsuleResponse) => ({
      title: capsule.giftToastName,
      image: capsule.giftToastIconImage,
    }));

    return mappedData;
  } catch (error) {
    console.error('Failed to get user capsules:', error);
  }
};

export const getUserIconGroups = async (id: string): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/members/${id}/iconGroups`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: UserDetailIconGroupResponse[] = (await res.json()).iconGroupManagerResponses;
    const mappedData = data.map((iconGroup: UserDetailIconGroupResponse) => ({
      name: iconGroup.iconGroupName,
      images: iconGroup.iconImages,
    }));

    return mappedData;
  } catch (error) {
    console.error('Failed to get user icon groups:', error);
  }
};

export const getUserPayments = async (id: string): Promise<any> => {
  try {
    const res = await apiRequest(`/api/v3/members/${id}/payments`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: UserDetailPaymentResponse[] = (await res.json()).paymentManagerResponses;
    const mappedData = data.map((payment: UserDetailPaymentResponse) => ({
      id: payment.orderId,
      itemName: payment.itemTypeData,
      itemType: payment.itemType,
      amount: payment.amount,
      state: payment.paymentState,
      nickname: payment.nickname,
      images: payment.images,
      createdAt: payment.createdAt,
      expiredDate: payment.expiredDate,
    }));

    return mappedData;
  } catch (error) {
    console.error('Failed to get user payments:', error);
  }
};
