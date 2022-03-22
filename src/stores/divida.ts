import type { Divida } from "@/services/divida/divida.model";
import dividaService from "@/services/divida/divida.service";
import { defineStore } from "pinia";

export const useDividasStore = defineStore({
  id: "dividas",
  state: () => ({
    dividas: [] as Divida[],
  }),
  actions: {
    async save(form: any) {
      const result = await dividaService.save(form);
      this.dividas = await dividaService.find();
      return result;
    },
    async deleteById(id: number) {
      await dividaService.delete(id);
      this.dividas = await dividaService.find();
    },
  },
});
