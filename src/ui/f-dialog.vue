<script setup lang="ts"></script>

<template>
  <div class="f-dialog bg--panel fg--foreground">
    <div class="f-dialog__header pa-2">
      <slot name="header"></slot>
    </div>

    <div class="f-dialog__body pa-2">
      <slot></slot>
    </div>

    <div class="f-dialog__footer d-flex justify-flex-end pa-2">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.f-dialog {
  border-radius: 5px;
  overflow: hidden;

  &__header {
    background-color: var(--theme-primary);
  }
}
</style>
