<template>
    <div class="content">
        <tasks v-for="(date, index) in sortDate" :key="index" :date="date"/>
    </div>
</template>

<script>
    import Tasks from '../article/Tasks'

    export default {
        name: 'Article',
        components: {
            Tasks
        },
        computed: {
            datesCreated() {
                return this.$store.state.datesCreated
            },
            sortDate() {
                let datesCreated = this.datesCreated
                return datesCreated.sort((a,b) => {
                    return new Date(b) - new Date(a)
                })
            }
        }
    }
</script>

<style scoped>

</style>