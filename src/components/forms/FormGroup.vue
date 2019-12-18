<template>
  <div class="form-group">
    <label>{{label}}</label>
    <input :type="type" :placeholder="placeholder" class="form-control" />
  </div>
</template>

<script>
export default {
    props:['label', 'type', 'placeholder', 'size']
};
</script>

<style>
</style>