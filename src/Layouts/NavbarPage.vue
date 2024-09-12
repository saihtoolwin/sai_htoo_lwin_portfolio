<template>
  <div
    class="w-full h-24 flex items-center justify-between lg:container mx-auto px-4"
  >
    <div class="text-secondary font-bold text-3xl">My Portfolio</div>
    <div
      class="w-12 h-12 border-2 border-white bg-slate-600 transition-all duration-300  hover:cursor-pointer rounded-full hover:rounded-lg hover:w-[150px]   flex justify-center items-center relative group"
    >
      <div class="absolute transition-all duration-300 group-hover:right-[100px] right-3">
        <i class="fa-solid fa-download fa-lg" style="color: #ffffff"></i>
      </div>

      <div
        class="absolute opacity-0 group-hover:right-[10px] group-hover:opacity-100 transition-all duration-300  text-white px-4 py-2 rounded-md shadow-lg"
      >
        Resume
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style  scoped>

</style>
