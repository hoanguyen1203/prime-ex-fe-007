<template>
    <div class="tasks">
        <div class="tasks__header">
            <div class="tasks__time" v-if="date === today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate()">Today</div>
            <div class="tasks__time" v-else>{{ days[new Date(date).getDay()] }}</div>
            <div class="tasks__day">{{ months[date.split("/")[1] - 1] + " " + date.split("/")[2] }}</div>
        </div>
        <Task v-for="task in tasks" :key="task.id" :task="task" :date="date" />
    </div>
</template>

<script>
    import Task from '../task/Task'

    export default {
        name: 'Tasks',
        components: {
            Task
        },
        data: function () {
            return {
                days: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                months: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ]
            }
        },
        props: [
            'date'
        ],
        computed: {
            tasks() {
                return this.$store.state.tasks
            },
            today() {
                return this.$store.state.today
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tasks {
        padding: 20px 50px;
        &__time,
        &__day {
            display: inline-block;
        }
        &__time {
            font-size: 24px;
        }
        &__day {
            font-size: 14px;
            color: #A9A9A9;
            padding-left: 10px;
        }
    }
</style>