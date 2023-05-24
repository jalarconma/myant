import { AccountContextProvider } from "../../context/account.context";
import { AuthContextProvider } from "../../context/auth.context";
import { RegisterContextProvider } from "../../context/register.context";

interface Props {
  children: React.ReactNode
}
function CaseProviders({ children }: Props) {
  return (
    <AuthContextProvider>
      <RegisterContextProvider>
        <AccountContextProvider>
          {children}
        </AccountContextProvider>
      </RegisterContextProvider>
    </AuthContextProvider>
  )
}

export default CaseProviders;