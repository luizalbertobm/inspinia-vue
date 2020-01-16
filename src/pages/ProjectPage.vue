<template>
    <div>
        <PageHeader :title="'Projeto '+id" :breadcumbs="breadcumbs" />
        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-12">
                    <Box title="Test" :slidable="true" :closable="false">
                        <h1>Titulo do projeto ({{id}})</h1>
                    </Box>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


import Box from "../components/Box";
import PageHeader from "../components/PageHeader";
export default {
    components: { Box, PageHeader },
    props: ['id'],
    data() {
        return {
            breadcumbs: [
                { name: "Home", link: "/" },
                { name: "Projetos", link: "/projects" },
                { name: "Projeto" }
            ]
        };
    }
};
</script>

<style>
</style>