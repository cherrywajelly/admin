import { ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout.tsx';

import { LoginPage, SignupPage, SocialAuthCallback } from './Auth';

import {
  AdminIconList,
  AdminIconDetail,
  AdminCreatorList,
  AdminCreatorDetail,
  AdminSettlement,
  AdminSettlementDetail,
  AdminInquiryList,
  AdminInquiryDetail,
  AdminUserList,
  AdminUserDetail,
  AdminPaymentList,
  AdminPaymentDetail,
  AdminToastList,
  AdminEventToastDetail,
  AdminCapsuleToastDetail,
  AdminGroupList,
  AdminGroupDetail,
} from './Admin';

import {
  CreatorIconList,
  CreatorIconDetail,
  CreatorIconRegister,
  CreatorSettlement,
  CreatorSettlementDetail,
  CreatorMyPage,
  CreatorAccountModification,
} from './Creator';
import AdminHome from '../pages/admin/Home.tsx';

const Router = (): ReactNode => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/api/v2/login/kakao"
          element={<SocialAuthCallback social="kakao" role="creator" version="v2" />}
        />
        <Route
          path="/api/v3/login/kakao"
          element={<SocialAuthCallback social="kakao" role="admin" version="v3" />}
        />
        <Route
          path="/api/v2/login/google"
          element={<SocialAuthCallback social="google" role="creator" version="v2" />}
        />
        <Route
          path="/api/v3/login/google"
          element={<SocialAuthCallback social="google" role="admin" version="v3" />}
        />
        <Route path="/" element={<Layout />}>
          <Route path="admin">
            <Route index path="dashboard" element={<AdminHome />} />
            <Route path="icons" element={<AdminIconList />} />
            <Route path="icons/:id" element={<AdminIconDetail />} />
            <Route path="creators" element={<AdminCreatorList />} />
            <Route path="creators/:id" element={<AdminCreatorDetail />} />
            <Route path="settlements" element={<AdminSettlement />} />
            <Route path="settlements/:id/:year/:month" element={<AdminSettlementDetail />} />
            <Route path="inquiries" element={<AdminInquiryList />} />
            <Route path="inquiries/:id" element={<AdminInquiryDetail />} />
            <Route path="users" element={<AdminUserList />} />
            <Route path="users/:id" element={<AdminUserDetail />} />
            <Route path="payments" element={<AdminPaymentList />} />
            <Route path="payments/:id" element={<AdminPaymentDetail />} />
            <Route path="toasts" element={<AdminToastList />} />
            <Route path="eventtoasts/:id" element={<AdminEventToastDetail />} />
            <Route path="capsuletoasts/:id" element={<AdminCapsuleToastDetail />} />
            <Route path="groups" element={<AdminGroupList />} />
            <Route path="groups/:id" element={<AdminGroupDetail />} />
          </Route>
          <Route path="creator">
            <Route index path="icons" element={<CreatorIconList />} />
            <Route path="icons/:id" element={<CreatorIconDetail />} />
            <Route path="register" element={<CreatorIconRegister />} />
            <Route path="settlements" element={<CreatorSettlement />} />
            <Route path="settlements/:year/:month" element={<CreatorSettlementDetail />} />
            <Route path="mypage" element={<CreatorMyPage />} />
            <Route path="modify" element={<CreatorAccountModification />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
