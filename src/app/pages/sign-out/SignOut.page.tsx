import { useEffect } from "react";

import useAuthPloc from "../../plocs/auth.ploc";

function SignOutPage() {
  const { user, logout } = useAuthPloc();

  useEffect(() => {
    if(user) {
      logout();
    }
  }, [user, logout]);

  return (
    <div>
      <h1>Signing out...</h1>
    </div>
  );
}

export default SignOutPage;