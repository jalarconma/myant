import { AuthContextProvider } from "../../context/auth.context";

interface Props {
  children: React.ReactNode
}
function CaseProviders({ children }: Props) {
  return (
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
  )
}

export default CaseProviders;