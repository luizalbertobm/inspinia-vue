<template>
  <div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
      <div class="col-lg-12">
        <h1>Projects</h1>
        <div class="ibox">
          <div class="ibox-title">
            <h5>All projects assigned to this account</h5>
            <div class="ibox-tools">
              <a href class="btn btn-primary btn-xs">Create new project</a>
            </div>
            ]
          </div>
          <div class="ibox-content">
            <div class="row m-b-sm m-t-sm">
              <div class="col-md-1">
                <button type="button" id="loading-example-btn" class="btn btn-white btn-sm">
                  <i class="fa fa-refresh"></i> Refresh
                </button>
              </div>
              <div class="col-md-11">
                <div class="input-group">
                  <input type="text" placeholder="Search" class="form-control-sm form-control" />
                  <span class="input-group-btn">
                    <button type="button" class="btn btn-sm btn-primary">Go!</button>
                  </span>
                </div>
              </div>
            </div>
            <ProjectList />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectList from '../ProjectList'
export default {
  components:{ProjectList}
};
</script>

<style>
</style>