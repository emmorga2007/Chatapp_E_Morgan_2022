<template>
    <div class="message-panel">
        <div class="message-wrapper">
            <h1>{{ username }}</h1>
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
        message: String,
        username: String
    }
}

</script>

<style lang="scss">
    @import "@/assets/sass/chatmes.scss";
</style>
