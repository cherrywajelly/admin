import { ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.tsx';
import SignupPage from '../pages/SignupPage.tsx';
import LoginPage from '../pages/LoginPage.tsx';
import AdminPage from '../pages/admin/AdminPage.tsx';
import AdminIconList from '../pages/admin/IconList.tsx';
import AdminIconDetail from '../pages/admin/IconDetail.tsx';
import AdminCreatorList from '../pages/admin/CreatorList.tsx';
import AdminCreatorDetail from '../pages/admin/CreatorDetail.tsx';
import AdminSettlement from '../pages/admin/Settlement.tsx';
import AdminMyPage from '../pages/admin/MyPage.tsx';
import CreatorPage from '../pages/creator/CreatorPage.tsx';
import CreatorIconList from '../pages/creator/IconList.tsx';
import CreatorIconDetail from '../pages/creator/IconDetail.tsx';
// import CreatorIconRegister from '../pages/creator/IconRegister.tsx';
import CreatorSettlement from '../pages/creator/SettlementList.tsx';
import CreatorSettlementDetail from '../pages/creator/SettlementDetail.tsx';
import CreatorMyPage from '../pages/creator/MyPage.tsx';

const Router = (): ReactNode => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<HomePage />}>
          <Route path="/admin" element={<AdminPage />}>
            <Route path="/admin/icons" element={<AdminIconList />} />
            <Route path="/admin/icons/:id" element={<AdminIconDetail />} />
            <Route path="/admin/creators" element={<AdminCreatorList />} />
            <Route path="/admin/creators/:id" element={<AdminCreatorDetail />} />
            <Route path="/admin/settlement" element={<AdminSettlement />} />
            <Route path="/admin/mypage" element={<AdminMyPage />} />
          </Route>
          <Route path="/creator" element={<CreatorPage />}>
            <Route path="/creator/icons" element={<CreatorIconList />} />
            <Route path="/creator/icons/:id" element={<CreatorIconDetail />} />
            <Route path="/creator/register" element={<></>} />
            <Route path="/creator/settlements" element={<CreatorSettlement />} />
            <Route path="/creator/settlements/:id" element={<CreatorSettlementDetail />} />
            <Route path="/creator/mypage" element={<CreatorMyPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
