<template>
    <div class="message-panel">
        <div class="message-wrapper">
            <h1>Username will show up here eventually</h1>
            <p class="msg-text">
                {{ message }}
            </p>
        </div>
    </div>
</template>

<script>

export default {
    name:"ChatMessageComponent",

    props: {
        message: String
    }
}

</script>

<style lang="scss">
    @import "../assets/sass/chatmes";
</style>
