<template>

  <header class="header container _mw-u">
    
    <slot></slot>
    
  </header>
</template>

<script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: "HeaderComponent",
  })
</script>

<style scoped lang="scss">
  .header {
    height: 2.5rem;

    display: flex;
    align-items: center;

    font-size: 0.875rem;
    background: var(--c-dark);
    color: var(--c-light);

    @media screen and (min-width: 992px) {
      height: 3rem;

      font-size: 1.125rem;
    }
  }
</style>