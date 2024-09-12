<template>
  <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
    <!-- Human cartoon coding (iframe) -->
    <div class="w-full h-full flex items-center justify-center md:order-2">
      <iframe
        src="https://lottie.host/embed/9e839c39-2403-4ff3-9b98-98e7797475a8/3sk4cDu71b.json"
        style="width: 100%; height: 500px; border: none"
        class="mb-20"
        allowfullscreen
      ></iframe>
    </div>
    
    <!-- Personal introduction and social icons -->
    <div class="mt-28 md:order-1">
      <div class="text-white">
        <p class="text-3xl mb-8">Hi, I'm</p>
        <p
          class="text-8xl text-white hover:text-secondary transition-all duration-300 hover:cursor-pointer"
        >
          Sai Htoo Lwin.
        </p>
      </div>
      <div class="text-xl text-white">
        I'm a passionate
        <span class="text-red-400 text-2xl textShadow"
          >full-stack developer</span
        >
        with a love for creating dynamic and responsive web applications. With
        experience in both front-end and back-end technologies, I excel in
        turning complex requirements into user-friendly solutions.
      </div>
      <div class="flex text-white mt-14 space-x-5">
        <i class="fa-brands fa-square-facebook fa-xl hover-target"></i>
        <i class="fa-brands fa-instagram fa-xl hover-target"></i>
        <i class="fa-solid fa-envelope fa-xl hover-target"></i>
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



