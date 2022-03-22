<script setup lang="ts">
import { readonly, ref } from "vue";
import FSelect from "../ui/f-select.vue";
import Modal from "../ui/f-modal.vue";
import FBtn from "../ui/f-btn.vue";
import Dialog from "../ui/f-dialog.vue";

const visible = ref(false);
</script>

<template>
  <Modal v-model:visible="visible">
    <Dialog>
      <template #header>
        <h3>Modal de teste</h3>
      </template>

      <p>Lorem ipsum dolor sit amet.</p>
      <template #footer>
        <FBtn @click="visible = false">Fechar</FBtn>
      </template>
    </Dialog>
  </Modal>
  <FBtn @click="visible = true">Abrir</FBtn>
  <!-- <pre>{{ JSON.stringify(value) }}</pre>
  <FSelect :items="items" v-model="value" /> -->
</template>
