import { defineStore } from 'pinia';

export const useContactsStore = defineStore('contacts', {
  
  state: () => {
    return {
      contacts: [
        {
          id: 1,
          name: 'Айтишник Данила',
          tel: '+7(987)654-78-09',
          email: 'nelfeelingood@gmail.com',
          dateCreated: '22.09.23',
        },
        {
          id: 2,
          name: 'Арендодатель Виктория',
          tel: '+7(987)654-78-10',
          email: 'nelfeelingood1@gmail.com',
          dateCreated: '22.09.23',
        },
        {
          id: 3,
          name: 'Двери Вадим',
          tel: '+7(987)654-78-11',
          email: 'nelfeelingood2@gmail.com',
          dateCreated: '23.09.23',
        },
        {
          id: 4,
          name: 'Доставка Андрей Стоянов',
          tel: '+7(987)654-78-12',
          email: 'nelfeelingood3@gmail.com',
          dateCreated: '24.09.23',
        },
      ],
    }
  },

});