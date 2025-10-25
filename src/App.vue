<template>
  <div class=" bg-gradient-to-br from-slate-900 to-gray-900 dark:bg-white text-white dark:text-black">
    <NavbarPage></NavbarPage>
    <HomePage class="mb-16"></HomePage>
    <AboutPage class="relative mb-52"></AboutPage>
    <ProjectPage></ProjectPage>
    <ContactPage></ContactPage>
  </div>
</template>
<script>
import NavbarPage from "./Layouts/NavbarPage.vue"
import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";
import ProjectPage from "./components/ProjectPage.vue";
import ContactPage from "./components/ContactPage.vue";

export default {
  name: 'App',
  components: {
    NavbarPage,
    HomePage,
    AboutPage,
    ProjectPage,
    ContactPage
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
