<template>
  <header class="flex justify-between items-center px-4 py-5 sm:px-10 sm:py-8 sticky top-0 bg-white bg-opacity-20" :class="$style.bar">
    <div class="font-bold sm:text-xl">
      Status Page Finder
    </div>
    <a href="https://github.com/moritzruth/status-page-finder" rel="noopener noreferrer" class="-sm:text-sm">
      Source Code
    </a>
  </header>
  <main class="relative min-h-80vh">
    <div class="flex flex-col justify-center items-center py-15 px-5 space-y-5 transition">
      <SearchField v-model="query"/>
      <div class="text-gray-600 hidden hoverable:block">
        You can always start typing.
      </div>
    </div>
    <div
      class="grid gap-2 sm:gap-4 px-4 sm:px-20 transition duration-200"
      :class="[result.length === 0 ? 'opacity-0' : 'opacity-100', $style.grid]"
    >
      <ServiceBox
        v-for="service in result"
        :key="service.url"
        :name="service.name"
        :color="service.color"
        :url="service.url"
        :icon="service.icon"
      />
    </div>
    <div class="text-gray-500 text-lg text-center absolute w-full top-50 transition duration-200" :class="result.length === 0 ? 'opacity-100' : 'opacity-0'">
      <div>
        No results found.
      </div>
      <div class="mt-2">
        Feel free to
        <a href="https://github.com/moritzruth/status-page-finder" class="text-blue-400" :class="$style.link">
          create a pull request
        </a>
        adding the missing service.
      </div>
    </div>
  </main>
  <footer class="flex flex-col space-y-2 justify-center items-center py-4 px-2 text-gray-500 transition opacity-50 hover:opacity-100 focus-within:opacity-100">
    <a href="https://moritzruth.de" :class="$style.link">
      Created with ❤️ by Moritz Ruth
    </a>
    <a href="https://moritzruth.de/impressum" :class="$style.link">
      Impressum
    </a>
  </footer>
</template>

<style module>
  .link {
    @apply hover:text-gray-800 focus:text-gray-800 transition duration-200;
  }

  .bar {
    backdrop-filter: blur(5px);
  }

  .grid {
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    max-width: 1000px;
    margin: 0 auto;
  }
</style>

<script>
  import Fuse from "fuse.js"
  import { ref, computed } from "vue"
  import SearchField from "./components/SearchField.vue"
  import { services } from "./assets/services.js"
  import ServiceBox from "./components/ServiceBox.vue"

  const alphabeticallySortedServices = services.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })

  export default {
    name: "App",
    components: { ServiceBox, SearchField },
    setup() {
      const query = ref("")

      const fuse = new Fuse(services, {
        keys: ["name"],
        threshold: 0.5
      })

      const result = computed(() => query.value === "" ? alphabeticallySortedServices : fuse.search(query.value).map(r => r.item))

      return {
        query,
        result
      }
    }
  }
</script>
