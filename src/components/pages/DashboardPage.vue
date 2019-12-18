<template>
  <div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
      <div class="col-lg-12">
        <h1>Welcome, Luiz Alberto Mesquita</h1>
        <h3>Company: InnovAJ</h3>
      </div>

      <div class="col-lg-6">
        <Box title="Messages">
          <div class="feed-activity-list">
            <div class="feed-element" v-for="(item, index) in [1,2,3,4]" :key="index">
              <div>
                <small class="badge badge-danger float-right">1m ago</small>
                <strong>Monica Smith</strong>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</div>
                <small class="text-muted">Today 5:60 pm - 12.06.2014</small>
              </div>
            </div>
          </div>
        </Box>
      </div>

      <div class="col-lg-6">
        <div class="ibox">
          <div class="ibox-content">
            <h5>Horas trabalhadas</h5>
            <h2>8h</h2>
            <ProgressBar percentage="90" :mini="false" :striped="false" :animated="false" />
            <div class="m-t-sm small">Server down since 4:32 pm.</div>
          </div>
        </div>
        <div class="ibox">
          <div class="ibox-content">
            <h5>Horas pendentes</h5>
            <h2>12h</h2>
            <ProgressBar percentage="80" color-class="bg-danger" mini="true" />
            <div class="m-t-sm small">Server down since 4:32 pm.</div>
          </div>
        </div>
        <h2>Atenção</h2>
        <p>Nenhum alerta por enquanto</p>
      </div>
    </div>
  </div>
</template>

<script>
import Box from "../Box";
import ProgressBar from "../ProgressBar";
export default {
  components: { Box, ProgressBar }
};
</script>

<style>
</style>