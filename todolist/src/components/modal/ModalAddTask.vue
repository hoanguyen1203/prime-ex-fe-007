<template>
    <div id="modalAddTask" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Add Task</h4>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="newTask" placeholder="New Task">
                    </div>
                    <div class="form-group">
                        <select class="form-control" v-model="selected">
                            <option v-for="(project, index) in projects" :key="index" v-bind:value="project">{{ project.name }}</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="addTask">Save</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'ModalAddTask',
        data() {
            return {
                newTask: '',
                selected: {}
            }
        },
        computed: {
            projects() {
                return this.$store.state.projects
            },
            tasks() {
                return this.$store.state.tasks
            },
            today() {
                return this.$store.state.today
            },
            datesCreated() {
                return this.$store.state.datesCreated
            }
        },
        methods: {
            addTask() {
                if (this.newTask !== '') {
                    let dateCreated = this.today.getFullYear() + "/" + (this.today.getMonth() + 1) + "/" + this.today.getDate()
                    let number = this.selected.number + 1
                    this.$store.dispatch('addTask', {
                        id: this.tasks.length,
                        name: this.newTask,
                        selected: {
                            name: this.selected.name,
                            color: this.selected.color,
                            number: number
                        },
                        dateCreated: dateCreated,
                        completed: false
                    })

                    // Save or Update dateCreated under LocalStorage
                    this.saveDateCreated(dateCreated)

                    // Update Number Project under LocalStorage
                    this.updateNumberProject(number)

                }
                this.newTask = ''
                this.selected = {}
                this.saveTasks()
            },
            saveDateCreated(dateCreated) {
                if (this.datesCreated.length === 0) {
                    this.datesCreated.push(dateCreated)
                } else {
                    let hadDateCreated = false
                    for (let i = 0; i < this.datesCreated.length; i++) {
                        if (this.datesCreated[i] === dateCreated) {
                            hadDateCreated = true
                        }
                    }
                    if (!hadDateCreated) {
                        this.datesCreated.push(dateCreated)
                    }
                }
                this.saveDatesCreated()
            },
            updateNumberProject(number) {
                for (let i = 0; i < this.projects.length; i++) {
                    if(this.projects[i].name === this.selected.name){
                        this.projects[i].number = number
                    }
                }
                this.saveProjects()
            },
            saveProjects() {
                this.$store.dispatch('saveProjects')
            },
            saveTasks() {
                this.$store.dispatch('saveTasks')
            },
            saveDatesCreated() {
                this.$store.dispatch('saveDatesCreated')
            }
        }
    }
</script>

<style scoped>

</style>