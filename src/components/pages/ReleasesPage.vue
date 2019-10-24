<template>
  <div>
    <PageHeader title="Releases" :breadcumbs="breadcumbs" />
    <div class="wrapper wrapper-content animated fadeInRight"></div>
  </div>
</template>

<script>
import PageHeader from "../PageHeader";
export default {
  components: { PageHeader },
  data() {
    return {
      breadcumbs: [
        { name: "Home", link: "/" }, { name: "Releases" }
      ]
    };
  }
};
</script>
