<template>
  <form class="auth-block">
    <Modal
      v-model="modal"
      title="Reset password"
      content="An email has been sent to your email to reset your password"
    />

    <h2>Reset <span>Password</span></h2>

    <img class="auth-block__logo" src="@/assets/images/handsup-logo.svg" />

    <div class="auth-block__inputs">
      <div class="auth-block__inputs__item">
        <FontAwesomeIcon :icon="['fas', 'lock']" />
        <input
          type="email"
          placeholder="Enter your Email"
          v-model.trim="formData.email"
        />
      </div>
    </div>

    <Button
      @click.prevent="onSubmit"
      class="auth-block__button"
      label="Reset password"
    />

    <p class="auth-block__transfer">
      Remember your password?
      <RouterLink to="/authorization/signin">Sign In</RouterLink>
    </p>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

// * Sign in type
import { ResetPasswordParams } from "@/services/Auth/auth.types";

// Spinner composables
import { useSpinner } from "@/composables/useSpinner";

// * Services
import { firebaseResetPassword } from "@/services/Auth/auth.service";

// * Shared components
import Modal from "@/components/ui/Modal/Modal.vue";
import Button from "@/components/ui/Button/Button.vue";

// * Modal model
const modal = ref(false);

// * Inputs model
const formData = ref<ResetPasswordParams>({
  email: "",
});

const { showSpinner, hideSpinner } = useSpinner();

const onSubmit = async () => {
  try {
    showSpinner();
    await firebaseResetPassword(formData.value);
    modal.value = true;
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
