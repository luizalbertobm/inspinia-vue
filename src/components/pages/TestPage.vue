<template>
<div>
  <PageHeader title="Projetos" :breadcumbs="breadcumbs"/>
  <div class="wrapper wrapper-content animated fadeInRight">
    
    <div class="row">
      <div class="col-lg-12">
        <Box title="Test" :slidable="true" :closable="false">
          <h1>Test</h1>
        </Box>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Box from "../Box";
import PageHeader from "../PageHeader";
export default {
  components: { Box, PageHeader },
  data() {
    return {
      breadcumbs:[
        {name:'Home', link:'/'},
        {name:'Projetos'}
      ]
    }
  },
};
</script>

<style>
</style>