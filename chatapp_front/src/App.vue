<template>
    <section id="app">
      <header>
        <h1 class="hidden">Welcome to the Chat App</h1>
        <h2>Welcome to Chaty Kathy</h2>
        <h2>Chat App with VueCLI, Socket.io, and Express</h2>
      </header>
      <router-view></router-view>
    </section>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  text-align: center;
  background-color: pink;
  padding: 1em 0.8em;
  color: black;
}

header {
  .hidden { display: none;} 
  h2 {font-size: 2.5em; padding-bottom: 0.8em; margin-bottom: 0.2em;}
  }
</style>