<template>
  <section id="welcome-wrapper">
    <h1 class="hidden">Sign In</h1>
    <p>Love talking to yourself? Great! Share your thoughts with you, yourself, and omnipresent Kathy.</p>
    <input type="text" name="username" placeholder="Your Name" v-model="username"
:aria-label="nameLabel">
    <div class="controls">
      <button
        :class="{ 'disabled' : canJoin}"
        :disabled="canJoin"
        @click="goToChat"
      >Join Chat</button>
      <button @click="goToChat">Join Anonymously</button>
    </div>
  </section>

</template>

<script>
export default {
  name: 'LoginPage',

  data() {
    return {
      loggedIn: false,
      username: '',
    };
  },

  computed: {
    canJoin: function () {
      return (this.username.trim() === '');
    },
  },

  methods: {
    goToChat() {
      this.$router.push({ name: 'Chat', params: { ChatUserName: this.username || "Anonymous"}});
    },
  },

};
</script>

<!-- CSS Style homepage below -->
<style lang="scss">
  @import "@/assets/sass/home.scss";
  @import "@/assets/sass/reset.scss";
</style>
