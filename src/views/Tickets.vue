<template>


<div class = 'dashboard'>
    <div class = 'nav'>
        <h2>Todos os tickets</h2>
    </div>

    <div class="content">
        <table class="rTable">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th class = 'data'>Data</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td><img src="../assets/eu.jpeg" alt=""> Victor Hugo</td>
                    <td>DEVOLUÇÃO</td>
                    <td class = 'data'>02/10/2022</td>
                </tr>

                <tr>
                    <td> <img src="../assets/luva.jpg" alt="">Luva de pedreiro</td>
                    <td>PRIMEIRO</td>
                    <td class = 'data'>01/10/2022</td>
                </tr>

                <tr>
                    <td><img src="../assets/casimiro.jpg" alt="">Casimiro Miguel</td>
                    <td>TROCA</td>
                    <td class = 'data'>02/10/2022</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<style scoped>
img{
    border-radius: 50px;
    width: 3rem;
    height: 3rem;
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

.rTable{width: 100%; text-align: center;}
    .rTable thead{font-weight: bold; color:rgb(210, 210, 210);}
    .rTable th , .rTable td{ padding: 4px 0; padding-bottom: 8px; padding-top: 8px; }
    .rTable td{
        border-bottom: 2px solid black;
        margin-right: 4rem;
    }
    .rTable th{
        padding-left: 0rem;
        font-size: 1.2rem;
    }
    
@media screen and (max-width: 480px){
    .data{
        display: none;
    }
    img{
        display: none;
    }
}

@media only screen and (min-width: 1200px){
    .content{width:100%;}
    .rTable tbody tr td:nth-child(1){width:10%;}
    .rTable tbody tr td:nth-child(2){width:30%;}
    .rTable tbody tr td:nth-child(3){width:20%;}
    .rTable tbody tr td:nth-child(4){width:10%;}
    .rTable tbody tr td:nth-child(5){width:30%;}
}

thead tr, tbody td {
    text-align: -webkit-left;
    font-size: 1rem;
    max-width: 20px;
    text-align:left;
}

tr:hover {
    background: rgba(255, 255, 255, 0.135);
}

</style>

