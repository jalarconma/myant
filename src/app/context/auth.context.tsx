import { createContext, useContext, useState } from "react";
import { AuthUseCases } from "../../core/use-cases/auth.usecases";
import { AuthServiceLocator } from "../di/auth/AuthServiceLocator";

interface ProviderProps {
  children: React.ReactNode;
}

interface ProviderValue {
  value: AuthUseCases;
  setValue: React.Dispatch<React.SetStateAction<AuthUseCases>>
}

const initialValue: AuthUseCases = AuthServiceLocator.getInstance().getAuthUseCase();

export const AuthContext = createContext<ProviderValue>({
  value: initialValue,
  setValue: () => {}
});

export const AuthContextProvider = ({ children }: ProviderProps) => {
  const [value, setValue] = useState<AuthUseCases>(AuthServiceLocator.getInstance().getAuthUseCase());
  return <AuthContext.Provider value={{ value, setValue }}>{ children }</AuthContext.Provider>
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if(context === undefined) {
    throw new Error('useAuthContext must be used within a AuthContextProvider')
  }

  return context;
}