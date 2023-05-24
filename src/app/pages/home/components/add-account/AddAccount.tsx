import { useForm } from "react-hook-form";
import { AddAccountModel } from "../../models/add-account.model";
import useAccountPloc from "../../../../plocs/account.ploc";

const AddAccount = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<AddAccountModel>();
  const onSubmit = (data: AddAccountModel) => console.log(data);
  console.log(errors);

  const { getAccounts } = useAccountPloc()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Description" {...register("name", { required: true, maxLength: 100 })} />
      <input type="text" placeholder="Date" {...register("description", { required: true })} />
      <input type="number" placeholder="Amount" {...register("initialBalance", { required: true, min: 0 })} />
      <button type="submit">Create</button>
    </form>
  );

}

export default AddAccount;