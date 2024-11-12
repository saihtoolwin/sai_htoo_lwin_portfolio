<template>
  <div class="w-full h-24 flex justify-end lg:container mx-auto px-4">
    <div class="flex">
      <button
        @click="toggleTheme"
        class="h-12 w-12 rounded-lg p-2 mr-3 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <!-- Light mode icon -->
        <svg
          
        class="transition-transform duration-500  group-hover:filter group-hover:brightness-125 group-hover:drop-shadow-lg"

          :class="!isDarkMode ? 'rotate-0 fill-secondary' : 'rotate-180 fill-yellow-500'"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path v-if="!isDarkMode"
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
          ></path>
          <path v-else
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>

        <!-- Dark mode icon -->
        <!-- <svg
          v-else
          class="transition-transform duration-500 fill-yellow-500"
          :class="isDarkMode ? 'rotate-180' : 'rotate-0'"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
         
        </svg> -->
      </button>
      <div
        class="w-12 h-12 border-2 border-white bg-slate-600 transition-all duration-300 hover:cursor-pointer rounded-full hover:rounded-lg hover:w-[150px] flex justify-center items-center relative group"
      >
        <div
          class="absolute transition-all duration-300 group-hover:right-[100px] right-3"
        >
          <i class="fa-solid fa-download fa-lg" style="color: #ffffff"></i>
        </div>
        <div
          class="absolute opacity-0 group-hover:right-[10px] group-hover:opacity-100 transition-all duration-300 text-white px-4 py-2 rounded-md shadow-lg"
        >
          Resume
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isDarkMode = ref(false);

function toggleTheme() {
  console.log("Toggling");
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark', isDarkMode.value);
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
}

onMounted(() => {
  isDarkMode.value = localStorage.getItem('theme') === 'dark';
  document.documentElement.classList.toggle('dark', isDarkMode.value);
});
</script>

<style scoped>

</style>
