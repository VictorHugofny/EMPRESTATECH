<template>
<div class = 'container'>
<div class = 'floatTextInput'>
    <p>Nome completo*</p>
    <input type="text" placeholder="Nome completo">

    <p>Email para contato*</p>
    <input type="text" placeholder="Email">

    <p>Telefone</p>
    <input type="text" placeholder="Data">

    <p>Sua dúvida</p>
    <input class = 'duvida' type="text" placeholder="Tipo de solicitação">

    <div class="btn">
        <button class="btn1">Enviar</button>
    </div>
</div>
    </div>
</template>

<script>
// @ is an alias to /src
import Navpainel from '@/components/Navpainel.vue'

export default {
  name: 'HomeView',
  components: {
    Navpainel,
  }
}
</script>

<style scoped>
.duvida{
  padding-bottom: 5.4rem;
}
.container{
  margin-top: 2rem;
  display: flex;
  justify-content: center;
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
  margin-top: 2px;
  padding-top: 0.8rem;
  padding-bottom: 0.4rem;
  padding-right: 24vw;
  margin-bottom: 10px;
  border-radius: 10px;
}

button{
  margin-top: 20px;
  color: #000000;
  font-size: 18px;
  background-color: #ffffff;
  border: #000000 1px solid;
  padding: 10px 60px 10px 60px;
}
p{
  font-size: 14px;
}
   
button:hover{
    background-color: rgb(85, 98, 244);
    color: white;
    cursor: pointer;
}


</style>