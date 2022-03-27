<template>
  <main>
    <h1 class="welcome-message">Welcome {{ ChatUserName }}</h1>

    <section id="chat">
      <!-- left hand side of your ui where you see users -->
      <section>
        <h2>Current Users:</h2>
        <!-- List of users -->
        <ul class="current-users-ui">
          <!-- this will take a sub component that will render  -->

        </ul>
      </section>
      <!-- left hand user window end-->
      <ChatMessage
        v-for="msg in messages"
        :key="msg.id"
        :message="msg.message"
        :username="msg.user"
      />
      <!--Main chat ui below here -->
      <section class="chat-message-ui">
        <!-- Chat message compoenent here-->
        <section class="text-wrapper">
          <textarea id="message" v-model="message" placeholder="whats on your mind?"></textarea>
          
          <button 
          id="sendMessage"
          @click="sendMessage"
          ><i class="fa fa-paper-plane" aria-hidden="true"></i></button>

        </section>
      </section>
    </section>
  </main>
</template>

<script>
import io from "socket.io-client";
import vars from "@/env.js";
import ChatMessage from "@/components/ChatMessage.vue";

export default {
  name: "TheChatComponent",

  props: {
      ChatUserName: String,
  },

  mounted() {
    let vm = this;

    this.socket.on("CONNECTED", (id) =>{
      vm.socketID = id;
    })

    this.socket.on('MESSAGE', (message) => {
      //[...] is the spread operator
      // short hand way to add something to an array, or put 2 arrays together, etc. 
      vm.messages = [...vm.messages, message];
      console.log(message);
    })
  },

  data() {
    return {
      socketID: '',
      message: '',
      messages: [],

      // set up the socket conneciton on the front end
      //this connects to the chat service running on port 3000
      socket: io(vars.basePath, {
        withCredentials: false,
        extraHeaders: {
          'Access-Control-Allow-origin' : '*'
        }
      })
    }
  },

  methods: {
    sendMessage() {
      this.socket.emit('SEND_MESSAGE', { user: this.ChatUserName || "Anonymous", message: this.message});
      // empty out the text area and get ready to input a new message.
      this.message = '';
    }
  },

  components: {
    ChatMessage
  }
}
</script>

<style lang="scss">
  @import "@/assets/sass/chat.scss";
</style>
