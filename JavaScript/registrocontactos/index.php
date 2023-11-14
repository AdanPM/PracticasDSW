<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="formulario.css">
</head>
<body>
    <?php
    $servidor = "localhost";
    $usuario = "root";
    $clave = "";
    $bd = "registrocontactos";
    $conexion = mysqli_connect($servidor,$usuario,$clave,$bd);

    ?>
    <form action="index.php" method="post">
        <div class="container">
            <div class="row" style="text-align: center;">
                <h1>BIENVENIDO</h1>
                <h3>REGISTRO</h3>
            </div>
            <div class="row" style="text-align: center;">
                <h3>Favor de rellenar los siguientes campos</h3>
                <table class="table table-success table-striped" style="width: 75%;" align="center">
                    <tr>
                        <td>Nombres: </td>
                        <td>Apellidos: </td>
                    </tr>
                    <tr>
                        <td><input type="text" class="form-control" id="txtnombre" placeholder="Ingrese nombre" name="nombre"></td>
                        <td><input type="text" disabled class="form-control" id="txtapellidos" placeholder="Ingrese apellidos" name="apellidos"></td>
                    </tr>
                    <tr>
                        <td>Edad: </td>
                        <td>Sexo: </td>
                    </tr>
                    <tr>
                        <td><input type="number" disabled class="form-control" id="txtedad" min="18" max="60" placeholder="Ingrese su edad" name="edad"></td>
                        <td><select class="form-control" id="sexo" name="sexo" placeholder="Seleccione su sexo" disabled>
                            <option value="0">SELECCIONE</option>
                            <option value="Hombre">Hombre</option>
                            <option value="Mujer">Mujer</option>
                            <option value="otro">otro</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td>Correo: <input type="email" class="form-control" id="correo" placeholder="Ingrese su correo" name="correo"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Ciudad: </td>
                        <td>Celular: </td>
                    </tr>
                    <tr>
                        <td>
                            <select class="form-control" list="listcacd" id="ciudad" disabled name="ciudad" placeholder="Selecciona ciudad">
                                <option value="0">SELECCIONE</option>
                                <option value="Tijuana">Tijuana</option>
                                <option value="Mexicali">Mexicali</option>
                                <option value="Ensenada">Ensenada</option>
                                <option value="Tecate">Tecate</option>
                                <option value="Rosarito">Rosarito</option>
                            </select></td>
                        <td><input type="text" class="form-control" id="txttelefono" max="9" placeholder="000-000-0000" name="telefono"></td>
                    </tr>
                    <tr>
                        <td>Transporte: </td>
                        <td>Comentarios: </td>
                    </tr>
                    <tr>
                        <td>
                            <select class="form-control" id="transporte" disabled name="transporte" placeholder="Selecciona si desea transporte">
                                <option value="0">SELECCIONE</option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </td>
                        <td><textarea class="form-control" id="comentarios" name="comentarios" rows="3"></textarea></td>
                    </tr>
                    <tr>
                        <td>Camisa: </td>
                        <td id="talla">Talla: </td>
                    </tr>
                    <tr>
                        <td>
                            <select class="form-control" id="camisa" name="camisa" disabled placeholder="Selecciona si desea camisa">
                                <option value="0">SELECCIONE</option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </td>
                        <td>
                            <select class="form-control" id="tallaselect" name="talle" disabled placeholder="Selecciona si desea transporte">
                                <option value="0">SELECCIONE</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2"><input type="submit" value="GUARDAR" name="registro"></td>
                    </tr>
                </table>
            </div>
        </div>
    </form>
</body>
<?php
if(isset($_POST['registro']))
{
    $nombre=$_POST['nombre'];
    $telefono=$_POST['telefono'];
    $correo=$_POST['correo'];
    $comentarios=$_POST['comentarios'];
    
    $guardar = "INSERT INTO contactos VALUES('','$nombre','$telefono','$correo','$comentarios')";
    
    if($ejecutar = mysqli_query($conexion,$guardar))
    {
        ?>
            <script type="text/javascript">
                alert("Datos guardados");
            </script>
        <?php
    }
    else
    {
        ?>
        <script type="text/javascript">
            alert("Error al guardar los datos");
        </script>
    <?php
    }


}
?>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</html>