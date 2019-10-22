<template>
  <div id="wrapper">
    <sidemenu />
    <div id="page-wrapper" class="gray-bg">
      <Topbar />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Sidemenu from "./components/layout/Sidemenu";
import Topbar from "./components/layout/Topbar";
import Footer from "./components/layout/Footer";

export default {
  name: "app",
  components: {
    Sidemenu,
    Topbar,
    Footer
  }
};
</script>
