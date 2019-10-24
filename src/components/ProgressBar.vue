<template>
  <div class="progress" :class="{'progress-mini':mini}">
    <div
      class="progress-bar"
      :class="[colorClass, {'progress-bar-animated':animated, 'progress-bar-striped':striped}]"
      role="progressbar"
      :aria-valuenow="percentage"
      aria-valuemin="0"
      aria-valuemax="100"
      :style="'width: '+percentage+'%'"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    percentage: { type: Number, required: true },
    colorClass: { type: String, default: "bg-primary" },
    animated: { type: Boolean, default: false },
    striped: { type: Boolean, default: false },
    mini: { type: Boolean, default: false }
  }
};
</script>