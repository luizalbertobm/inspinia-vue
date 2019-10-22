<template>
    <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
            <ul class="nav metismenu" id="side-menu">
                <li class="nav-header">
                    <div class="dropdown profile-element">
                        <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <img class="rounded-circle" width="48" height="48" src="img/profile-luiz.jpg" />
                            <span class="block m-t-xs font-bold">Example user</span>
                            <span class="text-muted text-xs block">menu <b class="caret"></b></span>
                        </a>
                        <ul class="dropdown-menu animated fadeInRight m-t-xs">
                            <li><a class="dropdown-item" href="login.html">Logout</a></li>
                        </ul>
                    </div>
                    <div class="logo-element">
                        IN+
                    </div>
                </li>
                <router-link tag="li" to="/" active-class="active" exact>
                    <a><i class="fa fa-th-large"></i> <span class="nav-label">Dashboard</span></a>
                </router-link>
                <router-link tag="li" to="/projects" active-class="active">
                    <a><i class="fa fa-folder"></i> <span class="nav-label">Projects</span></a>
                </router-link>
                <router-link tag="li" to="/tasks" active-class="active">
                    <a><i class="fa fa-list"></i> <span class="nav-label">Tasks</span></a>
                </router-link>
                <router-link tag="li" to="/customers" active-class="active" exact>
                    <a><i class="fa fa-user"></i> <span class="nav-label">Customers</span></a>
                </router-link>
                <router-link tag="li" to="/releases" active-class="active">
                    <a><i class="fa fa-check"></i> <span class="nav-label">Releases</span></a>
                </router-link>
                <router-link tag="li" to="/requests" active-class="active">
                    <a><i class="fa fa-th-large"></i> <span class="nav-label">Requests</span></a>
                </router-link>
                
            </ul>

        </div>
    </nav>
</template>

<script>
export default {
    name:'Sidemenu'
}
</script>

<style>

</style>