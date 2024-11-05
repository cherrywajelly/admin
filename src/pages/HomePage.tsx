import { ReactNode, useContext } from 'react';
import Context from '../contexts/Context';
import CreatorIconList from './creator/IconList';
import AdminIconList from './admin/IconList';

const HomePage = (): ReactNode => {
  const { role } = useContext(Context) as { role: keyof typeof pageType };

  const pageType = {
    creator: <CreatorIconList />,
    admin: <AdminIconList />,
  } as const;

  return (
    <>
      {pageType[role]}
    </>
  );
};

export default HomePage;
