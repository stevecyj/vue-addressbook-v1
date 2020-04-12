<template>
    <div id="app">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">通訊錄</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/" :active="path == '/'">Vue</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <router-view />
    </div>
</template>
<script>
export default {
    data() {
        return {
            path: this.$route && this.$route.path,
        };
    },
    watch: {
        $route(route) {
            this.path = route.path;
        },
    },
};
</script>
<style lang="scss">
.page {
    padding: 20px;
}
button {
    margin-right: 10px;
}
</style>
