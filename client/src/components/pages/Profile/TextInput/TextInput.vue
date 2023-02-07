<template>
  <div class="input">
    <label :for="name">{{ label }}</label>
    <FontAwesomeIcon :icon="icon" />
    <input
      v-model.trim="model"
      :disabled="disabled == 1"
      type="text"
      :id="name"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";

// * User store
import { useUserStore } from "@/store/User";

// * Constants
import { SET_USER_DATA_FIELD } from "@/store/constants";

// * User interface
import { FirebaseUser } from "@/types/entities/user.interface";

const props = defineProps({
  value: {
    type: String,
    default: "",
    required: true,
  },

  label: {
    type: String,
    default: "",
  },

  name: {
    type: String as PropType<keyof FirebaseUser>,
    default: "",
  },

  icon: {
    type: Array as PropType<string[]>,
    default: () => ["fas", "user"],
  },

  disabled: {
    type: Number,
    default: 0,
  },
});

// * Input model
const userStore = useUserStore();

const model = computed({
  get() {
    return props.value;
  },
  set(value) {
    userStore[SET_USER_DATA_FIELD](props.name, value);
  },
});
</script>

<style lang="sass" scoped>
@import "./TextInput"
</style>
