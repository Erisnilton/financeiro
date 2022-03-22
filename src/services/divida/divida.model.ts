import type { CrudModel } from "../crud";

export interface Divida extends CrudModel {
  pessoa: string;
  nome: string;
  valor: number;
  pago: boolean;
  createdAt: string
}
