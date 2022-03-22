<script setup lang="ts">
export interface Column {
  id: string;
  title: string;
  get(row: any): any;
  align?: "left" | "right" | "center";
}

const { columns = [], rows = [] } =
  defineProps<{ columns: Column[]; rows: any[] }>();
</script>

<template>
  <table class="fill-w f-table">
    <thead>
      <slot name="before-header"></slot>
      <tr>
        <th
          v-for="column in columns"
          :class="[`text-${column.align ?? 'left'}`]"
        >
          {{ column.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in rows">
        <slot
          v-for="column in columns"
          :name="`column-${column.id}`"
          v-bind="{ row, index, column }"
        >
          <td :class="[`text-${column.align ?? 'left'}`]">
            {{ column.get(row) }}
          </td>
        </slot>
      </tr>
    </tbody>
    <tfoot>
      <slot name="footer"></slot>
    </tfoot>
  </table>
</template>

<style lang="scss">
.f-table {
  border-spacing: 0;
  border-collapse: collapse;
  td,
  th {
    padding: var(--spacing-2);
  }
  thead,
  tfoot {
    th,
    td {
      background-color: var(--theme-panel);
      padding: var(--spacing-1) var(--spacing-2);
    }
  }
  tbody {
    tr:nth-child(2n) {
      td {
        background-color: var(--theme-hover);
      }
    }
  }
}
</style>
