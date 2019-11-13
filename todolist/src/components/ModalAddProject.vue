<template>
    <div id="modalAddProject" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Add Project</h4>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="newProject" placeholder="New Project">
                    </div>
                    <div class="form-group">
                        <input type="color" name="choise-color" class="form-control" v-model="newProjectColor">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="addProject">Save</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'ModalAddProject',
        data: function () {
            return {
                newProject: '',
                newProjectColor: '#000000'
            }
        },
        computed: {
            projects() {
                return this.$store.state.projects
            }
        },
        methods: {
            addProject: function () {
                if (this.newProject !== '') {
                    this.$store.dispatch('addProject', {
                        name: this.newProject,
                        color: this.newProjectColor,
                        number: 0
                    })
                }

                this.newProject = ''
                this.newProjectColor = '#000000'
                this.saveProjects()
            },
            saveProjects: function () {
                this.$store.dispatch('saveProjects')
            }
        }
    }
</script>

<style scoped>

</style>