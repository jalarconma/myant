import { useEffect } from "react";

import useAuthPloc from "../../plocs/auth.ploc";

function SignOutPage() {
  const { logout } = useAuthPloc();

  useEffect(() => {
    logout();
  }, [logout]);

  return (
    <div>
      <h1>Signing out...</h1>
    </div>
  );
}

export default SignOutPage;