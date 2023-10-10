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
          tel: '+7 (987) 654-78-09',
          email: 'nelfeelingood@gmail.com',
          typeId: 1,
          dateCreated: '22.09.23',
        },
        {
          id: 2,
          name: 'Арендодатель Виктория',
          tel: '+7 (987) 654-78-10',
          email: 'nelfeelingood1@gmail.com',
          typeId: 1,
          dateCreated: '22.09.23',
        },
        {
          id: 3,
          name: 'Двери Вадим',
          tel: '+7 (987) 654-78-11',
          email: 'nelfeelingood2@gmail.com',
          typeId: 1,
          dateCreated: '23.09.23',
        },
        {
          id: 4,
          name: 'Доставка Андрей Стоянов',
          tel: '+7 (987) 654-78-12',
          email: 'nelfeelingood3@gmail.com',
          typeId: 1,
          dateCreated: '24.09.23',
        },
        {
          id: 5,
          name: 'Сын',
          tel: '+7 (987) 654-78-19',
          email: 'nelfeelingood4@gmail.com',
          typeId: 2,
          dateCreated: '1.09.15',
        },
      ],
    }
  },

  actions: {
    saveContact(id, newData, callback, newContact=false) {
      if (!newContact) {
        let targetContact = this.contacts.find(contact=>contact.id===id);

        if (newData.name) targetContact.name = newData.name;
        if (newData.tel) targetContact.tel = newData.tel;
        if (newData.email) targetContact.email = newData.email;
        if (newData.typeId) targetContact.typeId = newData.typeId;
      }
      else {
        let newContact = {...newData};
        // newContact.id = 
        let curDate = new Date()
        newContact.dateCreated = curDate.getDate() + '.' + ((curDate.getMonth())+1) + '.'+ curDate.getFullYear()

        newContact.id = (this.contacts[this.contacts.length-1].id)+1

        this.contacts.push(newContact)
      }

      setTimeout(() => {
        this.saveContactsToLocalStorage();
        callback()
      }, 500);
    },

    removeContact(id, callback=null) {
      let targetContactIndex = this.contacts.findIndex(contact=>contact.id === id);

      this.contacts.splice(targetContactIndex, 1);

      setTimeout(() => {
        this.saveContactsToLocalStorage();
        if (callback) callback();
      }, 500);    
    },

    saveContactsToLocalStorage() {
      localStorage.setItem('contacts', JSON.stringify(this.contacts))
    },
    saveContactsFromLocalStorageToContactsState(contacts) {
      this.contacts = JSON.parse(contacts);
    }
  }

});
