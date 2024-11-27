import { createContext } from 'react';
import { ContextProps } from '../types/Props.tsx';

const Context = createContext<ContextProps>({
  selectedMenu: '',
  setSelectedMenu: (): void => {},
});

export default Context;
