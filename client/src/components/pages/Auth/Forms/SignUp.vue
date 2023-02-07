<template>
  <form class="auth-block">
    <h2>Create Your <span>FireType!</span> Account</h2>

    <img class="auth-block__logo" src="@/assets/images/handsup-logo.svg" />

    <div class="auth-block__inputs">
      <div class="auth-block__inputs__item">
        <FontAwesomeIcon :icon="['fas', 'user']" />
        <input
          type="text"
          placeholder="Enter you First Name"
          v-model.trim="formData.firstname"
        />
      </div>

      <div class="auth-block__inputs__item">
        <FontAwesomeIcon :icon="['fas', 'user']" />
        <input
          type="text"
          placeholder="Enter your Last Name"
          v-model.trim="formData.lastname"
        />
      </div>

      <div class="auth-block__inputs__item">
        <FontAwesomeIcon :icon="['fas', 'user']" />
        <input
          type="text"
          placeholder="Enter Username"
          v-model.trim="formData.username"
        />
      </div>

      <div class="auth-block__inputs__item">
        <FontAwesomeIcon :icon="['fas', 'envelope']" />
        <input
          type="text"
          placeholder="Enter your Email"
          v-model.trim="formData.email"
        />
      </div>

      <div class="auth-block__inputs__item">
        <FontAwesomeIcon :icon="['fas', 'lock']" />
        <input
          type="password"
          placeholder="Enter your Password"
          v-model.trim="formData.password"
        />
      </div>
    </div>

    <Button
      @click.prevent="onSubmit"
      class="auth-block__button"
      label="Sign Up"
    />

    <p class="auth-block__transfer">
      Already have an account?
      <RouterLink to="/authorization/signin">Sign In</RouterLink>
    </p>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

// * Sign up type
import { SignUpParams } from "@/services/Auth/auth.types";

// Spinner composables
import { useSpinner } from "@/composables/useSpinner";

// * Services
import { firebaseSignUp } from "@/services/Auth/auth.service";

// * Shared components
import Button from "@/components/ui/Button/Button.vue";

// * Inputs model
const formData = ref<SignUpParams>({
  firstname: "",
  lastname: "",
  password: "",

  email: "",
  username: "",
});

const { showSpinner, hideSpinner } = useSpinner();

const onSubmit = async () => {
  showSpinner();
  await firebaseSignUp(formData.value);
  hideSpinner();
};
</script>

<style lang="sass" scoped>
@import "./assets/styles"
</style>
