<?php
require 'conexion.php';

function Buscar_Obras(){

    //Creamos la conexión con la función anterior
    $conexion = connectDB();

    //generamos la consulta
    $sql  = "SELECT id, Titulo, Id_Autor FROM obras";
   
    mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

    if(!$result = mysqli_query($conexion, $sql)) die(); //si la conexión cancelar programa

    $rawdata = array(); //creamos un array

    //guardamos en un array multidimensional todos los datos de la consulta
    $i=0;

    while($row = mysqli_fetch_array($result))
    {   
        $Autor = $row['Id_Autor'];

        $sql_autores = "SELECT Nombre, Apellido FROM autor WHERE id=$Autor";
        
        if(!$result1 = mysqli_query($conexion, $sql_autores)) die();
       
        while ($row1 = mysqli_fetch_array($result1)){
            $nombre = $row1['Nombre']." ".$row1['Apellido'];
        }


        $rawdata[$i] = array('Id' => $row['id'],
                             'Nombre' => $row['Titulo'],
                             'Autor' => $nombre
                             );
        $i++;
    }

    disconnectDB($conexion); //desconectamos la base de datos

    return $rawdata; //devolvemos el array
}

$myArray = Buscar_Obras();
echo json_encode($myArray);

?>