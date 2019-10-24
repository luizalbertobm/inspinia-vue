<template>
  <div class="ibox" v-if="!closed">
    <div class="ibox-title">
      <h5>{{title}}</h5>

      <div class="ibox-tools">
        <a class="collapse-link" @click="toggle" v-if="slidable">
          <i class="fa fa-chevron-up"></i>
        </a>
        <a class="close-link" @click="remove" v-if="closable">
          <i class="fa fa-times"></i>
        </a>
      </div>
    </div>
    <vue-slide-up-down :active="open" :duration="600">
      <div class="ibox-content">
        <slot></slot>
      </div>
    </vue-slide-up-down>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String },
    closable: { type: Boolean, default: false },
    slidable: { type: Boolean, default: false }
  },
  data() {
    return {
      open: true,
      closed: false
    };
  },
  methods: {
    toggle: function() {
      this.open = !this.open;
    },
    remove: function() {
      this.closed = true;
    }
  }
};
</script>