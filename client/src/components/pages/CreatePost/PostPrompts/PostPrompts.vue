<template>
  <div class="prompts">
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});
</script>

<style lang="sass" scoped>
@import "./PostPrompts"
</style>
