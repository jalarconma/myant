import { createContext, useContext, useState } from "react";
import { AccountUseCases } from "../../core/use-cases/account.usecases";
import { AccountServiceLocator } from "../di/account/AccountServiceLocator";

interface ProviderProps {
  children: React.ReactNode;
}

interface ProviderValue {
  value: AccountUseCases;
  setValue: React.Dispatch<React.SetStateAction<AccountUseCases>>
}

const initialValue: AccountUseCases = AccountServiceLocator.getInstance().getAccountUseCase();

export const AccountContext = createContext<ProviderValue>({
  value: initialValue,
  setValue: () => {}
});

export const AccountContextProvider = ({ children }: ProviderProps) => {
  const [value, setValue] = useState<AccountUseCases>(AccountServiceLocator.getInstance().getAccountUseCase());
  return <AccountContext.Provider value={{ value, setValue }}>{ children }</AccountContext.Provider>
}

export const useAccountContext = () => {
  const context = useContext(AccountContext);

  if(context === undefined) {
    throw new Error('useAccountContext must be used within a AccountContextProvider')
  }

  return context;
}