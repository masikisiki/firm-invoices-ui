export  type SalesInvoiceLine = {
  lineNo: number;
  description: string;
  duration: number;
  amount: number;
  invoiceNumber: string;
  __typename: string;
};

export  type SalesInvoiceHeader = {
  invoiceNumber: string;
  configurationId: number;
  clientName: string;
  clientEmail: string;
  invoiceAmount: number;
  chargeRate: number;
  totalDuration: number;
  invoiceDate: string;
  status: string;
  __typename: string;
};

export type SalesInvoice = {
  id: string;
  header: SalesInvoiceHeader;
  lines: SalesInvoiceLine[];
};

type SalesInvoiceData = {
  salesInvoices: SalesInvoice[];
};
