<template>
  <div class="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
    <!-- Human cartoon coding (iframe) -->
    <div class="w-full h-full hidden lg:flex items-center justify-center order-2  ">
      <iframe src="https://lottie.host/embed/9e839c39-2403-4ff3-9b98-98e7797475a8/3sk4cDu71b.json"
        class="w-full aspect-[14/9] border-none" allowfullscreen></iframe>
    </div>

    <!-- Personal introduction and social icons -->
    <div class="md:order-1 flex flex-col h-full">
      <!-- Text content wrapper -->
      <div class="flex-grow flex flex-col justify-center text-center md:text-left">
        <div class="text-white dark:text-gray-900">
          <p class="text-2xl sm:text-3xl md:text-3xl mb-4">Hi, I'm</p>
          <p
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white dark:text-gray-900 hover:text-secondary transition-all duration-300 cursor-pointer">
            Sai Htoo Lwin.
          </p>
        </div>
        <div class="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-white dark:text-gray-900">
          I'm a passionate
          <span class="text-red-400 text-lg sm:text-xl md:text-2xl textShadow">full-stack developer</span>
          with a love for creating dynamic and responsive web applications. With experience in both front-end and
          back-end technologies, I excel in turning complex requirements into user-friendly solutions.
        </div>
      </div>

      <!-- Social Icons -->
      <div class="flex justify-center md:justify-start mt-8 2xl:mb-20 space-x-5 text-white dark:text-gray-900">
        <i class="fa-brands fa-square-facebook fa-xl hover-target"></i>
        <i class="fa-brands fa-instagram fa-xl hover-target"></i>
        <!-- <i class="fa-solid fa-envelope fa-xl hover-target"></i> -->
        <i class="fa-brands fa-linkedin fa-xl hover-target"></i>
        <i class="fa-brands fa-github fa-xl hover-target"></i>
      </div>
    </div>

  </div>
</template>
<script setup></script>
<style scoped>
.textShadow {
  color: #33FFCC;
  text-shadow: 0 0 5px #33FFCC, 0 0 20px #33FFCC, 0 0 20px #33FFCC,
    0 0 50px #33FFCC;
}

.hover-target {
  cursor: pointer;
  transition: color 0.5s ease, text-shadow 0.5s ease, transform 0.3s ease;
}

.hover-target:hover {
  color: #33FFCC;
  text-shadow: 0 0 5px #33FFCC, 0 0 20px #33FFCC, 0 0 20px #33FFCC,
    0 0 50px #33FFCC;
  transform: scale(1.1);
}
</style>
