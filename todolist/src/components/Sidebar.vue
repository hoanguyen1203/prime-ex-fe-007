<template>
    <aside class="sidebar">
        <Account accountName="Justin Pot"/>
        <Labels />
        <Projects />
    </aside>
</template>

<script>
    import Account from './Account.vue'
    import Labels from './Labels.vue'
    import Projects from "./Projects";

    export default {
        name: 'Sidebar',
        components: {
            Projects,
            Labels,
            Account
        }
    }
</script>

<style lang="scss" scoped>
    .sidebar {
        width: 30%;
        min-height: 100vh;
        border-right: 1px solid #DCDCDC;
        & > div {
            padding: 15px 20px;
        }
    }
</style>