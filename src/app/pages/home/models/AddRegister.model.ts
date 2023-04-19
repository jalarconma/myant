export interface AddRegisterModel {
  description: string;
  amount: number;
  registrationDate: Date;
  type: 'Expense' | 'Income' | 'Transfer';
  account: string;
  category: string;
}