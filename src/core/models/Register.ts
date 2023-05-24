export interface Register {
  id: string;
  description: string;
  amount: number;
  registrationDate: Date;
  type: 'Expense' | 'Income' | 'Transfer';
  account: string;
  category: string;
}