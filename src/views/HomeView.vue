<template>
  <HeaderComponent>
    <IconContact class="contacts__icon-contact" />
    КНИГА КОНТАКТОВ
  </HeaderComponent>

  <div class="contacts__btns">

    <div class="contacts__btns-wrapper container">
      <FilterType />

      <BtnAddContact />
    </div>

  </div>

  <div class="contacts__list container">
    <div class="contacts__item _header">
      <div class="contacts__item-name _1">КОНТАКТ</div>

      <div class="contacts__item-name _2 _mobile">
        <span>ТЕЛЕФОН</span>
        <span>&nbsp;/&nbsp;</span>
        <span>E-MAIL</span>
      </div>

      <div class="contacts__item-name _2 _pc">
        ТЕЛЕФОН
      </div>

      <div class="contacts__item-name _2-1 _pc">
        E-MAIL
      </div>

      <div class="contacts__item-name _3">СОЗДАН</div>
    </div>
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
.contacts {

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

  &__btns {
    height: 3rem;

    border: 1px solid #EAF2FD;
    background: #F9FCFF;

    &-wrapper {
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__list {
    padding-top: 0.75rem;
  }

  &__item {
    display: flex;
    justify-content: space-between;

    color: var(--c-gray);
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;

    &._header {
      height: 1.5rem;

      color: #B5B5B5;
    }

    &-name {
      display: inline-flex;
      align-items: center;
      width: 100%;
      @media screen and (min-width: 992px) {
        width: auto;
      }


      &._1,
      &._2 {
        min-width: 8.9375rem;
      }
      &._1 {
        @media screen and (min-width: 576px) {
          min-width: 11.5rem;
        }
        @media screen and (min-width: 768px) {
          min-width: 15rem;
        }
        @media screen and (min-width: 992px) {
          min-width: 18.5rem;
        }
      }
      &._2 {
        @media screen and (min-width: 576px) {
          min-width: 15rem;
        }
        &._mobile {
          @media screen and (min-width: 768px) {
            display: none;
          }
        }
        &._pc {
          display: none;
          @media screen and (min-width: 768px) {
            min-width: 7rem;

            display: inline-flex;
          }
        }
      }
      &._2-1 {
        &._pc {
          display: none;

          @media screen and (min-width: 768px) {
            min-width: 13rem;

            display: inline-flex;
          }
        }
      }
      &._3 {
        min-width: 3.625rem;

        justify-content: flex-end;
        @media screen and (min-width: 576px) {
          min-width: 7rem;
        }
      }

      // &-inner {
      //   &._1 {
      //     @media screen and (min-width: 768px) {
      //       min-width: 7rem;
      //     }
      //   }
      //   &._2 {
      //     @media screen and (min-width: 768px) {
      //       min-width: 13rem;
      //     }
      //   }
      // }
      // &-separator {
      //   @media screen and (min-width: 768px) {
      //     display: none;
      //   }
      // }
    }


  }
}
</style>