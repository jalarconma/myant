import React from 'react';
import { useForm } from 'react-hook-form';
import { AddRegisterModel } from '../../models/add-register.model';
import useRegisterPloc from '../../../../plocs/register.ploc';
import useAccountPloc from '../../../../plocs/account.ploc';

function AddRegister() {
  const { register, handleSubmit, formState: { errors } } = useForm<AddRegisterModel>();
  const onSubmit = (data: AddRegisterModel) => console.log(data);
  console.log(errors);

  const { getRegisters } = useRegisterPloc()
  const { getAccounts } = useAccountPloc();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Description" autoComplete="off" {...register("description", { required: true, maxLength: 100 })} />
        <label className="form-control-text" >Description</label>
      </div>

      <div className="relative z-0">
        <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label htmlFor="floating_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Floating standard</label>
      </div>

      <input type="number" placeholder="Amount" {...register("amount", { required: true, min: 0 })} />
      <input type="date" placeholder="Date" {...register("registrationDate", { required: true })} />
      <select {...register("type", { required: true })}>
        <option value="">Select...</option>
        <option value="Expense">expense</option>
        <option value="Income">income</option>
        <option value="Transfer">transfer</option>
      </select>
      <select {...register("account", { required: true })}>
        <option value="">Select...</option>
        <option value="Bank account">Bank account</option>
      </select>
      <select {...register("category", { required: true })}>
        <option value="">Select...</option>
        <option value="house">house</option>
      </select>
      <button type="submit">Create</button>
    </form>
  );
}

export default AddRegister;