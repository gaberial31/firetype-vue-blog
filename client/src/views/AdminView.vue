<template>
  <div class="admin">
    <Modal v-model="modal" title="New Admin" :content="modalMessage" />
    <div class="container">
      <h2>Add new admin <FontAwesomeIcon :icon="['fas', 'crown']" /></h2>

      <div class="admin__content">
        <div class="admin__content__input">
          <label for="email">Enter New Admin Email:</label>
          <FontAwesomeIcon :icon="['fas', 'envelope']" />
          <input
            v-model="email"
            type="text"
            id="email"
            placeholder="example@example.ru"
          />
        </div>

        <Button label="Add Admin" @click="addAdmin" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// * User services
import { firebaseAddUserAdminRole } from "@/services/User/user.service";

// * Shared components
import Modal from "@/components/ui/Modal/Modal.vue";
import Button from "@/components/ui/Button/Button.vue";

// * Models
const modal = ref(false);
const modalMessage = ref("");

const email = ref("");

const addAdmin = async () => {
  const message = await firebaseAddUserAdminRole(email.value);
  showModal(message);
};

const showModal = (message: string) => {
  modal.value = true;
  modalMessage.value = message;
};
</script>

<style lang="sass" scoped>
@import "./styles/AdminView"
</style>
