<template>
<div>
    <footer id = "footer">
        <div class ='icons'><img src="../assets/gmail.png" alt="" srcset=""></div>
        <div class ='icons'><img src="../assets/logotipo-do-github.png" alt="" srcset=""></div>
        <div class ='icons'><a href="http://"><img src="../assets/instagram.png" alt="" srcset=""></a> </div>
    </footer>
    
</div>
</template>
<style scoped>
#footer img{
    color: rgb(255, 255, 255);
    width: 2em;
}
footer {
    bottom: 0;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    background-color: #34353E;
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: center;
}
</style>

<script>
export default {
  name: 'HelloWorld',
}
</script>