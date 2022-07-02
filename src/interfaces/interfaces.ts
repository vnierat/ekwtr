export interface Contract {
  id: number;
  date: string;
  valueHC?: number;
  valueHP?: number;
  value?: number;
}

export interface ContractGaz {
  id: number;
  date: string;
  value: number;
}
