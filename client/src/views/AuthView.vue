<template>
  <div class="authorization">
    <RouterView />

    <div class="authorization__background">
      <Background />
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";

// * Router
import { useRouter } from "vue-router";

// * Auth store
import { useAuthStore } from "@/store/Auth";

// * Auth background
import Background from "@/components/pages/Auth/Background/Background.vue";

const authStore = useAuthStore();
const router = useRouter();

watch(
  () => authStore.isLoggedIn,
  () => {
    router.push("/");
  }
);
</script>

<style lang="sass" scoped>
@import "./styles/AuthView"
</style>
