<template>
    <div class="project-list">
        <table class="table table-hover">
            <tbody>
                <tr v-for="(item, index) in [1,2,3,4,5]" :key="index">
                    <td class="project-status">
                        <span class="label label-primary">Active</span>
                    </td>
                    <td class="project-title">
                        <a :href="'/project/'+item">Contract with Zender Company</a>
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
            </tbody>
        </table>
    </div>
</template>

<script>
export default {};
</script>
