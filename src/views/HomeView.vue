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

      <div class="contacts__item-name _2 _mobile _in-row">
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


    <div class="contacts__item" v-for="contact in filteredContactsByDateCreated" :key="contact.id">
      <div class="contacts__item-name _1">
        <div class="contacts__item-avatar">{{ contact.name.slice(0, 1) }}</div>
        {{ contact.name }}
      </div>

      <div class="contacts__item-name _2 _mobile">
        <span>{{ contact.tel }}</span>
        <span>{{ contact.email }}</span>
      </div>

      <div class="contacts__item-name _2 _pc">
        {{ contact.tel }}
      </div>

      <div class="contacts__item-name _2-1 _pc">
        {{ contact.email }}
      </div>

      <div class="contacts__item-name _3">{{ contact.dateCreated }}</div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import BtnAddContact from "../components/BtnAddContact.vue";
import FilterType from "../components/FilterType.vue";
import IconContact from "../components/icons/IconContact.vue";
import { defineComponent } from 'vue';

import { mapWritableState } from 'pinia';
import { useContactsStore } from '../stores/contacts';

export default defineComponent({
  name: "HomeView",

  components: {
    HeaderComponent,
    IconContact,
    FilterType,
    BtnAddContact,
  },

  computed: {
    ...mapWritableState(useContactsStore, ['contacts']),

    filteredContactsByDateCreated() {
      return this.contacts.sort((a, b) => {
        if (a.dateCreated > b.dateCreated) return 1
        return -1 
      })
    }
  },

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
    height: 3.5rem;

    display: flex;
    justify-content: space-between;

    gap: 0.25rem;

    color: var(--c-gray);
    letter-spacing: -0.02rem;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 112%;

    &:not(:last-of-type) {
      border-bottom: 0.0625rem solid #EAF2FD;
    }

    @media screen and (min-width: 576px) {
      gap: 0.5rem;
    }

    &._header {
      height: 1.5rem;

      font-size: 0.625rem;
      line-height: 1rem;
      border-bottom: unset;
      color: #B5B5B5;
    }

    &-avatar {
      display: none;
      @media screen and (min-width: 576px) {
        width: 1.5rem;
        height: 1.5rem;

        display: inline-flex;
        justify-content: center;
        align-items: center;

        border-radius: 3.5rem;
background: #FFC700;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 700;
        color: var(--c-gray);

        margin-right: 0.5rem;
      }
    }

    &-name {
      display: inline-flex;
      align-items: center;
      width: 100%;

      @media screen and (min-width: 992px) {
        width: auto;
      }


      &._1 {
        min-width: 8.2375rem;

        @media screen and (min-width: 576px) {
          min-width: 13rem;
        }
        @media screen and (min-width: 768px) {
          min-width: 15rem;
        }
        @media screen and (min-width: 992px) {
          min-width: 18.5rem;
        }
      }
      &._2 {
        min-width: 8.9375rem;

        @media screen and (min-width: 576px) {
          min-width: 13.5rem;
        }

        &._mobile {
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;

          gap: 0.12rem;

          @media screen and (min-width: 768px) {
            display: none;
          }

          &._in-row {
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
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

        font-size: 0.625rem;

        justify-content: flex-end;
        @media screen and (min-width: 576px) {
          min-width: 7rem;

          font-size: 0.75rem;

        }
      }
    }


  }
}
</style>