import { createContext } from 'react';
import { ContextProps } from '../types/Props.tsx';

const Context = createContext<ContextProps | undefined>(undefined);

export default Context;
