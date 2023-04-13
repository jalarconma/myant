import { useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../store/store";
import { setUser } from "../store/user-slice";
import { useAuthContext } from "../context/auth.context";

function useAuthPloc() {
  const dispatch = useDispatch();
  const user = useSelector((store: RootState) => store.user.data);
  const { value: authUseCase } = useAuthContext();

  const googleLogin = useCallback(async () => {
    await authUseCase.googleLogin();
  }, []);

  const isAuthenticated = useCallback(async () => {
    return await authUseCase.isAuthenticated();
  }, []);

  const getAuthenticatedUser = useCallback(async () => {
    const user = await authUseCase.getAuthenticatedUser();
    dispatch(setUser(user));
    return user;
  }, []);

  const logout = useCallback(() => {
    dispatch(setUser(null));
  }, []);

  return { user, isAuthenticated, googleLogin, logout, getAuthenticatedUser };
}

export default useAuthPloc;