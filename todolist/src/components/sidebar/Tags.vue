<template>
    <div class="tags">
        <tag v-for="(tag, index) in tags" :key="index" :tag="tag"/>
    </div>
</template>

<script>
    import Tag from '../tag/Tag'

    export default {
        name: 'Tags',
        components: {
            Tag
        },
        data() {
            return {
                tags: [
                    {
                        name: 'Inbox',
                        icon: 'fa fa-inbox',
                        number: null
                    },
                    {
                        name: 'Today',
                        icon: 'fa fa-calendar-o',
                        number: 4
                    },
                    {
                        name: 'Next 7 Days',
                        icon: 'fa fa-calendar',
                        number: 5
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>