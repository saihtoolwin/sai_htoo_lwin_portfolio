<template>
  <!-- <div class="container min-h-[65vh] md:min-h-[90vh] mx-auto px-4 py-3 grid grid-cols-1 lg:grid-cols-2 lg:gap-3"> -->
  <div class="container min-h-[65vh] md:min-h-[90vh] mx-auto px-4 py-3 ">
    <!-- Human cartoon coding (iframe) -->
    <!-- <div class="w-full  hidden lg:flex items-center justify-center order-1 lg:order-2 ">
       <iframe src="https://lottie.host/embed/9e839c39-2403-4ff3-9b98-98e7797475a8/3sk4cDu71b.json"
        class="w-full md:aspet-[12/9] lg:aspect-[12/9] border-none lg:mb-28"></iframe> 
    </div> -->

    <!-- Personal introduction and social icons -->
    <div class=" backdrop-blur-sm   border-gray-300 dark:border-gray-700/50 
     rounded-2xl mt-3 text-center  px-6 
     md:order-1 flex flex-col  items-center h-full">
      <NavbarPage></NavbarPage>
      <!-- Profile Image Wrapper -->
      <div class="relative w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40">
        <img src="../assets/profileImg/1.jpg" alt="Sai Htoo Lwin"
          class="w-full h-auto rounded-xl border-2  dark:border-gray-200 border-gray-400 object-cover shadow-[0_10px_40px_rgba(0,0,0,0.15)]" />

        <!-- Active Green Dot -->
        <span class="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 
           w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 
           bg-green-500 border-2 dark:border-gray-800 border-white rounded-full">
        </span>
      </div>

      <!-- Name -->
      <h1   ref="nameHeading"
 class="mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold 
         bg-gradient-to-r from-gray-900 to-gray-600 
         dark:text-white
         bg-clip-text text-transparent">
        Sai Htoo Lwin
      </h1>

      <!-- Subtitle -->
      <p ref="subtitle" class="mt-2 text-lg md:text-md text-gray-600 dark:text-white">
        Web & Mobile Developer
      </p>



      <!-- Description -->
      <div ref="description"  class="flex-grow mt-6 px-2">
        <p class="max-w-xl mx-auto text-black dark:text-white 
          text-base sm:text-lg md:text-md leading-relaxed">
          I love turning ideas into elegant, functional applications. I focus on clean design, smooth interactions, and
          building products that look great and perform even better across all platforms.
        </p>
      </div>
      <!-- Experience & Projects -->
      <div ref="cards"  class="flex gap-8 mt-16 mb-10 text-gray-700 dark:text-white">

        <!-- Experience Card -->
        <div class="flex flex-col items-center min-w-[140px] px-4 py-5 rounded-xl border 
                border-gray-300 dark:border-gray-700/60 shadow-sm bg-white/5  dark:bg-gray-700/30">
          <i class="fa-solid fa-briefcase text-xl md:text-2xl"></i>
          <p class="text-sm md:text-base mt-1 font-medium">2+ Years</p>
          <p class="text-xs opacity-70">Experience</p>
        </div>

        <!-- Projects Card -->
        <div  class="flex flex-col items-center min-w-[140px] px-4 py-5 rounded-xl border 
                border-gray-300 dark:border-gray-700/60 shadow-sm bg-white/5 dark:bg-gray-700/30">
          <i class="fa-solid fa-folder-open text-xl md:text-2xl"></i>
          <p class="text-sm md:text-base mt-1 font-medium">10+ Projects</p>
          <p class="text-xs opacity-70">Completed</p>
        </div>

      </div>
      <!-- Social Icons ALWAYS at bottom -->
      <div ref="socialIcons" class="mt-auto pt-10 flex gap-6 dark:text-white text-gray-900">
        <a href="https://www.facebook.com/share/17n8BtFa32/?mibextid=wwXIfr" target="_blank">
          <i class="fa-brands fa-square-facebook text-2xl hover-target"></i>
        </a>
        <a href="https://www.instagram.com/saihtoolwin1562" target="_blank">
          <i class="fa-brands fa-instagram text-2xl hover-target"></i>
        </a>
        <a href="https://www.linkedin.com/in/sai-htoo-lwin-05b7722b5/" target="_blank">
          <i class="fa-brands fa-linkedin text-2xl hover-target"></i>
        </a>
        <a href="https://github.com/saihtoolwin" target="_blank">
          <i class="fa-brands fa-github text-2xl hover-target"></i>
        </a>
      </div>



    </div>



  </div>
</template>
<script>
import NavbarPage from '@/Layouts/NavbarPage.vue';
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

export default {
  name: 'HomePage',
  components: {
    NavbarPage,
  },
  setup() {
    const nameHeading = ref(null);
    const subtitle = ref(null);
    const description = ref(null);
    const cards = ref([]);
    const socialIcons = ref([]);

    onMounted(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Animate Name
      tl.from(nameHeading.value, {
        x: -200,
        opacity: 0,
        duration: 1,
      });

      // Animate Subtitle
      tl.from(subtitle.value, {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, "-=0.5"); // overlap with previous animation

      // Animate Description
      tl.from(description.value, {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, "-=0.4");

      // Animate Experience & Projects cards
      tl.from(cards.value, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      }, "-=0.6");

      // Animate Social Icons
      tl.from(socialIcons.value, {
        y: 10,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1
      }, "-=0.5");
    });

    return {
      nameHeading,
      subtitle,
      description,
      cards,
      socialIcons
    };
  }
}
</script>


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
