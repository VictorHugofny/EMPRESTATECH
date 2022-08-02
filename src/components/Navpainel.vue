
<template>
<div id="nav" class = 'sobre'>
  <router-link to="/form"><p>Abrir um pedido</p></router-link> |
  <router-link to="/ticket"><p> Tickets</p></router-link> |
  <router-link to="/suport"><p> Suporte</p></router-link>    
</div>
</template>

<style scoped>

#nav {
  border: 1px solid black;
  background-color: #34353E;
  position: sticky;
  top: 0;
  width: 100%;
  text-align: center;
  color: rgb(202, 202, 202);
  z-index: 10;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  
}

#nav a {
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  padding: 0;
  color: #ffffff;
}

#nav p{
  font-weight: bold;
  margin: 5px;
  font-size: 20px;
  color: #ffffff;
  text-decoration: none;
  padding: 10px;
}

#nav p:hover{
  color: #6764fa;
}

#nav p.router-link-exact-active {
  color: #6764fa;
}

@media(max-width: 800px){
}
 
@media(min-width: 1900px){
}

@media(min-width: 2400px){
}
</style>

<script>
export default {
    name: 'HelloWorld',
}
</script>

    
       

