<template>
  <div>

    <ContactNotification :name="notificationName" :show="notificationShow" />

    <div class="contact-card">

      <h2 class="contact-card__title">Контакт</h2>






      <div class="contact-card__box">



        <ContactInput
          @changedInput="changedInputName($event)"
          label="Имя"
          name="name"
          :error="validatedErrors.name"
          type="text"
          :value="nameValue"
          placeholder="Например “Андрей...”"
          class="contact-card__item" />



       <ContactInput
         @changedInput="changedInputTel($event)"
         label="Телефон"
         :error="validatedErrors.tel"
         type="tel"
         :value="telValue"
         placeholder="+7 (___) ___-__-__"
         class="contact-card__item" />



        <ContactInput label="E-mail" error="" type="email" placeholder="Например «pochta@domain.ru»..."
          :value="contactData.email" class="contact-card__item" />


        <!--  
        error="empty" 
        placeholder="Не выбрано"
        :value="contactData.category"
      -->
        <ContactInput label="Категория" error="" class="contact-card__item">

          <ContactType @saveContactType="writeContactTypeToTempChanges($event)" error="" :typeId="contactData.typeId"
            class="contact-card__category" />

        </ContactInput>




        <ContactInput label="Создан" type="text" readonly noBorder :value="contactData.dateCreated"
          class="contact-card__item" />



      </div>

      <div class="contact-card__btns _576-no-gap _576-jc-fs">

        <button class="contact-card__btn _accent _576-ml-as-name-width" aria-label="Сохранить контакт"
          @click="validateAndSaveContactToStore">

          <IconSave class="contact-card__btn-icon" v-if="!saving" />
          <IconSaving class="contact-card__btn-icon" v-else :class="{ '_rotating': saving }" />
          <span>СОХРАНИТЬ</span>
        </button>

        <button class="contact-card__link _576" aria-label="Удалить контакт">
          <IconTrash class="contact-card__link-icon" />
          <span>Удалить контакт</span>
        </button>

      </div>

    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue';

import ContactType from "../components/ContactType.vue";
import ContactInput from "../components/ContactInput.vue";
import ContactNotification from "../components/ContactNotification.vue";
import IconSave from "../components/icons/IconSave.vue";
import IconSaving from "../components/icons/IconSaving.vue";
import IconTrash from "../components/icons/IconTrash.vue";


import { mapActions } from 'pinia';
import { useContactsStore } from '@/stores/contacts';

import { removeSpaces } from '../helpers/removeSpaces'

export default defineComponent({
  name: "ContactCard",

  components: {
    ContactType,
    IconSave,
    IconSaving,
    IconTrash,
    ContactInput,
    ContactNotification,
  },

  data() {
    return {
      saving: false,

      tempChanges: {
        // name,
        // tel,
        // typeId,
      },

      notificationShow: false,
      notificationName: 'Контакт успешно изменён',

      errors: {
        name: {
          short: 'Слишком короткое имя',
          empty: 'Поле не может быть пустым',
        },
        tel: {
          short: 'Телефон не дописан',
          empty: 'Поле не может быть пустым',
        }
      },

      validatedErrors: {
        name: null,
      },

    }
  },

  props: {
    contactData: Object,
  },

  computed: {
    nameValue() {
      if (typeof this.tempChanges.name === 'string') return this.tempChanges.name
      return this.contactData.name
    },
    telValue() {
      if (typeof this.tempChanges.tel === 'string') return this.tempChanges.tel
      return this.contactData.tel
    },
  },

  methods: {

    ...mapActions(useContactsStore, ['saveContact']),

    writeContactTypeToTempChanges(id) {
      this.tempChanges.typeId = id;
    },

    validateAndSaveContactToStore() {
      this.saving = true;


      // Валидация
      // name
      if (typeof this.tempChanges.name === 'string') {
        let nameLength = removeSpaces(this.tempChanges.name).length;

        if (nameLength >= 1 && nameLength < 3) {
          this.validatedErrors.name = this.errors.name.short
        }
        else if (nameLength === 0) {
          this.validatedErrors.name = this.errors.name.empty
        }
        else {
          this.validatedErrors.name = null
        }
      }

      // tel
      console.log('this.tempChanges.tel')
      console.log(this.tempChanges.tel)
      // console.log(this.tempChanges.tel===undefined)

      if (this.tempChanges.tel === '') {
        this.validatedErrors.tel = this.errors.tel.empty
      } 
      else if (this.tempChanges.tel.length < 18) {
        this.validatedErrors.tel = this.errors.tel.short
      }
      else {
        this.validatedErrors.tel = null
      }

      // После всех валидаций
      const foundErrors = Object.values(this.validatedErrors).filter(error => error !== null);

      if (foundErrors.length > 0) {
        // Валидация не прошла
        this.saving = false;
      }
      else {
        // Сохраняем
        this.saveContact(this.contactData.id, this.tempChanges, this.savingCompleteAndShowNotification)
      }

    },

    changedInputName(name) {
      // console.log('name')
      // console.log(name)
      this.tempChanges.name = name
    },

    changedInputTel(tel) {
      // console.log('tel')
      // console.log(tel)
      this.tempChanges.tel = tel
    },

    savingCompleteAndShowNotification() {
      this.saving = false;

      this.notificationShow = true

      setTimeout(() => {
        this.notificationShow = false
      }, 3000);
    }
  },

  watch: {
    contacts: {
      handler(newState) {
        console.log('newState')
        console.log(newState)
      },
      deep: true,
    }
  }
})
</script>

<style lang="scss" scoped>
.contact-card {
  width: 100%;

  background: #FFF;
  padding: 2rem 1.25rem 3rem 1.25rem;
  box-shadow: 0px 0px 6px 0px rgba(148, 181, 225, 0.35);

  margin: auto;
  position: relative;

  @media screen and (min-width: 576px) {
    max-width: 44rem;

    padding: 2rem 3rem 3rem 3rem;
  }

  @media screen and (min-width: 768px) {
    padding: 3rem 4rem 4rem 4rem;
  }

  &__title {
    color: var(--c-gray);
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin-bottom: 1.5rem;
  }

  &__box {
    display: flex;
    flex-direction: column;

    gap: 1rem;
  }

  &__item {}

  &__category {
    height: 2.5rem;
    max-width: unset;
  }

  &__btns {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 1.5rem;

    margin-top: 2rem;
    position: relative;

    &._576-no-gap {
      @media screen and (min-width: 576px) {
        gap: unset;
      }
    }

    &._576-jc-fs {
      @media screen and (min-width: 576px) {
        justify-content: flex-start;
      }
    }
  }

  $wBtn: 7.75rem;

  &__btn {
    height: 2rem;

    width: $wBtn;

    display: inline-flex;
    align-items: center;

    color: var(--c-gray);
    text-align: center;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    // line-height: 120%;
    padding: 0.05rem 1rem;
    border-radius: 0.25rem;

    transition: var(--duration);

    &._576-ml-as-name-width {
      @media screen and (min-width: 576px) {
        margin-left: calc(8.5rem + 2rem);
      }
    }

    // &._768-translate-half-left {
    //   @media screen and (min-width: 768px) {
    //     transform: translateX(-50%);
    //   }
    // }

    &._accent {
      background-color: var(--c-accent);

      &:hover {
        background: #FFD84C;
      }

      &:active {
        background: #F3C41E;
      }
    }

    &-icon {
      display: inline-flex;

      width: 1rem;
      height: 1rem;
      margin-right: 0.25rem;

      &._rotating {
        animation-name: rotate;
        animation-duration: 0.5s;
        animation-iteration-count: infinite;
      }
    }
  }

  &__link {
    display: inline-flex;
    align-items: center;

    color: var(--c-blue);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    // top: 50%;
    // transform: translateY(-50%);

    &._576 {
      @media screen and (min-width: 576px) {
        margin-left: 1.5rem;

        // left: calc(50% + $wBtn / 2 + 1.5rem);
      }
    }

    // &._768-right-1-5 {
    //   @media screen and (min-width: 768px) {
    //     left: calc(50% + 1.5rem);
    //   }
    // }


    &-icon {
      width: 0.75rem;
      height: 0.75rem;

      margin-right: 0.12rem;
    }
  }
}
</style>