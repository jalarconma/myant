import { useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../store/store";
import { setUser } from "../store/user-slice";
import { useAuthContext } from "../context/auth.context";

function useAuthPloc() {
  const dispatch = useDispatch();
  const user = useSelector((store: RootState) => store.user.data);
  const { value: authUseCase } = useAuthContext();

  const googleLogin = useCallback(() => {
    authUseCase.googleLogin();
  }, []);

  const isAuthenticated = useCallback(async () => {
    return await authUseCase.isAuthenticated();
  }, []);

  const getAuthenticatedUser = useCallback(async () => {
    const currentUser = await authUseCase.getAuthenticatedUser();
    dispatch(setUser(currentUser));
    return currentUser;
  }, []);

  const logout = useCallback(async () => {
    dispatch(setUser(null));
    await authUseCase.logout();
  }, []);

  return { user, isAuthenticated, googleLogin, logout, getAuthenticatedUser };
}

export default useAuthPloc;