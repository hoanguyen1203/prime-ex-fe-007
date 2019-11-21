<template>
    <div class="task" v-bind:class="showClassTaskCompleted" v-if="checkEquaDate">
        <div class="task__header">
            <button type="button" class="task__remove" @click="removeTask(task)"><i class="fa fa-trash"></i></button>
            <input type="checkbox" v-model="task.completed" v-bind:value="task.id" @click="toggleChecked(task)" class="task__checkbox">
            <span class="task__name">{{ task.name }}</span>
        </div>
        <div class="project">
            <div class="project__name">{{ task.selected.name }}</div>
            <div class="project__icon" v-bind:style="colorProjectIcon"></div>
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
            projects() {
                return this.$store.state.projects
            },
            tasks() {
                return this.$store.state.tasks
            },
            showClassTaskCompleted() {
                return { 'completed': this.task.completed }
            },
            checkEquaDate() {
                if (this.task.dateCreated === this.date) {
                    return true
                }
                return false
            },
            colorProjectIcon() {
                return { 'background-color': this.task.selected.color }
            }
        },
        methods: {
            updateIdTask(index) {
                for (index; index < this.tasks.length; index++) {
                    if(this.tasks[index].id !== this.tasks.indexOf(this.tasks[index])) {
                        this.tasks[index].id = this.tasks.indexOf(this.tasks[index])
                    }
                }
            },
            updateNumberTask(task) {
                let count = 0
                for (let i = 0; i < this.tasks.length; i++) {
                    if(this.tasks[i].selected.name === task.selected.name) {
                        count++
                        this.tasks[i].selected.number = count
                    }
                }
                localStorage.setItem('tasks', JSON.stringify(this.tasks))
            },
            updateNumberProject(task) {
                for (let i = 0; i < this.projects.length; i++) {
                    if(this.projects[i].name === task.selected.name){
                        this.projects[i].number -= 1
                    }
                }
                localStorage.setItem('projects', JSON.stringify(this.projects))
            },
            removeTask(task) {
                this.tasks.splice(this.tasks.indexOf(task), 1)
                this.updateIdTask(0)
                this.updateNumberTask(task)
                this.updateNumberProject(task)
                this.saveTasks()
            },
            toggleChecked(task) {
                task.completed = !task.completed

                // Update Completed Task or Not Completed under LocalStorage
                for (let i = 0; i < this.tasks.length; i++) {
                    if(this.tasks[i].id === task.id) {
                        this.tasks[i].completed = task.completed
                    }
                }
                this.saveTasks()
            },
            saveTasks() {
                this.$store.dispatch('saveTasks')
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
        &__header {
            display: flex;
            align-items: center;
        }
        &__remove {
            width: 25px;
            height: 25px;
            i {
                color: #F08080;
                font-size: 25px;
            }
        }
        &__checkbox {
            -webkit-appearance: none;
            position: relative;
            width: 25px;
            height: 25px;
            border: 1px solid #cccccc;
            border-radius: 100%;
            margin: 0 15px;
            &:focus {
                outline: none;
            }
            &:checked {
                &::before {
                    content: '';
                    position: absolute;
                    top: 2px;
                    left: 8px;
                    width: 8px;
                    height: 15px;
                    border-bottom: 2px solid #F08080;
                    border-right: 2px solid #F08080;
                    transform: rotate(45deg);
                }
            }
        }
        &__name {
            font-size: 20px;
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