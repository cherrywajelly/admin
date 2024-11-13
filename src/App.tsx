import { ReactNode, useState } from 'react';
import Router from './router/Router.tsx';
import Context from './contexts/Context.tsx';

function App(): ReactNode {
  const [selectedMenu, setSelectedMenu] = useState<string>('');

  return (
    <>
      <Context.Provider value={{ selectedMenu, setSelectedMenu }}>
        <Router />
      </Context.Provider>
    </>
  );
}

export default App;
