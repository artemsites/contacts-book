import { defineStore } from 'pinia';

export const useFilter = defineStore('filter', {
  
  state: () => {
    return {
      filterList: [
        {
          id: 1,
          name: 'ВСЕ',

          active: true,
        },
        {
          id: 2,
          name: 'РОДСТВЕННИКИ',

        },
        {
          id: 3,
          name: 'КОЛЛЕГИ',

        },
      ],
    }
  },

})