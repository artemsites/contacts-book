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
      <ContactCard notificationName="Контакт успешно создан" title="Новый контакт" newContact :contactData="contactData" noDateCreated noBtnDelete class="contact__card"/>
    </div>

  </div>

</template>

<script>
import { defineComponent } from 'vue';
import HeaderComponent from "../components/HeaderComponent.vue";
import ContactCard from "../components/ContactCard.vue";
import IconX from "../components/icons/IconX.vue";
import IconAddUser from "../components/icons/IconAddUser.vue";



export default defineComponent({
  name: "ContactView",

  components: {
    HeaderComponent,
    IconX,
    ContactCard,
    IconAddUser,
  },

  data() {
    return {
      // Передаём пустой контакт именно с null чтобы логика работы с новым контактом работала при валидации и сохранении и т.д.
      contactData: null,
    }
  },

  computed: {
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


