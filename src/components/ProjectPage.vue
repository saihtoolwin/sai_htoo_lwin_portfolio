<template>
  <div class="container mx-auto  mt-10 text-white px-3">
    <div class="p-3 md:p-6 border dark:border-gray-700/50 border-gray-300 dark:bg-gray-800/50 px-5 rounded-2xl shadow-lg backdrop-blur-sm">
      <p class=" font-bold text-2xl md:text-3xl duration-300 text-black dark:text-white">Projects</p>
      <div class="w-full flex justify-center mb-10">
        <ul class="flex   backdrop-blur-md text-black dark:text-white dark:bg-gray-700/40 rounded-3xl border border-gray-700/30 ">
          <li v-for="tab in tabs" :key="tab" @click="activeTab = tab"
            class="relative cursor-pointer select-none px-4 py-2 text-md font-medium rounded-2xl  transition-all duration-300"
            :class="[
              activeTab === tab
                ? 'bg-gray-200 dark:bg-gray-600'
                : 'dark:text-gray-400 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-700/40'
            ]">
            {{ tab }}
            <span v-if="activeTab === tab"
              class="absolute inset-x-0 -bottom-1 mx-auto w-2/3 h-[3px] bg-black dark:bg-gray-200 rounded-full animate-pulse"></span>
          </li>
        </ul>
      </div>

      <div v-if="activeTab == 'Web'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:mx-auto md:gap-5 gap-y-3  ">
        <!-- Card 1 -->
        <div
          class="h-full flex flex-col px-4 py-2 rounded-xl overflow-hidden border dark:border-gray-700/50 border-gray-300 transform hover:scale-105 transition duration-300 motion-reduce:transform-none">

          <!-- Top content -->
          <div class=" flex-grow mb-2">
            <div class="font-bold md:text-lg mb-2 text-black dark:text-white">Learning Management System</div>
            <div class=" text-gray-600 dark:text-gray-300 text-sm md:text-md mt-1">
              A modern web-based Learning Management System designed for educators and learners, focusing on course
              management, interactive learning, and scalable performance. Built for security, flexibility, and seamless
              user experience.
            </div>

          </div>
          <div class="flex flex-wrap gap-2 mt-auto">
            <!-- Bootstrap -->
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-600/40
      hover:border-[#7952b3] transition-all duration-300 hover:scale-110" alt="Bootstrap">

            <!-- Vue -->
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-600/40
      hover:border-[#42b883] transition-all duration-300 hover:scale-110" alt="Vue" />

            <!-- PHP -->
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-600/40
      hover:border-[#8892be] transition-all duration-300 hover:scale-110" alt="PHP">

            <!-- Laravel -->
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" alt="Laravel"
              class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-red-500 transition-all duration-300" />
          </div>
          <!-- Bottom link -->
          <div class="mt-auto  py-2 text-right">
            <a href="https://github.com/saihtoolwin/LMS" class="inline-block px-3 py-1 text-sm font-semibold"
              target="_blank" rel="noopener noreferrer">
              See More ....
            </a>
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="h-full flex flex-col px-4 py-2 rounded-xl overflow-hidden border dark:border-gray-700/50 border-gray-300 transform hover:scale-105 transition duration-300 motion-reduce:transform-none">

          <!-- Top content -->
          <div class=" flex-grow mb-2">
            <div class="font-bold md:text-lg mb-2 text-black dark:text-white">BookReview System</div>
            <div class=" text-gray-600 dark:text-gray-300 text-sm md:text-md mt-1">
              BookReview System where users can browse, download, and review books. The platform
              focuses on user-friendly navigation, secure downloads, and interactive reviews, making it easy for readers
              to share and discover content. Built for scalability, flexibility, and seamless reading experience.
            </div>

          </div>
          <div class="flex flex-wrap gap-2 mt-auto">
            <!-- Bootstrap -->
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-600/40
      hover:border-[#7952b3] transition-all duration-300 hover:scale-110" alt="Bootstrap">

            <!-- PHP -->
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-600/40
      hover:border-[#8892be] transition-all duration-300 hover:scale-110" alt="PHP">


          </div>
          <!-- Bottom link -->
          <div class="mt-auto  py-2 text-right">
            <a href="https://github.com/saihtoolwin/LMS" class="inline-block px-3 py-1 text-sm font-semibold"
              target="_blank" rel="noopener noreferrer">
              See More ....
            </a>
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="h-full flex flex-col px-4 py-2 rounded-xl overflow-hidden border dark:border-gray-700/50 border-gray-300 transform hover:scale-105 transition duration-300 motion-reduce:transform-none">

          <!-- Top content -->
          <div class=" flex-grow mb-2">
            <div class="font-bold md:text-lg mb-2 text-black dark:text-white">DevDiscuss</div>
            <div class=" text-gray-600 dark:text-gray-300 text-sm md:text-md mt-1">
              A developer community platform where beginners can ask coding questions and experienced developers provide
              solutions.
              Features include error debugging assistance, voting system for best answers, and topic categorization.
              Built to foster knowledge sharing and collaborative problem-solving in the developer community.
            </div>

          </div>
          <div class="flex flex-wrap gap-2 mt-auto">
            <!-- Inertia.js -->
            <img src="https://inertiajs.com/favicon.ico" alt="Inertia.js"
              class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-purple-500 transition-all duration-300" />
            <!-- Vue -->
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue"
              class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-green-500 transition-all duration-300" />

            <!-- Laravel -->
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" alt="Laravel"
              class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-red-500 transition-all duration-300" />
          </div>
          <!-- Bottom link -->
          <div class="mt-auto  py-2 text-right">
            <a href="https://github.com/saihtoolwin/LMS" class="inline-block px-3 py-1 text-sm font-semibold"
              target="_blank" rel="noopener noreferrer">
              See More ....
            </a>
          </div>
        </div>

         <!-- Card 4 -->
        <div
          class="h-full flex flex-col px-4 py-2 rounded-xl overflow-hidden border dark:border-gray-700/50 border-gray-300 transform hover:scale-105 transition duration-300 motion-reduce:transform-none">

          <!-- Top content -->
          <div class=" flex-grow mb-2">
            <div class="font-bold md:text-lg mb-2 text-black dark:text-white">Mandalar Second</div>
            <div class=" text-gray-600 dark:text-gray-300 text-sm md:text-md mt-1">
              A peer-to-peer marketplace platform where users can seamlessly sell their pre-owned items and discover great deals from other sellers. Features include secure transactions, product categorization, bidding system, and real-time chat between buyers and sellers for a complete e-commerce experience.
            </div>

          </div>
          <div class="flex flex-wrap gap-2 mt-auto">
            <!-- Bootstrap -->
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-600/40
      hover:border-[#7952b3] transition-all duration-300 hover:scale-110" alt="Bootstrap">

            <!-- PHP -->
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-600/40
      hover:border-[#8892be] transition-all duration-300 hover:scale-110" alt="PHP">


          </div>
          <!-- Bottom link -->
          <div class="mt-auto  py-2 text-right">
            <a href="https://github.com/saihtoolwin/LMS" class="inline-block px-3 py-1 text-sm font-semibold"
              target="_blank" rel="noopener noreferrer">
              See More ....
            </a>
          </div>
        </div>

      </div>
      <div class="flex justify-end mt-4 ">
        <a href="https://github.com/saihtoolwin?tab=repositories" target="_blank">
          <p class="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white mt-3">More Projects ></p>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ["Web", "Mobile"],
      activeTab: "Web",
    }
  }
}
</script>

<style scoped></style>
