import { createContext } from 'react';

const Context = createContext<{
  role: string;
  setRole: (role: string) => void;
}>({ role: '', setRole: () => {} });

export default Context;
