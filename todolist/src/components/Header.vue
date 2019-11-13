<template>
    <header class="header">
        <div class="header__left">
            <button class="header__button"><i class="fa fa-bars" aria-hidden="true"></i></button>
            <button class="header__button"><i class="fa fa-search" aria-hidden="true"></i></button>
        </div>
        <div class="header__right">
            <h1 class="header__title">Next 7 Days</h1>
            <button class="header__add-task" data-toggle="modal" data-target="#modalAddTask">
                <i class="material-icons">add</i>
            </button>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        display: flex;
        align-items: center;
        background-color: #F08080;
        &__left {
            width: 30%;
            display: flex;
            justify-content: space-between;
            padding: 20px;
        }
        &__right {
            width: 70%;
            padding: 20px;
            display: flex;
            justify-content: space-between;
        }
        &__button {
            background-color: transparent;
            border: none;
        }
    }
</style>