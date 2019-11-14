<template>
    <aside class="sidebar">
        <Account accountName="Justin Pot" />
        <Tags />
        <Projects />
    </aside>
</template>

<script>
    import Account from '../sidebar/Account'
    import Tags from '../sidebar/Tags'
    import Projects from '../sidebar/Projects'

    export default {
        name: 'Sidebar',
        components: {
            Projects,
            Tags,
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