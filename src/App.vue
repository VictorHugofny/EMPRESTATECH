<template>
  <nav>
    <router-link to="/"><img src="./assets/logo-emprestech.png" id="logo"></router-link>
    <router-link to="/login"> <button id="login">Login</button></router-link>
  </nav>
    <Navpainel/>
  <router-view/>

</template>

<style>
body {
overflow-x: hidden;
}
*{
  margin: 0;
  padding: 0;
}
button{
  border-radius: 10px;
  font-size: 20px;
  padding: 14px 22px 14px 22px;
}

h1{
  font-size: 2.5rem;
}
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

#login:hover{
  background-color: rgb(49, 111, 255);
  color: rgb(255, 255, 255);
  border: none;
}
nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #b0b0b0;
}
p, a, h1, h2, h3, h4, h5{
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; 
}
</style>

<script>
// @ is an alias to /src
import Navpainel from '@/components/Navpainel.vue'

export default {
  name: 'HomeView',
  components: {
    Navpainel
    
    
  }
}
</script>