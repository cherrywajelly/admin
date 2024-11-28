import { ReactNode, useState, useEffect } from 'react';

const Header = (): ReactNode => {
  const [nickname, setNickname] = useState<string>();

  useEffect((): void => {
    switch (localStorage.getItem('role')) {
      case 'admin':
        setNickname('cherry');
        break;
      case 'creator':
        setNickname('박하준');
        break;
    }
  }, []);

  return (
    <header className="p-4 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/timetoast.png" alt="Time Toast" className="w-12 h-12" />
          <h1 className="text-4xl font-bold ml-2">Time Toast</h1>
        </div>
        <span className="text-xl">안녕하세요! {nickname}님</span>
      </div>
    </header>
  );
};

export default Header;
