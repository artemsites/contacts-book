<template>
  <label class="input">
    <div class="input__name">{{ label }}</div>

    <div class="input__wrapper" :class="{'_error': error, '_no-border': noBorder}">
    
      <slot>
        <input 
          ref="thisInput"
          @input="filterInputAndEmit($event.target.value)" 
          class="input__input"
          :class="{'_error': error}"
          :name="$attrs.name"
          :type="$attrs.type"
          :placeholder="$attrs.placeholder"
          :value="$attrs.value"
          :readonly="$attrs.readonly">
      </slot>
    
      <IconAttention class="input__error-icon" v-if="error" />

      <div class="input__error">{{ error }}</div>
    </div>
  </label>
</template>

<script> 
  import { defineComponent } from 'vue'; 

  import IconAttention from "./icons/IconAttention.vue";
  import {inputMaskName} from '../helpers/inputMaskName'
  // import {inputMaskPhone} from '../helpers/inputMaskPhone';
  import IMask from 'imask';


  export default defineComponent({
    name: "ContantInput",

    components: {
      IconAttention,
    },

    data() { 
      return { 
      } 
    },  

    props: {
      label: {
        type: String,
      },
      noBorder: {
        type: Boolean,
      },
      error: {
        type: String,
      },
    },

    methods: {
      filterInputAndEmit(value) {
        console.log('value')
        console.log(value)
        let filteredValue = value;

        // Фильтры ввода
        if (this.$attrs.name === 'name') {
          filteredValue = inputMaskName(value); 
          // console.log('filteredValue')
          // console.log(filteredValue)
          if (filteredValue===null) {
            filteredValue = '';
          } else {
            filteredValue = filteredValue[0] 
          }
        }
        else if (this.$attrs.type === 'tel') {
            const maskOptions = {
            mask: '+{7} (000) 000-00-00'
          };
          filteredValue = IMask(this.$refs.thisInput, maskOptions);
          console.log('filteredValue')
          console.log(filteredValue)
          filteredValue = filteredValue._value
        }
        // else if (this.$attrs.type === 'email') {
        //   // const maskOptions = {
        //   //   mask: '+{7} (000) 000-00-00'
        //   // };
        //   // filteredValue = IMask(this.$refs.thisInput, maskOptions);
        //   // console.log('filteredValue')
        //   // console.log(filteredValue)
        //   // filteredValue = filteredValue._value
        // }

        this.$refs.thisInput.value = filteredValue
        
        this.$emit('changedInput', filteredValue)
      }
    },

    emits: ['changedInput'],

    mounted() {
      // if (this.$attrs.type === 'tel') { 
      //   // inputMaskPhone(this.$refs.thisInput); 

      //   const maskOptions = {
      //     mask: '+{7} (000) 000-00-00'
      //   };
      //   const mask = IMask(this.$refs.thisInput, maskOptions);
      //   console.log('mask')
      //   console.log(mask)

      // }
      // console.log(this.$slots._)
    },
  })
</script>

<style lang="scss" scoped>
  .input {

    display: flex;
    align-items: center;


    &__name {
      max-width: 4.5rem;
      width: 100%;

      flex-shrink: 0;

      color: var(--c-gray);
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: 120%;

      margin-right: 0.75rem;

      @media screen and (min-width: 376px) {
        min-width: 4.5rem;
        width: 29.8%;
        max-width: 8.5rem;

        margin-right: 2rem;
      }
    }

    &__wrapper {
      width: 100%;

      border-radius: 0.25rem;
      border: 1px solid #DDD;
      &:hover {
        border-color: var(--c-blue);
      }

      &._no-border {
        border: none;
      }
      &._error {
        color: var(--c-red);
        border-color: var(--c-red);
      }

      position: relative;
    }

    &__error {
      color: var(--c-red);
      font-size: 0.625rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1rem;
      text-align: right;

      position: absolute;
      right: 0;
    }

    &__error-icon {
      width: 1rem;
      height: 1rem;

      position: absolute;
      right: 0.5rem;
      transform: translateY(-50%);
      top: 50%;
    }

    &__input {
      width: 100%;
      height: 2.5rem;

      padding: 0.5rem;
     
      background: #FFF;

      border-radius: inherit;

      color: var(--c-gray);
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;

      &::placeholder {
        color: var(--c-gray-light);
      }

      &:focus {
        caret-color: var(--c-blue);
      }

      &._error {
        width: calc(100% - 1rem - 0.62rem - 0.5rem);
        color: var(--c-red);

        &::placeholder {
          color: var(--c-red);
        }
      }
    }


  }
</style>
