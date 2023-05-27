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
      <div className="input-group">
        <input type="number" className="form-control" placeholder="Amount" autoComplete="off" {...register("amount", { required: true, min: 0 })} />
        <label className="form-control-text">Amount</label>
      </div>
      <div className="input-group">
        <input type="date" className="form-control" placeholder="Date" autoComplete="off" {...register("registrationDate", { required: true })} />
        <label className="form-control-text">Date</label>
      </div>

      <div className="input-group">
        <select className="form-control" placeholder="Select" {...register("type", { required: true })}>
          <option value="">Select...</option>
          <option value="Expense">expense</option>
          <option value="Income">income</option>
          <option value="Transfer">transfer</option>
        </select>
        <label className="form-control-text">Register Type</label>
      </div>


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