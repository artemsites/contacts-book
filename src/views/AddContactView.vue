<template>

  <div class="contact">

    <HeaderComponent class="contact__header">
      <IconAddUser class="contact__header-icon" />
      Добавить контакт
      

      <RouterLink :to="{ name: 'home' }" class="contact__close">
        <IconX />
      </RouterLink>
    </HeaderComponent>

    <div class="container">
        <ContactCard title="Новый контакт" :contactData="contactData" noDateCreated noBtnDelete class="contact__card"/>
    </div>

  </div>

</template>

<script>
import { defineComponent } from 'vue';
import HeaderComponent from "../components/HeaderComponent.vue";
import ContactCard from "../components/ContactCard.vue";
import IconX from "../components/icons/IconX.vue";
import IconAddUser from "../components/icons/IconAddUser.vue";

import { useContactsStore } from '@/stores/contacts';
import { mapWritableState } from 'pinia';

import { RouterLink } from 'vue-router';



export default defineComponent({
  name: "ContactView",

  components: {
    HeaderComponent,
    IconX,
    ContactCard,
    IconAddUser,
  },

  computed: {
    // ...mapWritableState(useContactsStore, ['contacts']),

    contactData() {
      return {
        name: '',
        typeId: null,
      }
      // return this.contacts.find(contact=>contact.id===this.contactId)
    },

    contactId() {
      return Number(this.$route.params.id)
    },
  },

  mounted() {
  },
})
</script>

<style lang="scss" scoped>
@import '../assets/contact';
</style>


