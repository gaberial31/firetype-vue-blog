<template>
  <div class="pagination">
    <div
      :class="['pagination__item', 'prev', { disabled: !isPrevButton }]"
      @click="pagination--"
    >
      <FontAwesomeIcon :icon="['fas', 'chevron-left']" />
    </div>

    <template v-for="index in length" :key="index">
      <div
        :class="['pagination__item', { active: index == pagination }]"
        @click="pagination = index"
      >
        {{ index }}
      </div>
    </template>

    <div
      :class="['pagination__item', 'next', { disabled: !isNextButton }]"
      @click="pagination++"
    >
      <FontAwesomeIcon :icon="['fas', 'chevron-right']" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 1,
  },

  length: {
    type: Number,
    default: 5,
  },
});

const emit = defineEmits(["update:modelValue"]);

const pagination = computed({
  get() {
    return props.modelValue;
  },
  set(value: number) {
    emit("update:modelValue", value);
  },
});

const isPrevButton = computed(() => pagination.value > 1);
const isNextButton = computed(() => pagination.value < props.length);
</script>

<style lang="sass" scoped>
@import "./Pagination"
</style>
