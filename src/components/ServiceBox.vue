<template>
  <a
    class="rounded-xl flex flex-col justify-center items-center px-2 py-3 overflow-hidden transition duration-500 ease-in-out"
    :style="{ backgroundColor, color, '--bg': backgroundColor }"
    :class="$style.box"
    :href="url"
  >
    <component :is="icon" class="text-2xl mb-3 mt-1.5"/>
    <div class="font-medium text-center">{{ name }}</div>
  </a>
</template>

<style module>
  .box:hover, .box:focus-visible {
    transform: scale(1.1);
    outline: none;
  }
</style>

<script>
  import { transparentize } from "polished"
  import { computed } from "vue"

  export default {
    name: "ServiceBox",
    props: {
      name: {
        type: String,
        required: true
      },
      icon: {
        type: Object,
        required: true
      },
      url: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const backgroundColor = computed(() => transparentize(0.9, props.color))

      return {
        backgroundColor
      }
    }
  }
</script>
