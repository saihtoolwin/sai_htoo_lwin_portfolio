<template>
  <div class="container mx-auto px-4 mt-4">
    <!-- <p class="text-white font-bold text-3xl">Technology Stack</p>

    <div class="grid grid-cols-8 gap-12 mt-10">
      <div
        v-for="(tech, index) in techStack"
        :key="index"
        class="flex flex-col items-center animate-wave"
        :style="{ animationDelay: `${index * 0.2}s` }"
      >
        <i
          :class="tech.icon"
          :style="{ color: tech.color }"
          class="text-4xl"
        ></i>
        <p class="text-white mt-2">{{ tech.name }}</p>
      </div>
    </div> -->
  </div>
  <div class="container mx-auto px-4 mt-4 text-white">
    <p class=" font-bold text-3xl text-gray-500 hover:text-white duration-300 my-10">Projects</p>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:mx-auto md:gap-5">
      <!-- Card 1 -->
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-600 transform hover:scale-105 transition duration-300 motion-reduce:transform-none">
        <img
          class="w-full"
          src="../assets/hmitemp.png"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-2">
          <div class="font-bold text-xl mb-2">Learning Management System </div>
          <div class="flex flex-wrap gap-2 mt-2">
          <!-- Example tech badges/icons, replace with actual tech stack -->
          <span class="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">Vue.js</span>
          <span class="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">Laravel</span>
          <span class="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">MySQL</span>
          <span class="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">Bootstrap</span>
        </div>
        </div>
        <div class="flex justify-end pt-2 pb-2">
          <a
            href="https://github.com/saihtoolwin/LMS"
            class="inline-block px-3 py-1 text-sm font-semibold mr-2 mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            See More ....
          </a>
        </div>
      </div>
      <!-- Card 2 -->
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-600 transform hover:scale-105 transition duration-300 motion-reduce:transform-none">
        <img
          class="w-full"
          src="../assets/hmitemp.png"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-2">
          <div class="font-bold text-xl mb-2">NEON Book Review System</div>
          <div class="flex flex-wrap gap-2 mt-2">
          <span class="bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded">PHP</span>
          <span class="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">MySQL</span>
          <span class="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">Bootstrap</span>
        </div>
        </div>
        <div class="flex justify-end pt-2 pb-2">
          <a
            href="https://github.com/saihtoolwin/NEON-Book-Review-System"
            class="inline-block px-3 py-1 text-sm font-semibold mr-2 mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            See More ....
          </a>
        </div>
      </div>
      <!-- Card 3 -->
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-600 transform hover:scale-105 transition duration-300 motion-reduce:transform-none">
        <img
          class="w-full"
          src="../assets/hmitemp.png"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-2">
          <div class="font-bold text-xl mb-2">Discussion</div>
          <div class="flex flex-wrap gap-2 mt-2">
          <!-- Example tech badges/icons, replace with actual tech stack -->
          <span class="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">Inertia.js</span>
          <span class="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">MySQL</span>
          <span class="bg-cyan-500 text-white text-xs font-semibold px-2 py-1 rounded">Tailwind CSS</span>
        </div>
        </div>
        <div class="flex justify-end pt-2 pb-2">
          <a
            href="https://github.com/saihtoolwin/discussion"
            class="inline-block px-3 py-1 text-sm font-semibold mr-2 mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            See More ....
          </a>
        </div>
      </div>
      <!-- Card 4 -->
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-600 transform hover:scale-105 transition duration-300 motion-reduce:transform-none">
        <img
          class="w-full"
          src="../assets/hmitemp.png"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-2">
          <div class="font-bold text-xl mb-2">Learning Management System </div>
          <div class="flex flex-wrap gap-2 mt-2">
          <!-- Example tech badges/icons, replace with actual tech stack -->
          <span class="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">Vue.js</span>
          <span class="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">Laravel</span>
          <span class="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">MySQL</span>
          <span class="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">Bootstrap</span>
        </div>
        </div>
        <div class="flex justify-end pt-2 pb-2">
          <a
            href="https://github.com/saihtoolwin/LMS"
            class="inline-block px-3 py-1 text-sm font-semibold mr-2 mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            See More ....
          </a>
        </div>
      </div>
      </div>
      <div class="flex justify-end mt-4 " >
        <a href="https://github.com/saihtoolwin?tab=repositories" target="_blank">
        <p class="text-gray-400 hover:text-white mt-3">More Projects ></p>
      </a>
    </div>
    
  </div>
</template>

<script setup>
const techStack = [
  { name: "HTML", icon: "fab fa-html5", color: "#e34c26" },
  { name: "CSS", icon: "fab fa-css3-alt", color: "#264de4" },
  { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#563d7c" },
  { name: "Tailwind", icon: "fas fa-wind", color: "#06b6d4" },
  { name: "JavaScript", icon: "fab fa-js", color: "#f0db4f" },
  { name: "Vue.js", icon: "fab fa-vuejs", color: "#42b883" },
  { name: "Laravel", icon: "fab fa-laravel", color: "#ff2d20" },
  { name: "GitHub", icon: "fab fa-github", color: "#ffffff" },
  { name: "jQuery", icon: "fas fa-code", color: "#0769AD" }, // jQuery
  { name: "MySQL", icon: "fas fa-database", color: "#4479A1" }, // MySQL
  { name: "PHP", icon: "fab fa-php", color: "#4F5B93" } // PHP
];
</script>

<style scoped>
@keyframes wave {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-wave {
  animation: wave 1.5s ease-in-out infinite;
}
</style>
