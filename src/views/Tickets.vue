<template>


<div class = 'dashboard'>
    <div class = 'nav'>
        <h2>Todos os tickets</h2>
    </div>

    <div class="content">
        <table class="rTable">
            <thead>
                <tr class = 'tipos'>
                    <th class = 'logo'></th>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th class = 'data'>Data</th>
                </tr>
            </thead>

            <tbody>
                <tr class='linha'>
                    <td class = 'logo'><img src="../assets/eu.jpeg" alt=""></td>
                    <td> Victor Hugo</td>
                    <td>TROCA</td>
                    <td class = 'data'>02/10</td>
                </tr>

                <tr class='linha'>
                    <td class = 'logo'><img src="../assets/luva.jpg" alt=""></td>
                    <td> Luva de pedreiro</td>
                    <td>PRIMEIRO</td>
                    <td class = 'data'>01/10</td>
                </tr>

                <tr class='linha'>
                    <td class = 'logo'><img src="../assets/casimiro.jpg" alt=""></td>
                    <td>Casimiro Miguel</td>
                    <td>TROCA</td>
                    <td class = 'data'>02/10</td>
                </tr>

                <tr class='linha'>
                    <td class = 'logo'><img src="https://i.pinimg.com/550x/9e/46/d2/9e46d2905d70d779a552ff036d5e5b1e.jpg" alt=""></td>
                    <td>Mario Mario</td>
                    <td>PRIMEIRO</td>
                    <td class = 'data'>01/12</td>
                </tr>

            </tbody>
        </table>
    </div>
</div>
</template>

<style scoped>
.tipos{
    background: rgba(0, 0, 0, 0.241);
}
img{
    border-radius: 50px;
    width: 3.1rem;
    height: 3.1rem;
}
*{margin:0; padding: 0; box-sizing: border-box;}

.dashboard{
    margin: auto;
    padding: 0px;
    margin-top: 2rem;
    padding: 1.6rem;
    background: #34353E;
    border-radius: 25px;
}
.nav{
    text-align: left;
    padding-bottom: 2rem;
    color: #ccc;
    
}
.content{display:flex; margin: auto; border-radius: 25px;}

.rTable{width: 100%; text-align: left;}
    .rTable thead{font-weight: bold; color:rgb(210, 210, 210);}
    .rTable th , .rTable td{ padding: 4px 0; padding-bottom: 10px; padding-top: 10px; }
    .rTable td{
        margin-right: 4rem;
    }
    .rTable th{
        padding-left: 0rem;
        font-size: 1.25rem;
    }
    
@media screen and (max-width: 500px){
    .data{
        display: none;
    }
    img{
        display: none;
    }
    .logo{
        display:none;
    }
}
.linha:hover{
    background: rgba(0, 0, 0, 0.189);
    box-shadow: 8px 12px 15px 0px rgba(0, 0, 0, 0.69);
    padding: 0%;
    margin: 0%;
}
@media only screen and (min-width: 1200px){
    .content{width:80%;}
    .rTable tbody tr td:nth-child(1){width:10%;}
    .rTable tbody tr td:nth-child(2){width:20%;}
    .rTable tbody tr td:nth-child(3){width:30%;}
    .rTable tbody tr td:nth-child(4){width:10%;}
    .rTable tbody tr td:nth-child(5){width:30%;}
    
    
}

@media only screen and (min-width: 1600px){
    
    .dashboard{
        margin-left: 12vw;
        margin-right: 12vw;
    }
}

@media only screen and (min-width: 1800px){
    
    .dashboard{
        margin-left: 18vw;
        margin-right: 18vw;
    }
}

thead tr, tbody td {
    text-align: -webkit-left;
    font-size: 1rem;
    max-width: 20px;
    text-align:center;
    border-bottom: 5px solid rgba(0, 0, 0, 0.23); 
}

.content{
    background: #34353E;
}
.rTable tbody tr td[data-v-b6cefbc6]:nth-child(1) {
    width: 4%;
    padding-left:3vw;
}


.logo{
    max-width: 10%;
}
.content{
    max-width: 80%;
}

table {
    border-spacing: 0px;
    border-radius: 25px;
}

</style>

