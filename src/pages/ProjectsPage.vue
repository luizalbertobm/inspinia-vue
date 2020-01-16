<template>
    <div>
        <PageHeader title="Projects" />
        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox">
                        <div class="ibox-title">
                            <h5>All projects assigned to this account</h5>
                            <div class="ibox-tools">
                                <button
                                    type="button"
                                    class="btn btn-primary btn-xs"
                                    @click="createNewProject"
                                >Create new project</button>
                            </div>
                        </div>
                        <div class="ibox-content">
                            <div class="row m-b-sm m-t-sm">
                                <div class="col-md-1">
                                    <button
                                        type="button"
                                        id="loading-example-btn"
                                        class="btn btn-white btn-sm"
                                        @click="getAllProjects"
                                    >
                                        <i class="fa fa-refresh"></i> Refresh
                                    </button>
                                </div>
                                <div class="col-md-11">
                                    <div class="input-group">
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            class="form-control-sm form-control"
                                        />
                                        <span class="input-group-btn">
                                            <button type="button" class="btn btn-sm btn-primary">Go!</button>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <table class="table table-hover" v-if="projects">
                                <tbody>
                                    <tr v-for="(project, id) in projects" :key="id">
                                        <td style="width:60px" class>
                                            <img
                                                alt="image"
                                                class="rounded img-fluid"
                                                :src="`img/${project.image}`"
                                            />
                                        </td>
                                        <td class="project-title">
                                            <a :href="'/project/'">{{project.name}}</a>
                                            <br />
                                            <small>Deadline: {{project.deadLine}}</small>
                                        </td>
                                        <td class="project-completion">
                                            <small>Percentage completed: {{project.completedPercent}}%</small>
                                            <div class="progress progress-mini">
                                                <div
                                                    :style="`width: ${project.completedPercent.toString()}%`"
                                                    class="progress-bar"
                                                ></div>
                                            </div>
                                        </td>
                                        <td class="text-right">
                                            <a
                                                v-for="(user, index) in project.users"
                                                :key="index"
                                                href="#"
                                                class="mr-1"
                                            >
                                                <img
                                                    v-if="user"
                                                    alt="image"
                                                    width="40"
                                                    height="40"
                                                    class="img-fluid rounded-circle"
                                                    :src="`img/${user.profileImage}`"
                                                />
                                            </a>
                                        </td>
                                        <td class="text-right pt-3">
                                            <a href="#" class="btn btn-white btn-sm mr-1">
                                                <i class="fa fa-eye"></i> View
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
import PageHeader from '../components/PageHeader'
export default {
    components: { PageHeader },
    created() {
        this.getAllProjects()

    },
    methods: {
        getAllProjects() {
            this.projects = null
            this.$http.get('projects.json').then(res => {
                this.projects = res.data
            })
        },
        createNewProject() {
            this.$http.post('projects.json',
                {
                    name: 'My Aj Partner',
                    deadLine: '09/11/2020',
                    completedPercent: 48,
                    image: 'profile-luiz.jpg',
                    users: [
                        {
                            userID: 1,
                            profileImage: 'profile_small.jpg'
                        },
                        {
                            userID: 1,
                            profileImage: 'profile-luiz.jpg'
                        }
                    ]
                }
            ).then(() => {
                this.getAllProjects()
            })

        }
    },
    data() {
        return {
            projects: null
        }
    },
};
</script>

<style>
</style>