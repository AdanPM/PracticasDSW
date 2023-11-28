<!DOCTYPE html>
<html lang="en">
<head>
    <!-- enlace a bootstrap, css y fuentes de google -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="css/registro.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&family=Montserrat:wght@300&display=swap" rel="stylesheet">
    <title>Registro</title>

    <!-- configuracion de estilos -->
    <style>
   * {
    margin: 0;
    padding: 0;
    font-family: 'Bebas Neue', sans-serif;
    font-family: 'Exo 2', sans-serif;
    font-family: 'Nosifer', sans-serif;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
} 
a{
    text-decoration: none;
    list-style: none;
}  
table{
    background-color: rgba(100, 100, 100, 0.4);
}
td{
    color:white;
}
p{
            font-family: 'Montserrat', sans-serif;
        }
        table,.col,td,input{
            font-weight: bold;
            font-family: 'Josefin Sans', sans-serif;
            font-family: 'Montserrat', sans-serif;
        }
</style>
</head>
<?php
//variables de conexión y conexión a base de datos
    $servidor = "localhost";
    $usuario = "id21580482_root";
    $clave = "Islandia_1";
    $bd = "id21580482_registroislandia";
    $conexion = mysqli_connect($servidor,$usuario,$clave,$bd);
    ?>

<body>
    <!-- contener y navbar con enlaces a las otras páginas -->
<div class="container">
<header class="header">
        <div class="menu contenedor">
                    <a href="index.html"><img src="./images/logo.png" class="logo" /></a>
                    <input type="checkbox" id="menu" />
                    <label for="menu">
                        <img src="./images/menu.png" class="menu-icono" alt="">
                    </label>
                    <nav class="navbar">
                        <ul>
                            <li><a href="Historia.html">Historia</a></li>
                            <li><a href="Turistico.html">Lugares Turisticos</a></li>
                            <li><a href="Platillos.html">Platillos Tipicos</a></li>
                            <li><a href="Contacto.html">Contacto</a></li>
                            <li><a href="Registro.php">Registro</a></li>
                            <li><a href="index.html">Salir</a></li>
                        </ul>
                    </nav>
        </div>
        <?php

?>
</header>
<!-- Configuracion de filas y columnas -->
    <div class="row">
        <div class="col">
            <h1 style="color:white; font-weight:bold">Usuarios Registrados</h1>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <!-- tabla de usuarios -->
        <table class="table table-dark table-striped">
            <thead>
                <td>Nombres</td>
                <td>Apellidos</td>
                <td>Edad</td>
                <td>Género</td>
                <td>Teléfono</td>
                <td>Ciudad</td>
                <td>Transporte</td>
                <td>Camisa</td>
                <td>Talla</td>
                <td>Comentarios</td>
            </thead>
           <?php
           //consula select * de la tabla datos
                $sql = "SELECT * from datos";
                $resultado = mysqli_query($conexion,$sql);
            ?>
             <?php
             //ciclo que imprime los datos de la base de datos, siempre y cuando existan
                        while($usuario=mysqli_fetch_assoc($resultado))
                        {
                            ?>
                                <tr>
                                    <td><?php echo $usuario['nombre']?></td>
                                    <td><?php echo $usuario['apellido']?></td>
                                    <td><?php echo $usuario['edad']?></td>
                                    <td><?php echo $usuario['genero']?></td>
                                    <td><?php echo $usuario['telefono']?></td>
                                    <td><?php echo $usuario['ciudad']?></td>
                                    <td><?php echo $usuario['transporte']?></td>
                                    <td><?php echo $usuario['camisa']?></td>
                                    <td><?php echo $usuario['talla']?></td>
                                    <td><?php echo $usuario['comentarios']?></td>
                                </tr>
                            <?php
                        }
                        ?>
           </table>
        </div>
    </div>
</div>



</body>


<!-- enlace a JS de boostrap -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</html>