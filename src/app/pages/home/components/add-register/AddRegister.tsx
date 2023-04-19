import React from 'react';
import { useForm } from 'react-hook-form';
import { AddRegisterModel } from '../../models/AddRegister.model';

function AddRegister() {
  const { register, handleSubmit, formState: { errors } } = useForm<AddRegisterModel>();
  const onSubmit = (data: AddRegisterModel) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Description" {...register("description", { required: true, maxLength: 100 })} />
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