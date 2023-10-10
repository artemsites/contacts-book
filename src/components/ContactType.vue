<template>
  <div class="filter _no-border" ref="elContactsTypes" :class="{ '_error': error }">
    <button class="filter__toggle" aria-label="Открыть фильтр контактов" @click="toggleContactTypesOpened">

      <div class="filter__current _no-bold" :class="{'_gray': !isContactTypeSelected}">{{ contactTypeName }}</div>
      <IconTriangle class="filter__icon-t" :class="{ '_active': isContactTypesOpened }" />

    </button>

    <div class="filter__list" :class="{ '_active': isContactTypesOpened }">

      <button
        aria-label="Выбор фильтра контактов"
        class="filter__item"
        v-for="contactType in contactsTypes"
        :key="contactType.id"
        @click="selectContactType(contactType.id)"
        :class="{ '_active': isActiveType(contactType.id) }"
      >

        <span class="filter__item-name _no-bold">{{ contactType.name }}</span>

        <IconV v-if="isActiveType(contactType.id)" class="filter__icon-v" />

      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import IconTriangle from "../components/icons/IconTriangle.vue";
import IconV from "../components/icons/IconV.vue";

import { mapWritableState } from 'pinia'
import { useContactsStore } from '../stores/contacts'

import { onClickOutside } from '@vueuse/core'

export default defineComponent({
  name: "ContactType",

  components: {
    IconTriangle,
    IconV
  },

  props: {
    typeId: {
      type: Number,
    },
    error: {
      type: String,
    },
  },

  data() {
    return {
      isContactTypesOpened: false,
      tempChangedTypeId: null,
    }
  },

  methods: {
    toggleContactTypesOpened() {
      this.isContactTypesOpened = !this.isContactTypesOpened;
    },

    closeContactsTypesOpened() {
      this.isContactTypesOpened = false;
    },

    selectContactType(id) {

      this.$emit('updateContactType', id);

      this.tempChangedTypeId = id

      this.closeContactsTypesOpened();
    },

    isActiveType(id) {
      if (this.tempChangedTypeId !== null) {
        return id === this.tempChangedTypeId
      }
      return id===this.typeId
    },
  },

  emits: ['updateContactType'],

  computed: {
    ...mapWritableState(useContactsStore, ['contactsTypes']),

    type() {
      return this.contactsTypes.find(type=>type.id===this.typeId)
    },

    isContactTypeSelected() {
      if (this.tempChangedTypeId !== null) {
        return true
      }
      return false
    },

    contactTypeName() {
      if (this.tempChangedTypeId !== null) {
        return this.contactsTypes.find(type=>type.id===this.tempChangedTypeId).name
      }

      return 'Не выбрано'
      // return this.type.name
    }

  },

  mounted() {
    onClickOutside(this.$refs.elContactsTypes, () => {
      this.closeContactsTypesOpened();
    })
  },

})
</script>
