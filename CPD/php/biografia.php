<?php
require 'conexion.php';

$id = $_POST['id'];

function Buscar_Bio($id){

    //Creamos la conexión con la función anterior
    $conexion = connectDB();

    //generamos la consulta
    $sql  = "SELECT Nombre, Apellido, Imagen, Descripcion, Web FROM autor WHERE id=$id";
   
    mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

    if(!$result = mysqli_query($conexion, $sql)) die(); //si la conexión cancelar programa

    $rawdata = array(); //creamos un array

    //guardamos en un array multidimensional todos los datos de la consulta
    $i=0;

    while($row = mysqli_fetch_array($result))
    {   $nombre = $row['Nombre']." ".$row['Apellido'];

        $rawdata[$i] = array('Nombre' => $nombre,
                             'Imagen' => $row['Imagen'],
                             'Web' => $row['Web'],
                             'Descripcion' => $row['Descripcion']
                             );
        $i++;
    }

    disconnectDB($conexion); //desconectamos la base de datos

    return $rawdata; //devolvemos el array
}

$myArray = Buscar_Bio($id);
echo json_encode($myArray);

?>