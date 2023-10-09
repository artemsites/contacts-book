<template> 
  <div class="notification" :class="{'_active': show}"> 
    <IconVO class="notification__icon" /> 
    {{ name }} 
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  import IconVO from "./icons/IconVO.vue";

  export default defineComponent({
    name: "ContactNotification",

    data() {
      return {
      }
    },

    components: {
      IconVO
    },

    props: {
      name: String,
      show: Boolean,
    },

    watch: {
    }
  })
</script>

<style lang="scss" scoped>
  .notification {
    height: 2.75rem;

    display: inline-flex;
    align-items: center;
    
    border-radius: 2.5rem;
    background: var(--c-gray);
    padding: 0.75rem 1rem;
    box-shadow: 0px 0px 20px 0px rgba(176, 197, 222, 0.50);
    text-wrap: nowrap;

    color: #FFF;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;

    opacity: 0;
    pointer-events: none;

    transition: var(--duration);
    
    transform: translateX(-50%) translateY(-2rem);
    position: absolute;
    top: 4rem;
    left: 50%;
    z-index: 105;

    @media screen and (min-width: 768px) {
      border-radius: 0.25rem;
      background: #FFF;
      box-shadow: 0px 0px 16px 0px rgba(176, 197, 222, 0.50);
      padding: 0.75rem 0.75rem 0.75rem 0.5rem;
      color: var(--c-gray);

      left: 2rem;
      bottom: 3rem;
      top: unset;
      transform: translateY(2rem);
    }

    &._active {
      opacity: 1;
      pointer-events: initial;
      transform: translateX(-50%) translateY(0);
      @media screen and (min-width: 768px) {
        transform: translateY(0);
      }
    }

    &__icon {
      width: 1rem;
      height: 1rem;

      margin-right: 0.25rem;
    }
  }
</style>