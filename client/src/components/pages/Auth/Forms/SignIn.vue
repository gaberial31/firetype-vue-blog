<template>
  <form class="auth-block">
    <h2>Sign In to <span>FireType!</span></h2>

    <img class="auth-block__logo" src="@/assets/images/handsup-logo.svg" />

    <div class="auth-block__inputs">
      <div class="auth-block__inputs__item">
        <FontAwesomeIcon :icon="['fas', 'envelope']" />
        <input
          name="email"
          type="email"
          placeholder="Enter your Email"
          v-model.trim="formData.email"
        />
      </div>

      <div class="auth-block__inputs__item">
        <FontAwesomeIcon :icon="['fas', 'lock']" />
        <input
          name="password"
          type="password"
          placeholder="Enter your Password"
          v-model.trim="formData.password"
        />
      </div>
    </div>

    <RouterLink
      to="/authorization/reset-password"
      class="auth-block__forgot-password"
    >
      Forgot your Password?
    </RouterLink>

    <Button
      type="submit"
      class="auth-block__button"
      label="Sign In"
      @click.prevent="onSubmit"
    />

    <p class="auth-block__transfer">
      Don't have an account?
      <RouterLink to="/authorization/signup">Sign Up</RouterLink>
    </p>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";

// * Sign in type
import { SignInParams } from "@/services/Auth/auth.types";

// Spinner composables
import { useSpinner } from "@/composables/useSpinner";

// * Services
import { firebaseSignIn } from "@/services/Auth/auth.service";

// * Shared components
import Button from "@/components/ui/Button/Button.vue";

// * Inputs model
const formData = reactive<SignInParams>({
  email: "",
  password: "",
});

const { showSpinner, hideSpinner } = useSpinner();

const onSubmit = async () => {
  try {
    showSpinner();
    await firebaseSignIn(formData);
  } catch (e) {
    return e;
  } finally {
    hideSpinner();
  }
};
</script>

<style lang="sass" scoped>
@import "./assets/styles"
</style>
