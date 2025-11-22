<template>
  <div class=" dark:bg-gradient-to-br dark:from-slate-900 dark:to-gray-900 bg-none to-gray-100 ">
    <!-- <NavbarPage></NavbarPage> -->
    <HomePage class="mb-16"></HomePage>
    <AboutPage class="relative "></AboutPage>
    <ProjectPage></ProjectPage>
    <ContactPage></ContactPage>
  </div>
</template>
<script>
// import NavbarPage from "./Layouts/NavbarPage.vue"
import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";
import ProjectPage from "./components/ProjectPage.vue";
import ContactPage from "./components/ContactPage.vue";

export default {
  name: 'App',
  components: {
    // NavbarPage,
    HomePage,
    AboutPage,
    ProjectPage,
    ContactPage
  }
}
</script>

<style>
body{
  @apply font-apple;
  /* background-color: #102129; */
  /* overflow: hidden; */
}
</style>
