import { ReactNode, useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { UserDetailType } from "../types/Enums";
import UserDetailFollowerPage from "../pages/admin/UserDetailFollower";
import UserDetailFollowingPage from "../pages/admin/UserDetailFollowing";
import UserDetailGroupPage from "../pages/admin/UserDetailGroup";
import UserDetailShowcasePage from "../pages/admin/UserDetailShowcase";
import UserDetailEventPage from "../pages/admin/UserDetailEvent";
import UserDetailCapsulePage from "../pages/admin/UserDetailCapsule";
import UserDetailIconGroupPage from "../pages/admin/UserDetailIconGroup";
import UserDetailPaymentPage from "../pages/admin/UserDetailPayment";
import { UserDetailSectionProps } from "../types/Props";

const UserDetailSection = (props: UserDetailSectionProps): ReactNode => {
  const { userId } = props;
  const [userDetailType, setUserDetailType] = useState<UserDetailType>(UserDetailType.FOLLOWER);

  const handleUserDetailTapChange = (_: React.SyntheticEvent, newValue: UserDetailType): void => {
    setUserDetailType(newValue);
  };
  
  return (
    <div>
      <Tabs value={userDetailType} onChange={handleUserDetailTapChange} aria-label="user detail tabs">
        {Object.values(UserDetailType).map((detail: UserDetailType) => (
          <Tab key={detail} value={detail} label={detail} sx={{ width: '12.5%' }} />
        ))}
      </Tabs>
      {userDetailType === UserDetailType.FOLLOWER && <UserDetailFollowerPage userId={userId} />}
      {userDetailType === UserDetailType.FOLLOWING && <UserDetailFollowingPage userId={userId} />}
      {userDetailType === UserDetailType.GROUP && <UserDetailGroupPage userId={userId} />}
      {userDetailType === UserDetailType.SHOWCASE && <UserDetailShowcasePage userId={userId} />}
      {userDetailType === UserDetailType.EVENT && <UserDetailEventPage userId={userId} />}
      {userDetailType === UserDetailType.CAPSULE && <UserDetailCapsulePage userId={userId} />}
      {userDetailType === UserDetailType.ICON_GROUP && <UserDetailIconGroupPage userId={userId} />}
      {userDetailType === UserDetailType.PAYMENT && <UserDetailPaymentPage userId={userId} />}
    </div>
  );
};

export default UserDetailSection;
