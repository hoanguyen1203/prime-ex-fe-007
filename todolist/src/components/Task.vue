<template>
    <div class="task" v-bind:class="{ completed: task.completed }" v-if="task.dateCreated === date">
        <div class="task__header">
            <input type="checkbox" v-model="task.completed" v-bind:value="task.id" @click="toggleChecked(task)" class="task__checkbox">
            <span class="task__name">{{ task.name }}</span>
        </div>
        <div class="project">
            <div class="project__name">{{ task.selected.name }}</div>
            <div class="project__icon" v-bind:style="{ 'background-color': task.selected.color }"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Task',
        props: [
            'task',
            'date'
        ],
        computed: {
            tasks() {
                return this.$store.state.tasks
            }
        },
        methods: {
            toggleChecked: function (task) {
                task.completed = !task.completed

                // Update Task Completed or Not Completed under LocalStorage
                for (let i = 0; i < this.tasks.length; i++) {
                    if(this.tasks[i].id === task.id) {
                        this.tasks[i].completed = task.completed
                    }
                }
                localStorage.setItem("tasks", JSON.stringify(this.tasks))
            }
        }
    }
</script>

<style lang="scss" scoped>
    .task {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0;
        border-bottom: 1px solid #DCDCDC;
        &__name {
            font-size: 20px;
            margin-left: 10px;
        }
    }
    .project {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        &__icon,
        &__name {
            display: inline-block;
        }
        &__icon {
            width: 12px;
            height: 12px;
            border: 1px solid #DCDCDC;
            border-radius: 100%;
            margin: 0 5px;
        }
        &__number {
            color: #A9A9A9;
        }
    }
    .completed {
        .task__name,
        .project__name {
            color: #DCDCDC;
            text-decoration: line-through;
        }
    }
</style>