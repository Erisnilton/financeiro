<script setup lang="ts">
import type { Divida } from "@/services/divida/divida.model";
import { useDividasStore } from "@/stores/divida";
import type { Column } from "@/ui/f-table.vue";
import { computed, ref } from "vue";
import FTable from "../ui/f-table.vue";
import DividaTable from "../components/divida-table.vue";

const store = useDividasStore();
function groupBy(getValue: (item: Divida) => any) {
  return (acc: Record<string, Divida[]>, item: Divida) => {
    const value = getValue(item);
    acc[value] = (acc[value] ?? []).concat(item);
    return acc;
  };
}
const byName = computed(() => {
  return store.dividas.reduce(
    groupBy((item) => item.pessoa),
    {}
  );
});

</script>

<template>
 
  <h1>Dividas Por Pessoa</h1>
  <div v-for="(items, name) in byName">
    <h3 class="my-2">{{ name }}</h3>
    <DividaTable :rows="items" class="mb-4"></DividaTable>
  </div>
</template>
