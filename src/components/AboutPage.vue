<template>
  <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
    <div class="">
      <p class="text-white font-bold text-3xl">About Me</p>
      <p class="text-white mt-4 text-lg">
        I'm a 3rd-year student at the University of Computer Studies, currently
        focusing on web development. Although I’ve paused my formal education to
        focus more on practical skills, I've been dedicating my time to learning
        and mastering front-end and back-end web technologies. I enjoy turning
        complex requirements into intuitive, user-friendly web applications. My
        goal is to continuously improve my skills and contribute to exciting
        projects that make a real impact.
      </p>
    </div>
    <div class="container mx-auto px-4">
    <p class="text-white font-bold text-3xl">Experience</p>
    <ul class="text-white mt-8 border-l-2 h-[180px] border-slate-500 pl-6 space-y-10">
      <!-- First Experience -->
      <li class="mb-10 relative flex flex-col">
        <div class="absolute w-3 h-3 bg-secondary rounded-full left-[-31px]"></div>
        <p class="opacity-50">2023 Jun - current</p>
        <p class="font-bold">Intern Developer 
          <span class="opacity-50">at Creative Coder Myanmar</span>
        </p>
        <p class="mt-2">
          As an Intern Developer, I work as a full-stack developer using Vue.js and Laravel with Inertia.js to create seamless user interfaces and efficient back-end systems. My focus is on building responsive, interactive applications and optimizing APIs for smooth user experiences.
        </p>
      </li>

      <!-- Second Experience -->
      <li class="relative">
        <div class="absolute w-3 h-3 bg-primary rounded-full left-[-31px] top-2"></div>
        <p class="opacity-50">2023 Jan - Jun</p>
        <p class="font-bold">Junior Backend Developer 
          <span class="opacity-50">at Impact Tech Software Solutions</span>
        </p>
        <p class="mt-2">
          In this role, I worked primarily on the back-end, developing and maintaining databases and server-side logic using Laravel. I gained valuable experience in working with databases, API development, and ensuring security and performance in back-end processes.
        </p>
      </li>
    </ul>
  </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
