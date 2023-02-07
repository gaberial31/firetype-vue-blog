<template>
  <Teleport to="body">
    <Transition name="fadeScale">
      <template v-if="model">
        <div class="modal">
          <div class="modal__wrapper" ref="modal" :style="{ maxWidth }">
            <div class="modal__header">
              <h2 class="modal__header__title">{{ title }}</h2>
              <FontAwesomeIcon :icon="['fas', 'close']" @click="closeModal" />
            </div>

            <div class="modal__content" v-html="content"></div>
          </div>
        </div>
      </template>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// * A function that will close the modal when clicked outside
import { onClickOutside } from "@vueuse/core";

// * Main modal props
const props = defineProps({
  title: {
    type: String,
    default: "",
  },

  content: {
    type: String,
    default: "",
  },

  maxWidth: {
    type: String,
    default: "400px",
  },

  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },

  set(value: boolean) {
    emit("update:modelValue", value);
  },
});

// * Main
const modal = ref<HTMLElement | null>(null);

const closeModal = () => {
  emit("update:modelValue", false);
};

onClickOutside(modal, closeModal);
</script>

<style lang="sass" scoped>
@import "./Modal"
@import "@/styles/animations.sass"
</style>
