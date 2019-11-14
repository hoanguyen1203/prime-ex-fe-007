<template>
    <div class="tags__item tag">
        <div class="tag__title">
            <div class="tag__icon"><i v-bind:class="tag.icon"></i></div>
            <div class="tag__name">{{ tag.name }}</div>
        </div>
        <div class="tag__number">{{ tag.number }}</div>
    </div>
</template>

<script>
    export default {
        name: 'Tag',
        props: [
            'tag'
        ]
    }
</script>

<style lang="scss" scoped>
    .tag {
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