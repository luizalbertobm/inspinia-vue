<template>
  <div class="row wrapper border-bottom white-bg page-heading">
    <div class="col-sm-4">
      <h2>{{title}}</h2>
      <ol class="breadcrumb">
        <li class="breadcrumb-item" :class="{'active':page.link}" v-for="(page, index) in breadcumbs" :key="index">
          <a v-if="page.link" :href="page.link">{{page.name}}</a>
          <strong v-else>{{page.name}}</strong>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  props: { title: String, breadcumbs:Array }
};
</script>
