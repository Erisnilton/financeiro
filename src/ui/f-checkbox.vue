<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  modelValue: Boolean,
  label: {
    type: String,
    required: false,
  },
});
const isFocus = ref(false);

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

function toggle() {
  emit("update:modelValue", !props.modelValue);
}
</script>

<template>
  <label
    tabindex="0"
    @focus="isFocus = true"
    @blur="isFocus = false"
    @click="toggle"
    @keyup.space="isFocus && toggle()"
  >
    <div :class="['f-checkbox', { 'f-checkbox--checked': modelValue }]"></div>
    <strong v-if="label" class="ml-1"> {{ label }}</strong>
  </label>
</template>

<style lang="scss">
.f-checkbox {
  display: inline-flex;
  position: relative;
  width: 1rem;
  height: 1rem;
  border: 1px solid var(--theme-foreground);
  background-color: var(--theme-panel);
  align-items: center;

  &--checked {
    background-color: var(--theme-primary);
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 70%;
      height: 25%;
      border-left: 2px solid var(--theme-foreground);
      border-bottom: 2px solid var(--theme-foreground);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -85%) rotate(-45deg);
    }
  }
}
</style>
