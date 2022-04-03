<script setup lang="ts">
defineProps({
  visible: Boolean,
  persistent: Boolean,
});

const emit = defineEmits<{
  (event: "update:visible", value: boolean): void;
  (event: "change", value: boolean): void;
  (event: "open"): void;
  (event: "close"): void;
}>();

function changeVisiblity(visibility: boolean) {
  emit("update:visible", visibility);
  emit("change", visibility);
}
</script>

<template>
  <teleport to=".f-app">
    <transition name="fade">
      <div
        v-if="visible"
        class="f-modal flex-center pa-4"
        @click="changeVisiblity(false)"
      >
        <div @click.stop class="f-modal__contents ma-auto">
          <slot></slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style lang="scss">
.f-modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;

  background-color: #000a;
  backdrop-filter: blur(5px);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
