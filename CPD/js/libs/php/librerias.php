<?php
require 'conexion.php';

$concurso = $_POST['concurso'];
$anio = $_POST['anio'];

function Buscar_Concursantes($concurso,$anio){
    //Creamos la conexión con la función anterior
    $conexion = connectDB();

    //generamos la consulta
    $sql = "SELECT Titulo, Tipo, Premio FROM obras WHERE Concurso=$concurso  AND Anio=$anio";

    mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

    if(!$result = mysqli_query($conexion, $sql)) die(); //si la conexión cancelar programa

    $rawdata = array(); //creamos un array

    //guardamos en un array multidimensional todos los datos de la consulta
    $i=0;

    while($row = mysqli_fetch_array($result))
    {
        $rawdata[$i] = array('Titulo' => $row['Titulo'],  'Tipo' => $row['Tipo'], 'Premio' => $row['Premio']);;
        $i++;
    }

    disconnectDB($conexion); //desconectamos la base de datos

    return $rawdata; //devolvemos el array
}

$myArray = Buscar_Concursantes($concurso,$anio);
echo json_encode($myArray);
?>