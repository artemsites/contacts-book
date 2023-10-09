<script>
import { RouterLink, RouterView } from 'vue-router';

  import { defineComponent } from 'vue';

  import { mapWritableState } from 'pinia';
  import { useContactsStore } from '@/stores/contacts';

  export default defineComponent({
    name: "App",

    mounted() {
      this.saveContactsToStore(localStorage.getItem('contacts'))
    },

    methods: {
      saveContactsToStore(contacts) {
        console.log(JSON.parse(contacts))
        this.contacts = JSON.parse(contacts);
      }
    },

    computed: {
      ...mapWritableState(useContactsStore, 'contacts')
    }
  })

</script>

<template>
  <RouterView />
</template>
