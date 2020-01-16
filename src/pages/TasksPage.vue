<template>
    <div>
        <PageHeader title="Tasks" :breadcumbs="breadcumbs" />
        <div class="wrapper wrapper-content animated fadeInRight"></div>
    </div>
</template>

<script>
import PageHeader from "../components/PageHeader";
export default {
    components: { PageHeader },
    data() {
        return {
            breadcumbs: [
                { name: "Home", link: "/" }, { name: "Tasks" }
            ]
        };
    }
};
</script>
