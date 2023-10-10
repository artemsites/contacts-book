<template>

  <div class="contact">

    <HeaderComponent class="contact__header">
      <AvatarContact class="contact__avatar" :name="contactData.name" />
      {{ contactData.name }}

      <RouterLink :to="{ name: 'home' }" class="contact__close">
        <IconX />
      </RouterLink>
    </HeaderComponent>

    <div class="container">
        <ContactCard :contactData="contactData" noDateCreated class="contact__card"/>
    </div>

  </div>

</template>

<script>
import { defineComponent } from 'vue';
import HeaderComponent from "../components/HeaderComponent.vue";
import ContactCard from "../components/ContactCard.vue";
import AvatarContact from "../components/AvatarContact.vue";
import IconX from "../components/icons/IconX.vue";

import { useContactsStore } from '@/stores/contacts';
import { mapWritableState } from 'pinia';

import { RouterLink } from 'vue-router';



export default defineComponent({
  name: "ContactView",

  components: {
    HeaderComponent,
    AvatarContact,
    IconX,
    ContactCard,
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


