<template>
    <div class="account">
        <div class="account__avatar">
            <img alt="Avatar" src="../../assets/avatar.jpeg">
        </div>
        <div class="account__name">
            {{ accountName }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Account',
        props: [
            'accountName'
        ]
    }
</script>

<style lang="scss" scoped>
    .account {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #DCDCDC;
        &__avatar {
            width: 60px;
            height: 60px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 100%;
            }
        }
        &__name {
            padding-left: 20px;
        }
    }
</style>