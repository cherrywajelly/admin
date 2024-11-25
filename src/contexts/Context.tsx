import { createContext } from 'react';
import { ContextProps } from '../types/Props.tsx';

const Context = createContext<ContextProps | undefined>({
  selectedMenu: '아이콘 목록',
  setSelectedMenu: () => {},
});

export default Context;
