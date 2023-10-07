<template>
  <div class="avatar">{{ name.slice(0, 1) }}</div>
</template>

<style lang="scss" scoped>
  .avatar {
    width: 100%;
    height: 100%;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background: var(--c-accent);

    font-style: normal;
    font-weight: 700;
    color: var(--c-gray);
  }
</style>

<script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: "AvatarContact",

    props: {
      name: {
        type: String,
      }
    }
  })
</script>