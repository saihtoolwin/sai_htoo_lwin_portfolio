<template>
  <div class="bg-bgcolor dark:bg-white text-white dark:text-black">
    <NavbarPage></NavbarPage>
    <HomePage class="mb-20"></HomePage>
    <AboutPage class="relative mb-52"></AboutPage>
    <ProjectPage></ProjectPage>
  </div>
</template>
<script>
import NavbarPage from "./Layouts/NavbarPage.vue"
import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";
import ProjectPage from "./components/ProjectPage.vue";

export default {
  name: 'App',
  components: {
    NavbarPage,
    HomePage,
    AboutPage,
    ProjectPage
  }
}
</script>

<style>
body{
  @apply font-suse;
  /* background-color: #102129; */
  /* overflow: hidden; */
}
</style>
