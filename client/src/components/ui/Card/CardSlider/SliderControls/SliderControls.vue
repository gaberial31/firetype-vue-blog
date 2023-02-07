<template>
  <div class="slider-controls">
    <div class="slider-controls__wrapper">
      <div
        :class="['slider-controls__item', { disabled: !isPrevButton }]"
        @click="$emit('slideLeft')"
      >
        <FontAwesomeIcon :icon="['fas', 'chevron-left']" />
      </div>

      <div
        :class="['slider-controls__item', { disabled: !isNextButton }]"
        @click="$emit('slideRight')"
      >
        <FontAwesomeIcon :icon="['fas', 'chevron-right']" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isPrevButton: {
    type: Boolean,
    default: false,
  },

  isNextButton: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="sass" scoped>
@import "./SliderControls"
</style>
