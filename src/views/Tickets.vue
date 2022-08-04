<template>


<div class = 'dashboard'>
    <div class = 'nav'>
        <h2>Todos os tickets</h2>
    </div>

    <div class="content">
        <table class="rTable">
            <thead>
                <tr>
                    <th class = 'logo'></th>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th class = 'data'>Data</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td class = 'logo'><img src="../assets/eu.jpeg" alt=""></td>
                    <td> Victor Hugo</td>
                    <td>TROCA</td>
                    <td class = 'data'>02/10</td>
                </tr>

                <tr>
                    <td class = 'logo'><img src="../assets/luva.jpg" alt=""></td>
                    <td> Luva de pedreiro</td>
                    <td>PRIMEIRO</td>
                    <td class = 'data'>01/10</td>
                </tr>

                <tr>
                    <td class = 'logo'><img src="../assets/casimiro.jpg" alt=""></td>
                    <td>Casimiro Miguel</td>
                    <td>TROCA</td>
                    <td class = 'data'>02/10</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<style scoped>

img{
    border-radius: 50px;
    width: 3.1rem;
    height: 3.1rem;
    margin-right: 1rem;
}
*{margin:0; padding: 0; box-sizing: border-box;}
.dashboard{
    margin: 1rem;
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
.content{display:flex; margin: auto;}

.rTable{width: 100%; text-align: left;}
    .rTable thead{font-weight: bold; color:rgb(210, 210, 210);}
    .rTable th , .rTable td{ padding: 4px 0; padding-bottom: 8px; padding-top: 8px; }
    .rTable td{
        margin-right: 4rem;
    }
    .rTable th{
        padding-left: 0rem;
        font-size: 1.2rem;
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
tr:hover{
    background: rgba(0, 0, 0, 0.246);
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
thead, tbody{
    border-bottom: 5px solid rgba(0, 0, 0, 0.23);
}
thead tr, tbody td {
    text-align: -webkit-left;
    font-size: 1rem;
    max-width: 20px;
    text-align:center;
    background: #2b2c334c;
    border-radius: 5px;
    border-bottom: 5px solid rgba(0, 0, 0, 0.23);
    
}

.rTable tbody tr td[data-v-b6cefbc6]:nth-child(1) {
    width: 2%;
}


.logo{
    max-width: 10%;
}
.content{
    max-width: 80%;
}


</style>

