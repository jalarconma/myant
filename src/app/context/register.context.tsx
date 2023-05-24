import { createContext, useContext, useState } from "react";
import { RegisterUseCases } from "../../core/use-cases/register.usecases";
import { RegisterServiceLocator } from "../di/register/RegisterServiceLocator";

interface ProviderProps {
  children: React.ReactNode;
}

interface ProviderValue {
  value: RegisterUseCases;
  setValue: React.Dispatch<React.SetStateAction<RegisterUseCases>>
}

const initialValue: RegisterUseCases = RegisterServiceLocator.getInstance().getRegisterUseCase();

export const RegisterContext = createContext<ProviderValue>({
  value: initialValue,
  setValue: () => {}
});

export const RegisterContextProvider = ({ children }: ProviderProps) => {
  const [value, setValue] = useState<RegisterUseCases>(RegisterServiceLocator.getInstance().getRegisterUseCase());
  return <RegisterContext.Provider value={{ value, setValue }}>{ children }</RegisterContext.Provider>
}

export const useRegisterContext = () => {
  const context = useContext(RegisterContext);

  if(context === undefined) {
    throw new Error('useRegisterContext must be used within a RegisterContextProvider')
  }

  return context;
}