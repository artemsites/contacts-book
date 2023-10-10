import { defineStore } from 'pinia';

import { useContactsStore } from './contacts';

export const useFilterStore = defineStore('filter', {
  
  state: () => {
    return {
      filterList: [
        {
          id: 0,
          name: 'ВСЕ',
          active: true,
        },
        ...useContactsStore().contactsTypes,
      ],
    }
  },

})