<template>
  <div class="profile">
    <Modal
      v-model="modal"
      title="Updating data"
      content="Your data has been successfully updated. Your new data will also be displayed in all your posts"
    />
    <div class="container">
      <h2>Account settings</h2>

      <div class="profile__info">
        <div class="profile__info__initials">
          <div class="profile__info__initials__avatar">
            {{ userInitials }}
          </div>

          <p class="name">{{ user?.firstname }} {{ user?.lastname }}</p>
          <p class="email">@{{ user?.username }}</p>
        </div>

        <div class="profile__info__admin-badge"></div>

        <div class="profile__info__inputs">
          <TextInput
            label="Your First Name:"
            :icon="['fas', 'user']"
            name="firstname"
            :value="user?.firstname"
          />

          <TextInput
            label="Your Last Name:"
            :icon="['fas', 'user']"
            name="lastname"
            :value="user?.lastname"
          />

          <TextInput
            label="Your Username:"
            :icon="['fas', 'user']"
            name="username"
            :value="user?.username"
          />

          <TextInput
            label="Your Email:"
            :icon="['fas', 'envelope']"
            name="email"
            :value="user?.email"
            :disabled="1"
          />
        </div>

        <Button @click="updateUser" label="Save Changes" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// * Shared components
import Modal from "@/components/ui/Modal/Modal.vue";
import Button from "@/components/ui/Button/Button.vue";

// * Profile input
import TextInput from "@/components/pages/Profile/TextInput/TextInput.vue";

// * Services
import { firebaseSetUser } from "@/services/User/user.service";

// * User interface
import { IUser } from "@/types/entities/user.interface";

// * composables
import { useUser } from "@/store/User/composables";
import { useSpinner } from "@/composables/useSpinner";

// * User data actions
const modal = ref(false);

const { user, userInitials } = useUser();
const { showSpinner, hideSpinner } = useSpinner();

const updateUser = async () => {
  try {
    showSpinner();

    await firebaseSetUser({ ...user.value } as IUser);

    modal.value = true;
  } catch (e) {
    return e;
  } finally {
    hideSpinner();
  }
};
</script>

<style lang="sass" scoped>
@import "./styles/ProfileView"
</style>
