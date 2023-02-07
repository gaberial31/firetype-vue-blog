<template>
  <template v-if="isConfirmHeader">
    <Header />
  </template>

  <Spinner />

  <router-view v-slot="{ Component }">
    <transition mode="out-in" name="fade">
      <component :is="Component" />
    </transition>
  </router-view>

  <template v-if="isConfirmFooter">
    <Footer />
  </template>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

// * Constants
import { FETCH_ALL_POSTS } from "@/store/constants";

// * Store
import { usePostStore } from "./store/Post";

// * composables
import { useConfirmComponents } from "@/composables/useConfirmComponents";

// * Common components
import Header from "@/components/ui/Header/Header.vue";
import Footer from "@/components/ui/Footer/Footer.vue";

// * Spinner
import Spinner from "@/components/ui/Spinner/Spinner.vue";

const isConfirmHeader = useConfirmComponents("header");
const isConfirmFooter = useConfirmComponents("footer");

// * Fetch all post
const postStore = usePostStore();

onMounted(async () => {
  await postStore[FETCH_ALL_POSTS]();
});
</script>

<style lang="sass">
@import "./styles/index"
@import "./styles/animations"
</style>
