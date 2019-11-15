<template>
    <div class="project">
        <div class="project__title">
            <div class="project__icon" v-bind:style="colorProjectIcon"></div>
            <div class="project__name">{{ project.name }}</div>
        </div>
        <div class="project__number">{{ project.number }}</div>
    </div>
</template>

<script>
    export default {
        name: 'Project',
        props: [
            'project'
        ],
        computed: {
            colorProjectIcon() {
                return { 'background-color': this.project.color }
            }
        }
    }
</script>

<style lang="scss" scoped>
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
</style>