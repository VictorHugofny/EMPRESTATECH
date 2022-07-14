<template>
  <div class="hello">
    <div>
      <h1>Automatizando emprestimos de produtos com<span>tech </span></h1>
      <p>
        EMPRESTECH, é um projeto voltado para a automatizando de solicitações de emprestimos de produtos, sendo possivel gerenciar os mesmos, como fazer pedidos, devoluções e trocar equimentos.
      </p>
    </div>
   
    <div class="btn">
      <button class="btn1">ENTRAR</button>
      <button class="btn2">CONTATO</button>
    </div>

    <img src="../assets/arte.png" alt="">

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span{
  color: #467ef0;
}
img{
  height: 40vw;
  max-height: 300px;
  
}
*{
  padding: 10px;
}
.btn1{
  margin-right: 10px;
}
.btn1{
  color: white;
  font-size: 20px;
  background-color: #3267CE;
  border: #3267CE 1px solid;
  padding: 14px 22px 14px 22px;
}
.btn2{
  font-size: 20px;
  color: white;
  background-color: #00000000;
  border: #ffffff 1px solid;
  padding: 14px 22px 14px 22px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p{
  font-size: 1.4rem;
}
</style>
