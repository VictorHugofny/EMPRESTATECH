
<template>
<div class= 'container'>
  <div class = "login"> 
    <h1>Bem vindo de volta!</h1>
    <p>Não possui uma conta?<router-link to="/register">inscreva-se</router-link>agora</p>
    <div class="floatTextInput">
        <h4>E-mail*</h4>
        <input type="email" name="" id="" v-model = "id" placeholder="E-MAIL">
        <h4>Senha* </h4>
        <input type="password" v-model = "senha" placeholder="SENHA"/>
        
        <p>Esqueceu a senha?<router-link to="/register">clique aqui</router-link> </p>
    </div>

    <router-link to="/painel">
      <button>LOGIN</button>
    </router-link>
  </div>
</div>
</template>

<style scoped>

.container{
  margin-top: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.principal img{
  height: 40vw;
  max-height: 360px;
}
.principal{
  background: #467EF0;
}
 

*{
  margin: 12px;
  padding: 0px;
}
h1{
  font-size: 2.6em;
}

.login {
  padding: 0.4rem;
  padding-bottom: 3rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.floatTextInput {
  margin-bottom: 10px;
}

.floatTextInput {
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.error input{
  border-color: var(--errorColor);
  color: var(--errorColor);
}
.error span{
  color: var(--errorColor);
}
input {
  margin-top: 5px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 5.5rem;
  padding-left: 0.7rem;
  margin-bottom: 12px;
  border-radius: 10px;
}

button{
  color: #000000;
  font-size: 18px;
  background-color: #ffffff;
  border: #000000 1px solid;
  padding: 10px 40px 10px 40px;
}
p{
  font-size: 14px;
}
   
button:hover{
    background-color: rgb(85, 98, 244);
    color: white;
    cursor: pointer;
}
a{
  color: rgb(0, 153, 255);
  font-weight: bold;
}

</style>



    
       

