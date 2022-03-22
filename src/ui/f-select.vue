<script setup lang="ts">
import { computed, defineProps, type PropType } from "vue";

const props = defineProps({
  items: { type: Array as PropType<readonly any[]>, required: true },
  getText: {
    type: Function,
    default: (item: any) => {
      if (item && typeof item === "object") {
        return item.name ?? item.text ?? item.label;
      }
      return String(item);
    },
  },
  //   Nós somos a soma de tudo quanto já vivemos
  getValue: {
    type: Function,
    default: (item: any) => {
      if (item && typeof item === "object") {
        return item.id ?? item.key ?? item.value;
      }
      return item;
    },
  },
  modelValue: {},
  label: { type: String, required: false },
  placeholder: { type: String, default: "Selecione..." },
});
const emit = defineEmits<{
  (event: "update:modelValue", value: any): void;
}>();
const options = computed(() => {
  return props.items.map((item) => ({
    label: props.getText(item),
    value: props.getValue(item),
    get selected() {
      return this.value === props.modelValue;
    },
  }));
});

const seletedValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>

<template>
  <component class="f-input mb-0" :is="label ? 'label' : 'div'">
    <span class="f-input__label" v-if="label">{{ label }}</span>
    <select class="f-input__control" v-model="seletedValue">
      <option disabled :value="undefined">{{ placeholder }}</option>
      <option
        v-for="option in options"
        :value="option.value"
        :selected="option.selected"
      >
        {{ option.label }}
      </option>
    </select>
  </component>
</template>

<style></style>
