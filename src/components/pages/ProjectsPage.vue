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

            <div class="project-list">
              <table class="table table-hover">
                <tbody>
                  <tr>
                    <td class="project-status">
                      <span class="label label-primary">Active</span>
                    </td>
                    <td class="project-title">
                      <a href="project_detail.html">Contract with Zender Company</a>
                      <br />
                      <small>Created 14.08.2014</small>
                    </td>
                    <td class="project-completion">
                      <small>Completion with: 48%</small>
                      <div class="progress progress-mini">
                        <div style="width: 48%;" class="progress-bar"></div>
                      </div>
                    </td>
                    <td class="project-people">
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile-luiz.jpg" />
                      </a>
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile-luiz.jpg" />
                      </a>
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                    </td>
                    <td class="project-actions">
                      <a href="#" class="btn btn-white btn-sm">
                        <i class="fa fa-folder"></i> View
                      </a>
                      <a href="#" class="btn btn-white btn-sm">
                        <i class="fa fa-pencil"></i> Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="project-status">
                      <span class="label label-primary">Active</span>
                    </td>
                    <td class="project-title">
                      <a href="project_detail.html">There are many variations of passages</a>
                      <br />
                      <small>Created 11.08.2014</small>
                    </td>
                    <td class="project-completion">
                      <small>Completion with: 28%</small>
                      <div class="progress progress-mini">
                        <div style="width: 28%;" class="progress-bar"></div>
                      </div>
                    </td>
                    <td class="project-people">
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                    </td>
                    <td class="project-actions">
                      <a href="#" class="btn btn-white btn-sm">
                        <i class="fa fa-folder"></i> View
                      </a>
                      <a href="#" class="btn btn-white btn-sm">
                        <i class="fa fa-pencil"></i> Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="project-status">
                      <span class="label label-default">Unactive</span>
                    </td>
                    <td class="project-title">
                      <a href="project_detail.html">Many desktop publishing packages and web</a>
                      <br />
                      <small>Created 10.08.2014</small>
                    </td>
                    <td class="project-completion">
                      <small>Completion with: 8%</small>
                      <div class="progress progress-mini">
                        <div style="width: 8%;" class="progress-bar"></div>
                      </div>
                    </td>
                    <td class="project-people">
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                    </td>
                    <td class="project-actions">
                      <a href="#" class="btn btn-white btn-sm">
                        <i class="fa fa-folder"></i> View
                      </a>
                      <a href="#" class="btn btn-white btn-sm">
                        <i class="fa fa-pencil"></i> Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="project-status">
                      <span class="label label-primary">Active</span>
                    </td>
                    <td class="project-title">
                      <a href="project_detail.html">Letraset sheets containing</a>
                      <br />
                      <small>Created 22.07.2014</small>
                    </td>
                    <td class="project-completion">
                      <small>Completion with: 83%</small>
                      <div class="progress progress-mini">
                        <div style="width: 83%;" class="progress-bar"></div>
                      </div>
                    </td>
                    <td class="project-people">
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                    </td>
                    <td class="project-actions">
                      <a href="#" class="btn btn-white btn-sm">
                        <i class="fa fa-folder"></i> View
                      </a>
                      <a href="#" class="btn btn-white btn-sm">
                        <i class="fa fa-pencil"></i> Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="project-status">
                      <span class="label label-primary">Active</span>
                    </td>
                    <td class="project-title">
                      <a href="project_detail.html">Contrary to popular belief</a>
                      <br />
                      <small>Created 14.07.2014</small>
                    </td>
                    <td class="project-completion">
                      <small>Completion with: 97%</small>
                      <div class="progress progress-mini">
                        <div style="width: 97%;" class="progress-bar"></div>
                      </div>
                    </td>
                    <td class="project-people">
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                    </td>
                    <td class="project-actions">
                      <a href="#" class="btn btn-white btn-sm">
                        <i class="fa fa-folder"></i> View
                      </a>
                      <a href="#" class="btn btn-white btn-sm">
                        <i class="fa fa-pencil"></i> Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="project-status">
                      <span class="label label-primary">Active</span>
                    </td>
                    <td class="project-title">
                      <a href="project_detail.html">Contract with Zender Company</a>
                      <br />
                      <small>Created 14.08.2014</small>
                    </td>
                    <td class="project-completion">
                      <small>Completion with: 48%</small>
                      <div class="progress progress-mini">
                        <div style="width: 48%;" class="progress-bar"></div>
                      </div>
                    </td>
                    <td class="project-people">
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                    </td>
                    <td class="project-actions">
                      <a href="#" class="btn btn-white btn-sm">
                        <i class="fa fa-folder"></i> View
                      </a>
                      <a href="#" class="btn btn-white btn-sm">
                        <i class="fa fa-pencil"></i> Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="project-status">
                      <span class="label label-primary">Active</span>
                    </td>
                    <td class="project-title">
                      <a href="project_detail.html">There are many variations of passages</a>
                      <br />
                      <small>Created 11.08.2014</small>
                    </td>
                    <td class="project-completion">
                      <small>Completion with: 28%</small>
                      <div class="progress progress-mini">
                        <div style="width: 28%;" class="progress-bar"></div>
                      </div>
                    </td>
                    <td class="project-people">
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                    </td>
                    <td class="project-actions">
                      <a href="#" class="btn btn-white btn-sm">
                        <i class="fa fa-folder"></i> View
                      </a>
                      <a href="#" class="btn btn-white btn-sm">
                        <i class="fa fa-pencil"></i> Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="project-status">
                      <span class="label label-default">Unactive</span>
                    </td>
                    <td class="project-title">
                      <a href="project_detail.html">Many desktop publishing packages and web</a>
                      <br />
                      <small>Created 10.08.2014</small>
                    </td>
                    <td class="project-completion">
                      <small>Completion with: 8%</small>
                      <div class="progress progress-mini">
                        <div style="width: 8%;" class="progress-bar"></div>
                      </div>
                    </td>
                    <td class="project-people">
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                    </td>
                    <td class="project-actions">
                      <a href="#" class="btn btn-white btn-sm">
                        <i class="fa fa-folder"></i> View
                      </a>
                      <a href="#" class="btn btn-white btn-sm">
                        <i class="fa fa-pencil"></i> Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="project-status">
                      <span class="label label-primary">Active</span>
                    </td>
                    <td class="project-title">
                      <a href="project_detail.html">Letraset sheets containing</a>
                      <br />
                      <small>Created 22.07.2014</small>
                    </td>
                    <td class="project-completion">
                      <small>Completion with: 83%</small>
                      <div class="progress progress-mini">
                        <div style="width: 83%;" class="progress-bar"></div>
                      </div>
                    </td>
                    <td class="project-people">
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                    </td>
                    <td class="project-actions">
                      <a href="#" class="btn btn-white btn-sm">
                        <i class="fa fa-folder"></i> View
                      </a>
                      <a href="#" class="btn btn-white btn-sm">
                        <i class="fa fa-pencil"></i> Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="project-status">
                      <span class="label label-primary">Active</span>
                    </td>
                    <td class="project-title">
                      <a href="project_detail.html">Contrary to popular belief</a>
                      <br />
                      <small>Created 14.07.2014</small>
                    </td>
                    <td class="project-completion">
                      <small>Completion with: 97%</small>
                      <div class="progress progress-mini">
                        <div style="width: 97%;" class="progress-bar"></div>
                      </div>
                    </td>
                    <td class="project-people">
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                    </td>
                    <td class="project-actions">
                      <a href="#" class="btn btn-white btn-sm">
                        <i class="fa fa-folder"></i> View
                      </a>
                      <a href="#" class="btn btn-white btn-sm">
                        <i class="fa fa-pencil"></i> Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="project-status">
                      <span class="label label-primary">Active</span>
                    </td>
                    <td class="project-title">
                      <a href="project_detail.html">There are many variations of passages</a>
                      <br />
                      <small>Created 11.08.2014</small>
                    </td>
                    <td class="project-completion">
                      <small>Completion with: 28%</small>
                      <div class="progress progress-mini">
                        <div style="width: 28%;" class="progress-bar"></div>
                      </div>
                    </td>
                    <td class="project-people">
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                      <a href>
                        <img alt="image" class="rounded-circle" src="img/profile_small.jpg" />
                      </a>
                    </td>
                    <td class="project-actions">
                      <a href="#" class="btn btn-white btn-sm">
                        <i class="fa fa-folder"></i> View
                      </a>
                      <a href="#" class="btn btn-white btn-sm">
                        <i class="fa fa-pencil"></i> Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>