<template>
  <HeaderComponent>
    <IconContact class="home__icon-contact" />
    КНИГА КОНТАКТОВ
  </HeaderComponent>

  <div class="home__box container">

    <FilterType />

    <BtnAddContact/>

  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import BtnAddContact from "../components/BtnAddContact.vue";
import FilterType from "../components/FilterType.vue";
import IconContact from "../components/icons/IconContact.vue";
import { defineComponent } from 'vue';

export default defineComponent({
  name: "HomeView",

  components: {
    HeaderComponent,
    IconContact,
    FilterType,
    BtnAddContact,
  }
})
</script>

<style scoped lang="scss">
  .home {
    
    &__icon-contact {
      width: 1.9375rem;
      height: 1.5rem;

      margin-right: 0.25rem;  
      
      @media screen and (min-width: 576px) {
        margin-right: 0.5rem;  
      }
      @media screen and (min-width: 768px) {
        width: 1.96875rem;
      }
      @media screen and (min-width: 992px) {
        width: 2.625rem;
        height: 2rem;

        margin-right: 1rem;  
      }
    }

    &__box {
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      border: 1px solid #EAF2FD;
      background: #F9FCFF;
    }
  }
</style>