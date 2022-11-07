import { createContext, ReactNode } from "react";
import * as AuthSession from 'expo-auth-session';

interface UserProps {
  name: string;
  avatarUrl: string;
}


export interface AuthContextDataProps {
    user: UserProps;
    signIn: () => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode;
}
export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider( { children } : AuthProviderProps){


  async function signIn(){
    console.log(AuthSession.makeRedirectUri({ useProxy: true}));

  }

  return (
    <AuthContext.Provider value={{
      signIn,
      user: {
        name: 'Lucas Kroger',
        avatarUrl: 'https://github.com/Lkcm.png'
      }
    }}>
      {children}
    </AuthContext.Provider>
  )
}