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
      <ContactCard :contactData="contactData" class="contact__card"/>
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
    ...mapWritableState(useContactsStore, ['contacts']),

    contactData() {
      return this.contacts.find(contact=>contact.id===this.contactId)
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
.contact {
  min-height: 100vh;

  background: #F9FCFF;
  
  &__header {
    justify-content: center;

    margin-bottom: 1.5rem;
  }

  &__avatar {
    width: 1.25rem;
    height: 1.25rem;

    font-size: 0.625rem;
    line-height: 0;

    margin-right: 0.5rem;

    @media screen and (min-width: 992px) {
      width: 1.5rem;
      height: 1.5rem;

      font-size: 0.75rem;
    }
  }

  &__close {
    width: 1.5rem;
    height: 1.5rem;

    position: absolute;
    right: 0.75rem;
    @media screen and (min-width: 992px) {
      width: 2rem;
      height: 2rem;
    }
  }

  &__card {
    
  }
}
</style>


