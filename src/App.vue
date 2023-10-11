<script>
import { RouterLink, RouterView } from 'vue-router';

import { defineComponent } from 'vue';

import { useContactsStore } from '@/stores/contacts';
import { mapWritableState, mapActions } from 'pinia';



export default defineComponent({
  name: "App",

  computed: {
    ...mapWritableState(useContactsStore, 'contacts')
  },

  mounted() {
    if (localStorage.getItem('contacts')) {
      this.saveContactsFromLocalStorageToContactsState( localStorage.getItem('contacts') );
    }
  },

  methods: {
    ...mapActions(useContactsStore, ['saveContactsFromLocalStorageToContactsState'])
  },

})

</script>

<template>
  <RouterView />
</template>