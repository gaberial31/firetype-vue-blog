<template>
  <div class="slider">
    <div class="slider__controls">
      <h3>View More Recent Blogs</h3>

      <SliderControls
        :isPrevButton="isPrevButton"
        :isNextButton="isNextButton"
        @slideLeft="slideLeft"
        @slideRight="slideRight"
      />
    </div>

    <div
      class="slider__content"
      ref="slider"
      :style="[`transform: translateX(-${position}px)`]"
    >
      <template v-for="(post, index) in posts" :key="post.id">
        <Card
          :style="index % 2 === 0 ? 'min-width: 530px' : 'min-width: 300px'"
          :small="index % 2 === 1"
          :post="post"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from "vue";

// * Composables
import { useSlider } from "@/composables/useSlider";

// * Interfaces
import { IPostWithUser } from "@/types/entities/post.interface";

// * Cards components
import Card from "@/components/ui/Card/Card.vue";

// * SLider controls components
import SliderControls from "./SliderControls/SliderControls.vue";

defineProps({
  posts: {
    type: Array as PropType<IPostWithUser[]>,
    required: true,
  },
});

// * Slider ref template
const slider = ref<HTMLElement | null>(null);

const translateSize = 300;

const { position, slideLeft, slideRight, isPrevButton, isNextButton } =
  useSlider(slider, translateSize);
</script>

<style lang="sass" scoped>
@import "@/styles/animations"
@import "./CardSlider"
</style>
