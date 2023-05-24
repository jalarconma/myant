import { useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../store/store";
import { useAccountContext } from "../context/account.context";
import { setAccounts } from "../store/account-slice";

function useAccountPloc() {
  const dispatch = useDispatch();
  const accounts = useSelector((store: RootState) => store.account.data);
  const { value: accountUseCase } = useAccountContext();

  const getAccounts = useCallback(async () => {
    const result = await accountUseCase.getAccounts();
    dispatch(setAccounts(result));
  }, []);

  return { accounts, getAccounts };
}

export default useAccountPloc;