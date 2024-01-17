<template>
  <div class="filter" ref="elFilter">
    <button class="filter__toggle" aria-label="Открыть фильтр контактов" @click="toggleFilterOpened">
      <div class="filter__current _uppercase">{{ filterCurrentName }}</div>
      <IconTriangle class="filter__icon-t" :class="{ '_active': isFilterOpened }" />
    </button>

    <div class="filter__list" :class="{ '_active': isFilterOpened }">
      <button aria-label="Выбор фильтра контактов" class="filter__item" v-for="fItem in filterList" :key="fItem.id"
        :class="{ '_active': fItem.active }" @click="selectFilter(fItem.id)">

        <span class="filter__item-name _uppercase">{{ fItem.name }}</span>

        <IconV v-if="fItem.active" class="filter__icon-v" />
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import IconTriangle from "../components/icons/IconTriangle.vue";
import IconV from "../components/icons/IconV.vue";

import { mapWritableState } from 'pinia'
import { useFilterStore } from '../stores/filter'

import { onClickOutside } from '@vueuse/core'

export default defineComponent({
  name: "FilterType",

  components: {
    IconTriangle,
    IconV
  },

  props: {
    error: {
      type: String,
    },
  },

  data() {
    return {
      isFilterOpened: false,
    }
  },

  methods: {
    toggleFilterOpened() {
      this.isFilterOpened = !this.isFilterOpened;
    },

    closeFilterOpened() {
      this.isFilterOpened = false;
    },

    selectFilter(id) {
      this.filterList.find(fI => fI.active === true).active = false

      this.filterList.find(fI => fI.id === id).active = true

      this.$emit('selectedFilterType', id);

      this.closeFilterOpened();
    }
  },

  computed: {
    ...mapWritableState(useFilterStore, ['filterList']),

    filterCurrentName() {
      return this.filterList.find(fI => fI.active === true).name
    }
  },

  emits: ['selectedFilterType'],

  mounted() {
    onClickOutside(this.$refs.elFilter, () => {
      this.closeFilterOpened();
    })
  },

})
</script>
