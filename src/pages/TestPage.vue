<template>
    <div>
        <PageHeader title="Projetos" :breadcumbs="breadcumbs" />
        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-12">
                    <Box title="Test" :slidable="true" :closable="false">
                        <h1>Test</h1>
                        <hr />
                        <div class="row">
                            <div class="col-md-6">
                                <FormGroup label="nome" placeholder="Ponha seu nome aqui" />
                            </div>
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Box from "../components/Box";
import PageHeader from "../components/PageHeader";
import FormGroup from "../components/forms/FormGroup";
export default {
    components: { Box, PageHeader, FormGroup },
    data() {
        return {
            breadcumbs: [{ name: "Home", link: "/" }, { name: "Projetos" }]
        };
    }
};
</script>

<style>
</style>