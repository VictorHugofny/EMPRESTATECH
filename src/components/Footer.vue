<template>
<div>
    <footer id = "footer">
        <img src="../assets/gmail.png" alt="" srcset="">
        <img src="../assets/logotipo-do-github.png" alt="" srcset="">
        <a href="http://"><img src="../assets/instagram.png" alt="" srcset=""></a> 
    </footer>
    
</div>
</template>
<style>
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