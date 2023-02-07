<template>
  <Teleport to="body">
    <Transition name="fadeScale">
      <template v-if="spinnerOpen">
        <div class="spinner">
          <img src="@/assets/images/handsup-logo.svg" />
          <span></span>
        </div>
      </template>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
// * Spinner hook
import { spinnerOpen } from "@/composables/useSpinner";
</script>

<style lang="sass" scoped>
@import "./Spinner"
@import "@/styles/animations"
</style>
