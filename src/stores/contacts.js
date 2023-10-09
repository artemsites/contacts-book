import { defineStore } from 'pinia';

export const useContactsStore = defineStore('contacts', {
  
  state: () => {
    return {

      contactsTypes: [
        {
          id: 1,
          name: 'Коллеги',
        },
        {
          id: 2,
          name: 'Родственники',
        },
      ],

      contacts: [
        {
          id: 1,
          name: 'Айтишник Данила',
          tel: '+7(987)654-78-09',
          email: 'nelfeelingood@gmail.com',
          typeId: 1,
          dateCreated: '22.09.23',
        },
        {
          id: 2,
          name: 'Арендодатель Виктория',
          tel: '+7(987)654-78-10',
          email: 'nelfeelingood1@gmail.com',
          typeId: 1,
          dateCreated: '22.09.23',
        },
        {
          id: 3,
          name: 'Двери Вадим',
          tel: '+7(987)654-78-11',
          email: 'nelfeelingood2@gmail.com',
          typeId: 1,
          dateCreated: '23.09.23',
        },
        {
          id: 4,
          name: 'Доставка Андрей Стоянов',
          tel: '+7(987)654-78-12',
          email: 'nelfeelingood3@gmail.com',
          typeId: 1,
          dateCreated: '24.09.23',
        },
        {
          id: 5,
          name: 'Сын',
          tel: '+7(987)654-78-19',
          email: 'nelfeelingood4@gmail.com',
          typeId: 2,
          dateCreated: '1.09.15',
        },
      ],
    }
  },

});