<template>
  <NavbarPage ></NavbarPage>
  <HomePage ></HomePage>
  <AboutPage ></AboutPage>
</template>

<script>
import NavbarPage from "./Layouts/NavbarPage.vue"
import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";

export default {
  name: 'App',
  components: {
    NavbarPage,
    HomePage,
    AboutPage
  }
}
</script>

<style>
body{
  @apply font-suse;
  background-color: #102129;
  /* overflow: hidden; */
}
</style>
