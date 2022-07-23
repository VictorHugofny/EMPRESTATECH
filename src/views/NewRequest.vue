<template>
<div class = 'container'>
<div class = 'floatTextInput'>
    <p>Nome completo*</p>
    <input type="text" placeholder="Nome completo">

    <p>Email para contato*</p>
    <input type="text" placeholder="Email">

    <p>Data (data de hoje)*</p>
    <input type="text" placeholder="Data">

    <p>Tipo de solicitação*</p>
    <input type="text" placeholder="Tipo de solicitação">

    <p>Codigo do produto*</p>
    <input type="text" placeholder='Codigo do produto'>

    <div class="btn">
        <button class="btn1">Enviar</button>
    </div>
</div>
    </div>
</template>

<style scoped>
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