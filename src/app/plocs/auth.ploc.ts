import { useCallback } from "react";

function useAuthPloc() {

  const googleLogin = useCallback(() => {}, []);

  const isAuthenticated = useCallback( () => {}, []);

  const logout = useCallback( () => {}, []);

  return { isAuthenticated, googleLogin, logout };
}