import { ReactNode } from 'react';

const Header = (): ReactNode => {
  const nickname = "cherry";

  return (
    <header className="bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/timetoast.png" alt="Time Toast" className="h-12 w-12" />
          <h1 className="text-4xl font-bold ml-2">Time Toast</h1>
        </div>
        <span className="text-xl">안녕하세요! {nickname}님</span>
      </div>
    </header>
  );
};

export default Header;
