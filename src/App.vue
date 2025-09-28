<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
    <AuthModal />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import AuthModal from "./components/AuthModal.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    AuthModal,
  },
};
</script>

<style>
/* Global styles if needed */
</style>
