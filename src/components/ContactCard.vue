<template>
  <div class="contact-card">

    <h2 class="contact-card__title">Контакт</h2>

    <div class="contact-card__box">

      <label class="contact-card__item">
        <div class="contact-card__item-name">Имя</div>
        <input type="text" class="contact-card__item-input" value="Двери Вадим">
      </label>

      <label class="contact-card__item">
        <div class="contact-card__item-name">Телефон</div>
        <input type="tel" class="contact-card__item-input" value="+7(987)654-78-11">
      </label>

      <label class="contact-card__item">
        <div class="contact-card__item-name">E-mail</div>
        <input type="email" class="contact-card__item-input" value="nelfeelingood2@gmail.com">
      </label>

      <label class="contact-card__item">
        <div class="contact-card__item-name">Категория</div>

        <FilterType notBold />

      </label>

      <label class="contact-card__item">
        <div class="contact-card__item-name">Создан</div>

        <input type="text" class="contact-card__item-input _no-border" value="23.09.23" readonly>
      </label>

    </div>

    <div class="contact-card__btns">
      <button class="contact-card__btn _accent" aria-label="Сохранить контакт">
        <IconSave class="contact-card__btn-icon" />
        <span>СОХРАНИТЬ</span>
      </button>

      <button class="contact-card__link" aria-label="Удалить контакт">
        <IconTrash class="contact-card__link-icon" />
        <span>Удалить контакт</span>
      </button>
    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue';

import FilterType from "../components/FilterType.vue";
import IconSave from "../components/icons/IconSave.vue";
import IconTrash from "../components/icons/IconTrash.vue";

export default defineComponent({
  name: "ContactCard",

  components: {
    FilterType,
    IconSave,
    IconTrash,

  }
})
</script>

<style lang="scss" scoped>
.contact-card {
  width: 100%;



  background: #FFF;
  padding: 2rem 1.25rem 3rem 1.25rem;
  box-shadow: 0px 0px 6px 0px rgba(148, 181, 225, 0.35);

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
    display: flex;
    align-items: center;

    &-name {
      width: 4.5rem;

      flex-shrink: 0;

      color: var(--c-gray);
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: 120%;

      margin-right: 0.75rem;
    }

    &-input {
      width: 100%;
      height: 2.5rem;

      padding: 0.5rem;
      border-radius: 0.25rem;
      border: 1px solid #DDD;
      background: #FFF;

      color: var(--c-gray);
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;

      &._no-border {
        border: none;
      }
    }
  }

  &__btns {
    display: flex;
    justify-content: center;

    gap: 1.5rem;
    
    margin-top: 2rem;
  }

  &__btn {
    height: 2rem;

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
    &-icon {
      width: 0.75rem;
height: 0.75rem;

margin-right: 0.12rem;
    }
  }
}</style>