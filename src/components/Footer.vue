<template>

<div class = "links">
    <div class = "grid-container" id="rodape"> 
    
        <a href= "mailto:victorhugofny@gmail.com?subject=Hello%20again" target="_blank">
            <img src="../assets/gmail.png" alt="" srcset="">
        </a>
        
        <a href= "https://github.com/VictorHugofny" target="_blank">
            <img src="../assets/logotipo-do-github.png" alt="" srcset="">
        </a>

        <a href= "https://www.linkedin.com/in/victor-hugo-santana/" target="_blank">
            <img src="../assets/instagram.png" alt="" srcset="">
        </a>
    </div>     
</div> 

</template>
<style scoped>


.grid-container img{
  width: 30px;
}

.grid-container{
    align-content: center;
    flex-wrap: nowrap;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    text-align: center;
    background: #34353E;
}

#rodape > a{
  padding: 10px;
  width: 40%;
}

#rodape > a:hover{
  background-color: rgba(255, 255, 255, 0.078);
}
</style>

<script>
export default {
  name: 'HelloWorld',
}
</script>