<template>
    <div class="label">
        <div class="label__title">
            <div class="label__icon"><i v-bind:class="label.icon"></i></div>
            <div class="label__name">{{ label.name }}</div>
        </div>
        <div class="label__number">{{ label.number }}</div>
    </div>
</template>

<script>
    export default {
        name: 'Label',
        props: [
            'label'
        ]
    }
</script>

<style lang="scss" scoped>
    .label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        &__icon,
        &__name {
            display: inline-block;
        }
        &__name {
            padding-left: 10px;
        }
        &__number {
            color: #A9A9A9;
            font-weight: 400;
        }
    }
</style>