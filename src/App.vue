<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  margin: 0;
  padding: 0;
}

#nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
