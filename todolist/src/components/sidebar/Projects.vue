<template>
    <div class="projects">
        <div class="projects__header">
            <h2>Projects</h2>
            <button v-bind:class="showClassRotate" href="#show-projects" data-toggle="collapse"
                    @click="toggleRotate"><i class="fa fa-angle-up"></i></button>
        </div>
        <div id="show-projects" class="projectList collapse in">
            <project v-for="(project, index) in projects" :key="index" :project="project"/>

            <button class="project__add" data-toggle="modal" data-target="#modalAddProject">
                <i class="material-icons">add</i>
                Add Project
            </button>
        </div>
    </div>
</template>

<script>
    import Project from '../project/Project'

    export default {
        name: 'Projects',
        data: function () {
            return {
                down: false
            }
        },
        components: {
            Project
        },
        computed: {
            projects() {
                return this.$store.state.projects
            },
            showClassRotate() {
                return { 'rotate-180': this.down }
            }
        },
        methods: {
            toggleRotate() {
                if (this.down === true) {
                    this.down = false
                } else {
                    this.down = true
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .projects {
        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
        }
    }
    .project {
        &__add {
            color: #F08080;
            background-color: transparent;
            border: none;
            margin: 20px 0;
            display: flex;
            align-items: center;
            i {
                margin-right: 5px;
                color: #F08080;
            }
        }
    }
    .rotate-180 {
        transform: rotate(180deg);
    }
</style>