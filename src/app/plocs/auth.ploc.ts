import { useCallback } from "react";
import { useDispatch } from 'react-redux';

function useAuthPloc() {
  const dispatch = useDispatch();

  const googleLogin = useCallback(() => {
    dispatch(loginByGoogle())
  }, []);

  const isAuthenticated = useCallback(() => {
    dispatch(getAuthenticated())
  }, []);

  const logout = useCallback( () => {}, []);

  return { isAuthenticated, googleLogin, logout };
}