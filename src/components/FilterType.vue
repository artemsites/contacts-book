<template>

  <div class="filter" ref="elFilter">
    <button
      class="filter__toggle"
      aria-label="Открыть фильтр контактов"
      @click="toggleFilterOpened">

      <div class="filter__current">{{ filterCurrentName }}</div>
      <IconTriangle class="filter__icon-t"/>

    </button>

    <div class="filter__list" :class="{ '_active': isFilterOpened }">
      <button
        aria-label="Выбор фильтра контактов"
        class="filter__item"
        v-for="fItem in filterList"
        :key="fItem.id"
        :class="{ '_active': fItem.active }"
        @click="selectFilter(fItem.id)"
      >

        <span class="filter__item-name">{{ fItem.name }}</span>
        <IconV v-if="fItem.active" class="filter__icon-v"/>

      </button>
    </div>
  </div>

</template>

<script>
import { defineComponent } from 'vue';

import IconTriangle from "../components/icons/IconTriangle.vue";
import IconV from "../components/icons/IconV.vue";

import { mapWritableState } from 'pinia'
import { useFilter } from '../stores/filter'

import { onClickOutside } from '@vueuse/core'

export default defineComponent({
  name: "FilterType",

  components: {
    IconTriangle,
    IconV
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
      this.filterList.find(fI=>fI.active===true).active = false

      this.filterList.find(fI=>fI.id===id).active = true

      this.closeFilterOpened();
    }
  },

  computed: {
    ...mapWritableState(useFilter, ['filterList']),

    filterCurrentName() {
      return this.filterList.find(fI=>fI.active===true).name
    }
  },

  mounted() {
    onClickOutside(this.$refs.elFilter, () => {
      this.closeFilterOpened();
    })
  },

})
</script>

<style lang="scss" scoped>
  .filter {
    width: 100%;
    max-width: 13.6875rem;
    height: 2rem;

    font-size: 0.875rem;
    
    background: #FFF;
    border-radius: 0.25rem;
    border: 1px solid var(--c-light);

    transition: border-color var(--duration);

    position: relative;

    &:hover {
      border-color: var(--c-blue);
    }

    &__toggle {
      width: 100%;
      height: 100%;

      display: inline-flex;
      align-items: center;

      color: var(--c-gray);

      padding: 0.625rem 0.5rem;
    }

    &__current {
      width: 100%;
      font-style: normal;
      font-weight: 700;
      line-height: 1.25rem;
    }

    &__icon {
      &-t,
      &-v {
        width: 1rem;
        height: 1rem;

        margin-left: 0.5rem;
      }
    }

    &__list {
      width: 100%;

      display: flex;
      flex-direction: column;

      box-shadow: 0px 0px 6px 0px rgba(148, 181, 225, 0.35);
      background-color: white;
      border-radius: 0.25rem;
      
      opacity: 0;
      pointer-events: none;
      transform: translateY(-1rem);
      
      transition: opacity var(--duration-f), transform var(--duration);

      position: absolute;
      top: calc(100% + 0.5rem);
      left: 0;

      &._active {
        opacity: 1;
        pointer-events: initial;
        transform: translateY(0);
      }
    }

    &__item {
      height: 2.5rem;

      display: inline-flex;
      align-items: center;

      font-style: normal;
      font-weight: 400;
      line-height: 1.25rem;
      padding-left: 1rem;
      padding-right: 0.5rem;

      transition: background-color var(--duration);

      &-name {
        width: 100%;
      }

      &:hover {
        background-color: #EAF2FD;
      }

      &._active {
        font-weight: 700;
      }
    }
  }
</style>