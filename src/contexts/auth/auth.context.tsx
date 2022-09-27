import { createContext, ReactNode } from 'react';
import { signIn, singOut } from './auth.service';

type Props = {
  children: ReactNode;
};

type TAuthContext = {
  signIn: (username: string, password: string) => void;
  singOut: (username: string, email: string, password: string) => void;
};

const defaultValues: TAuthContext = {
  signIn: async () => null,
  singOut: async () => null,
};

export const AuthContext = createContext<TAuthContext>(defaultValues);

export const AuthProvider = ({ children }: Props): JSX.Element => {
  const value = {
    signIn,
    singOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
