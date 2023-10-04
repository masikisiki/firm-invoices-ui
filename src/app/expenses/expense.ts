export interface Expense {
  id: number;
  description: string;
  category: string;
  amount: number;
  effectiveDate: Date;
  expiryDate: Date;
}
