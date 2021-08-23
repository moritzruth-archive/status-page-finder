<template>
  <input
    ref="inputElement"
    v-model="query"
    class="border-1 border-gray-300 rounded-30px text-lg sm:text-2xl py-2 px-3 sm:py-3 sm:px-4 focus:outline-none focus:ring-2 ring-blue-400 ring-offset-5 transition duration-300"
    placeholder="Search for a service"
  >
</template>

<script>
  import { useVModel, onStartTyping } from "@vueuse/core"
  import { ref } from "vue"

  export default {
    name: "SearchField",
    props: {
      modelValue: {
        type: String,
        required: true
      }
    },
    emits: ["update:modelValue"],
    setup(props, { emit }) {
      const query = useVModel(props, "modelValue", emit)

      const inputElement = ref(null)

      onStartTyping(() => {
        if (!inputElement.value.active) {
          query.value = ""
          inputElement.value.focus()
        }
      })

      return {
        query,
        inputElement
      }
    }
  }
</script>
