<?php
require 'conexion.php';

$concurso = $_POST['concurso'];
$anio = $_POST['anio'];

function Buscar_Concursantes($concurso,$anio){

    //Creamos la conexión con la función anterior
    $conexion = connectDB();
    $tabla = $concurso.'_'.$anio;

    //generamos la consulta
    $sql  = "SELECT obras.id, obras.Titulo, obras.Tipo, obras.Premio, obras.Lugar, obras.Id_Autor, obras.Id_Colaborador_1, obras.Id_Colaborador_2 FROM obras RIGHT JOIN $tabla ON obras.Titulo=$tabla.Titulo";

    mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

    if(!$result = mysqli_query($conexion, $sql)) die(); //si la conexión cancelar programa

    $rawdata = array(); //creamos un array

    //guardamos en un array multidimensional todos los datos de la consulta
    $i=0;

    while($row = mysqli_fetch_array($result))
    {   
        $Titulo = "'".$row['Titulo']."'";
        $Id_Autor = $row['Id_Autor'];
        $col_1 = $row['Id_Colaborador_1'];
        $col_2 = $row['Id_Colaborador_2'];

        $sql_autores = "SELECT Nombre, Apellido FROM autor WHERE id=$Id_Autor";

        if(!$result1 = mysqli_query($conexion, $sql_autores)) die();
        $autores = "";

        while ($row1 = mysqli_fetch_array($result1)){
            $autores .= $row1['Nombre'] ." ". $row1['Apellido'];
        }

        if($col_1!=NULL){
            $sql_autores = "SELECT Nombre, Apellido FROM autor WHERE id=$col_1";

            if(!$result1 = mysqli_query($conexion, $sql_autores)) die();

            while ($row1 = mysqli_fetch_array($result1)){
                $autores .= ", ". $row1['Nombre'] ." ". $row1['Apellido'];
            }

            if($col_2!=NULL){
                $sql_autores = "SELECT Nombre, Apellido FROM autor WHERE id=$col_2";

                if(!$result1 = mysqli_query($conexion, $sql_autores)) die();

                while ($row1 = mysqli_fetch_array($result1)){
                    $autores .= ", ". $row1['Nombre'] ." ". $row1['Apellido'];
                }

            }
        }

        $Titulo = substr($Titulo,1);
        $Titulo = substr($Titulo, 0,-1);
        $rawdata[$i] = array('id' => $row[id],'Titulo' => $Titulo,  'Tipo' => $row['Tipo'], 'Premio' => $row['Premio'], 'Lugar' => $row['Lugar'], 'Autores' => $autores);
        $i++;
    }

    disconnectDB($conexion); //desconectamos la base de datos

    return $rawdata; //devolvemos el array
}

$myArray = Buscar_Concursantes($concurso,$anio);
echo json_encode($myArray);

?>