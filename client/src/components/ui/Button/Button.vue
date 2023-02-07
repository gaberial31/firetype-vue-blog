<template>
  <button :class="{ disabled: disabled }">
    {{ label }}
    <template v-if="icon.length > 0">
      <FontAwesomeIcon :icon="icon" />
    </template>
  </button>
</template>

<script setup lang="ts">
import { PropType } from "vue";

defineProps({
  label: {
    type: String,
    default: "",
  },

  icon: {
    type: Array as PropType<string[]>,
    default: () => [],
  },

  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="sass" scoped>
@import "./Button"
</style>
