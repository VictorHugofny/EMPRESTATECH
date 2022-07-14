
<template>
  <div class = "login"> 
      <h1>Bem vindo de volta!</h1>
      <p>Não possui uma conta? inscreva-se agora</p>
    <div class="floatTextInput">
        <h4>E-mail*</h4>
        <input v-model = "id" />
        <h4>Senha* </h4>
        <input type="password" v-model = "senha" />
        <p>Esqueceu a senha? clique aqui</p>
    </div>

    <router-link to="/">
      <button>LOGIN</button>
    </router-link>

  </div>
</template>

<style scoped>
*{
  margin: 10px;
  padding: 0px;
}
h1{
  font-size: 2.6em;
}
div{
  margin: 12vh;
}
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.floatTextInput {
  margin-bottom: 20px;
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
  padding: 8px 60px;
  margin-bottom: 16px;
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

</style>