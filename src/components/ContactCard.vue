<template>
  <div class="contact-card">

    <h2 class="contact-card__title">Контакт</h2>

    <div class="contact-card__box">



      <ContactInput
        label="Имя"
        error="short"
        type="text"
        value="Двери Вадим"
        placeholder="Например “Андрей...”"
        class="contact-card__item" />



      <ContactInput
        label="Телефон"
        type="tel"
        placeholder="+7(___)___-__-__"
        class="contact-card__item" />



      <ContactInput
        label="E-mail"
        type="email"
        placeholder="Например «pochta@domain.ru»..."
        value="nelfeelingood2@gmail.com"
        class="contact-card__item" />


        <!--  error="empty" -->
      <ContactInput
        label="Категория"
        placeholder="Не выбрано"
        value=""
        class="contact-card__item">

        <FilterType class="contact-card__category" notBold noBorder />

      </ContactInput>




      <ContactInput
        label="Создан"
        type="text"
        readonly
        noBorder
        placeholder="Например «pochta@domain.ru»..."
        value="23.09.23"
        class="contact-card__item" />



    </div>

    <div class="contact-card__btns _576-no-gap _576-jc-fs">
      <button class="contact-card__btn _accent _576-ml-as-name-width" aria-label="Сохранить контакт">
        <IconSave class="contact-card__btn-icon" />
        <span>СОХРАНИТЬ</span>
      </button>

      <button class="contact-card__link _576" aria-label="Удалить контакт">
        <IconTrash class="contact-card__link-icon" />
        <span>Удалить контакт</span>
      </button>

    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue';

import FilterType from "../components/FilterType.vue";
import ContactInput from "../components/ContactInput.vue";
import IconSave from "../components/icons/IconSave.vue";
import IconTrash from "../components/icons/IconTrash.vue";

export default defineComponent({
  name: "ContactCard",

  components: {
    FilterType,
    IconSave,
    IconTrash,
    ContactInput,

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

  &__item {
  }

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
    }

    &-icon {
      display: inline-flex;

      width: 1rem;
      height: 1rem;
      margin-right: 0.25rem;
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
}</style>