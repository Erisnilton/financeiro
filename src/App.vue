<script setup lang="ts">
import { onMounted, ref } from "vue";
import dividaService from "./services/divida/divida.service";
import { useDividasStore } from "./stores/divida";
import FBtn from "./ui/f-btn.vue";
const isDark = ref(true);

const store = useDividasStore();

onMounted(async () => {
  store.dividas = await dividaService.find();
});
</script>

<template>
  <div
    :class="[
      'f-app',
      isDark ? 'theme--dark' : 'theme--light',
      'bg--background',
      'fg--foreground',
      'fill-w',
    ]"
  >
    <header class="header d-flex">
      <div class="container d-flex align-center">
        <h1 class="flex-fill">Financeiro</h1>
        <nav class="nav">
          <ul class="d-flex">
            <li class="d-flex">
              <router-link class="px-2 py-3" to="/"
                ><span>Inicio</span></router-link
              >
            </li>
            <li class="d-flex">
              <router-link class="px-2 py-3" to="/por-pessoa"
                ><span>Por pessoa </span>
              </router-link>
            </li>
            <!-- <li class="d-flex">
              <router-link class="px-2 py-3" to="/cadastro"
                ><span>Nova Divida</span></router-link
              >
            </li> -->
          </ul>
        </nav>
        <FBtn @click="isDark = !isDark">Trocar tema</FBtn>
      </div>
    </header>
    <div class="container pt-2">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  color: var(--theme-foreground);
  background-color: var(--theme-panel);
}
.nav {
  ul {
    height: 100%;
    list-style: none;
    li {
      a {
        text-decoration: none;
        color: var(--theme-label);
        transition: all 0.25s ease;
        &.router-link-active {
          box-shadow: inset 0 -4px 0 0 currentColor;
          color: var(--theme-primary);
          font-weight: bold;
        }
        &:hover {
          box-shadow: inset 0 -4px 0 0 currentColor;
        }
      }
    }
  }
}
</style>
