<template>
  <div class="container mx-auto px-4 mt-4">
    <p class="text-white font-bold text-3xl">Technology Stack</p>

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
    </div>
  </div>
  <div class="container mx-auto px-4 mt-4 text-white">
    <p class=" font-bold text-3xl my-10">Project</p>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:mx-auto md:gap-5">
      <!-- Card 1 -->
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-black transform hover:scale-105 transition duration-300 motion-reduce:transform-none">
        <img
          class="w-full"
          src="../assets/hmitemp.png"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Learning Management System </div>
          <p class=" text-base">
           "An intuitive LMS platform designed for seamless learning, whether you're into photography, travel, or winter adventures."
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2"
            >#photography</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2"
            >#travel</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2"
            >#winter</span
          >
        </div>
      </div>
      <!-- Card 2 -->
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white transform hover:scale-105 transition duration-300 motion-reduce:transform-none">
        <img
          class="w-full"
          src="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8="
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#photography</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#travel</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#winter</span
          >
        </div>
      </div>
      <!-- Card 3 -->
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white transform hover:scale-105 transition duration-300 motion-reduce:transform-none">
        <img
          class="w-full"
          src="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8="
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#photography</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#travel</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#winter</span
          >
        </div>
      </div>
      <!-- Card 4 -->
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white transform hover:scale-105 transition duration-300 motion-reduce:transform-none">
        <img
          class="w-full"
          src="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8="
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#photography</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#travel</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#winter</span
          >
        </div>
      </div>
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
