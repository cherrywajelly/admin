import { ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.tsx';
import SignupPage from '../pages/SignupPage.tsx';
import LoginPage from '../pages/LoginPage.tsx';
import AdminIconList from '../pages/admin/IconList.tsx';
import AdminIconDetail from '../pages/admin/IconDetail.tsx';
import AdminCreatorList from '../pages/admin/CreatorList.tsx';
import AdminCreatorDetail from '../pages/admin/CreatorDetail.tsx';
import AdminSettlement from '../pages/admin/SettlementList.tsx';
import AdminSettlementDetail from '../pages/admin/SettlementDetail.tsx';
import AdminInquiryList from '../pages/admin/InquiryList.tsx';
import AdminInquiryDetail from '../pages/admin/InquiryDetail.tsx';
import CreatorPage from '../pages/creator/CreatorPage.tsx';
import CreatorIconList from '../pages/creator/IconList.tsx';
import CreatorIconDetail from '../pages/creator/IconDetail.tsx';
import CreatorIconRegister from '../pages/creator/IconRegister.tsx';
import CreatorSettlement from '../pages/creator/SettlementList.tsx';
import CreatorSettlementDetail from '../pages/creator/SettlementDetail.tsx';
import CreatorMyPage from '../pages/creator/MyPage.tsx';
import CreatorAccountModification from '../pages/creator/AccountModification.tsx';
import Layout from '../layout/Layout.tsx';

const Router = (): ReactNode => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<Layout />}>
          {/* <Route path="admin" element={<Layout />}> */}
          <Route path="admin">
            <Route index path="icons" element={<AdminIconList />} />
            <Route path="icons/:id" element={<AdminIconDetail />} />
            <Route path="creators" element={<AdminCreatorList />} />
            <Route path="creators/:id" element={<AdminCreatorDetail />} />
            <Route path="settlements" element={<AdminSettlement />} />
            <Route path="settlements/:id" element={<AdminSettlementDetail />} />
            <Route path="inquiries" element={<AdminInquiryList />} />
            <Route path="inquiries/:id" element={<AdminInquiryDetail />} />
          </Route>
          <Route path="creator" element={<CreatorPage />}>
            <Route path="icons" element={<CreatorIconList />} />
            <Route path="icons/:id" element={<CreatorIconDetail />} />
            <Route path="register" element={<CreatorIconRegister />} />
            <Route path="settlements" element={<CreatorSettlement />} />
            <Route path="settlements/:id" element={<CreatorSettlementDetail />} />
            <Route path="mypage" element={<CreatorMyPage />} />
            <Route path="modify" element={<CreatorAccountModification />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
