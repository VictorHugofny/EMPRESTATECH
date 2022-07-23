<template>
  <div class="home" id="inicio">
    <div>
      <div>
        <h1>Emprestando de forma<span> Digital </span></h1>
        <p>
          Somos um <span> projeto </span> voltado para a automatizando de solicitações de <span> emprestimos </span>  de produtos, sendo possivel gerenciar os mesmos, como fazer pedidos, devoluções e trocar equimentos.
        </p>
      </div>
   
      <div class="btn">
        <button class="btn1">ENTRAR</button>
        <button class="btn2">SUPORTE</button>
      </div>
    </div>
    
    <div class = 'principal'>
      <img src="../assets/arte.png" alt="">
    </div>
  </div>

  <div class="home" id="inicio">
    <div>
      <div>
        <h1>Como usar o <span> EMPRESTATECH </span></h1>
        <p>
          Todo o processo é bem simples, uma empresa pode solicitar o nosso serviço para fazer o gereciamento de emprestimo de produtos para seus funcionarios, podendo registrar e gerenciar todas as questões como o envio, troca, devolução.
          Tudo isso de forma segura e digital, para começar clique em 'entrar' ou 'login'.
        </p>
        <div class = 'principal'>
          <img src="../assets/programmer.gif" alt="">
        </div>
        
      </div>
      
    </div>
    
    
  </div>

  <div>
    <h1>Por que optar pela <span> EMPRESTATECH? </span></h1>
  </div>

  <div class ="home" id="cards">
    <div class = "card" >
      <div class ="topo-card"><img src="../assets/foguete.gif" height="70px"></div>
      <h3> Rapido e 100% digital</h3>
      <p>Todo nosso sistema foi pensando em automatizar e melhorar todo o proceso de emprestimo de produtos.</p>
    </div> 

    <div class = "card" >
      <div class ="topo-card"><img src="../assets/escudo.gif" height="70px"></div>
      <h3> Segurança e transparência</h3>
      <p>Todos os dados são criptografados, implementamos o sistema de verificação de duas etapas para tornar ainda mais seguro </p>
    </div> 

    <div class = "card" >
      <div class ="topo-card"><img src="../assets/suporte-tecnico.gif" height="70px"></div>
      <h3> Atendimento Exclusivo</h3>
      <p>Esta com duvida? nossa suporte oferece um antedimento para qualquer duvida referente a plataforma </p>
    </div> 

   

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

.card{
  padding:0px;
  background: #558cf9(47, 47, 47, 0.242);
  border: #558cf9 4px solid;
}
.topo-card{
  margin: 0px;
  padding: 0px;
  background: #ffffff;
}
span{
  color: #558bf9;
  font-weight: bold;
}
.principal img{

  height: 40vw;
  max-height: 360px;
  
}
*{
  padding-top: 10px;
  padding-bottom: 10px;
}

.btn1{
  margin-right: 10px;
}

.btn1{
  color: white;
  background-color: #3267CE;
  border: #3267CE 1px solid;
}
.btn2{
  color: white;
  background-color: #00000000;
  border: #ffffff 1px solid;
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
  margin-left: 14px;
  margin-right: 14px;
}
h3{
  font-size: 26px;
  color: #7ca5f9;
}

.home{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: #34353E 5px solid;
  justify-content: center;
  align-items: center;
}
.home > div {
  padding-left: 1.8rem;
  padding-right: 1.8rem;
  flex: 10 10 40%;
  text-align: center;
  border-radius: 1px;
}

#cards > div {
  padding: 0px;
  margin-left: 2rem;
  margin-bottom: 2rem;
  flex: 10 10 20%;
  max-width: 260px;
  text-align: center;
}
</style>
