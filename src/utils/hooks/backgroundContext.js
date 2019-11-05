import { createContext, useContext } from 'react';

export const PunkraftBackgroundCtx = createContext({});
export const usePunkraftBackground = () => useContext(PunkraftBackgroundCtx);
