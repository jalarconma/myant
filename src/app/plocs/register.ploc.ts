import { useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../store/store";
import { useRegisterContext } from "../context/register.context";
import { setRegisters } from "../store/register-slice";

function useRegisterPloc() {
  const dispatch = useDispatch();
  const registers = useSelector((store: RootState) => store.register.data);
  const { value: registerUseCase } = useRegisterContext();

  const getRegisters = useCallback(async () => {
    const response = await registerUseCase.getRegisters();
    dispatch(setRegisters(response));
    return response;
  }, []);

  return { registers, getRegisters};
}

export default useRegisterPloc;