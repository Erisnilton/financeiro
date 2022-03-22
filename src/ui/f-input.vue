<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: [String, Number],
    required: false,
  },
  label: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  step: {
    type: [String, Number],
    default: 1,
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const onInput = (e: any) =>
  emit(
    "update:modelValue",
    props.type === "number" ? Number(e.target.value) : String(e.target.value)
  );
</script>

<template>
  <component class="f-input" :is="label ? 'label' : 'div'">
    <span class="f-input__label" v-if="label">{{ label }}</span>
    <input
      class="f-input__control"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :step="step"
      @input="onInput"
    />
  </component>
</template>

<style lang="scss">
.f-input {
  margin-bottom: var(--spacing-2);
  &__label {
    display: block;
    font-weight: bold;
    margin-bottom: var(--spacing-1);
  }
  &,
  &__control {
    display: block;
    width: 100%;
  }
  &__control {
    font: inherit;
    border: 1px solid var(--theme-label);
    background-color: var(--theme-panel);
    padding: var(--spacing-1) var(--spacing-2);
    border-radius: 0.357142857rem;
    outline: none;
    color: inherit;
    &:focus {
      box-shadow: 0 0 0 0.142857143rem currentColor;
    }
  }
}
</style>
