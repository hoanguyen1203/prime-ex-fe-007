<template>
    <div class="labels">
        <Label
                v-for="(label, index) in labels"
                :key="index"
                :label="label"
        />
    </div>
</template>

<script>
    import Label from './Label.vue'

    export default {
        name: 'Labels',
        data: function () {
            return {
                labels: [
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
        },
        components: {
            Label
        }
    }
</script>

<style scoped>

</style>