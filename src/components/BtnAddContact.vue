<template>

  <button class="btn-add" aria-label="Добавить новый контакт">
    <IconPlus class="btn-add__icon" />

    <span class="btn-add__name">
      Добавить 
    </span>
  </button>

</template>

<script>
import { defineComponent } from 'vue';
import IconPlus from '../components/icons/IconPlus.vue'

export default defineComponent({
  name: "BtnAddContact",

  components: {
    IconPlus,
  }
})
</script>

<style lang="scss" scoped>
  .btn-add {
    height: 2rem;
    width: 7.3125rem;


    display: flex;

    padding: 0.5rem 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 1.75rem;
    border: 1px solid var(--c-blue);

    transition: var(--duration);

    &__icon {
      width: 1rem;
      height: 1rem;

      flex-shrink: 0;

      margin-right: 0.25rem;

      fill: var(--c-blue);

      transition: var(--duration);
    }

    &__name {
      color: var(--c-blue);
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1rem;
      text-transform: uppercase;

      transition: var(--duration);
    }

    &:hover {
      background-color: var(--c-blue);
    }
    &:hover & {
      &__name {
        color: white;
      }
      &__icon {
        fill: white;
      }
    }
  }
</style>