<template>
    <div>
      <div class="container mx-auto px-4 mt-4">
        <p class="text-white font-bold text-3xl">Technology Stack</p>
  
        <div class="grid grid-cols-8 gap-4 mt-10">
          <div 
            v-for="(tech, index) in techStack" 
            :key="index" 
            class="flex flex-col items-center animate-wave" 
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <i :class="tech.icon" :style="{ color: tech.color }" class="text-4xl"></i>
            <p class="text-white mt-2">{{ tech.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const techStack = [
    { name: 'HTML', icon: 'fab fa-html5', color: '#e34c26' },     
    { name: 'CSS', icon: 'fab fa-css3-alt', color: '#264de4' },    
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#563d7c' }, 
    { name: 'Tailwind', icon: 'fas fa-wind', color: '#06b6d4' },    
    { name: 'JavaScript', icon: 'fab fa-js', color: '#f0db4f' },   
    { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#42b883' },  
    { name: 'Laravel', icon: 'fab fa-laravel', color: '#ff2d20' },
    { name: 'GitHub', icon: 'fab fa-github', color: '#ffffff' } 
  ];
  </script>
  
  <style scoped>
  @keyframes wave {
    0%, 100% {
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
  