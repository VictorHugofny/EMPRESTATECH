<template>
  <nav>
    <router-link to="/"><img src="./assets/logo-emprestech.png" id="logo"></router-link>
    <router-link to="/about"> <button id="login">Login</button></router-link>
  </nav>
  <router-view/>

</template>

<style>
body{
  margin:0px;
  padding: 0px
}
#logo{
  width: 50vw;
  max-width: 300px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #faf2f2;
}
body{
  background-color: #2A2730;
}

nav {
  background-color: #34353E;
  display: flex;
  justify-content: space-between;
  padding: 4px;
  padding-left: 2vw;
  padding-right: 2vw;
  align-items: center;

}
#login{
  font-size: 18px;
  color: white;
  background-color: #00000000;
  border: #ffffff 1px solid;
  padding: 10px 24px 10px 24px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #b0b0b0;
}
</style>
