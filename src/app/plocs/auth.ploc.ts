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
    dispatch(setUser({ name: 'test', email: 'test@test.com'}));
  }, []);

  const isAuthenticated = useCallback(async () => {
    await authUseCase.isAuthenticated()
    //dispatch(getAuthenticated())
  }, []);

  const logout = useCallback(() => {
    dispatch(setUser(null));
  }, []);

  return { user, isAuthenticated, googleLogin, logout };
}

export default useAuthPloc;