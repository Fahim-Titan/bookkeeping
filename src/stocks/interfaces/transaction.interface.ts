export interface Transaction {
    id: number;
    ticker_id: number;
    lots: string;
    unitPrice: string;
    totalValue: number;
    debitTo: string;
    creditTo: string;
    dateTime: Date;
  }