import { ReactNode, useState } from 'react';
import Router from './router/Router.tsx';
import Context from './contexts/Context.tsx';

function App(): ReactNode {
  const [role, setRole] = useState<string>('');

  return (
    <>
      <Context.Provider value={{ role, setRole }}>
        <Router />
      </Context.Provider>
    </>
  );
}

export default App;
