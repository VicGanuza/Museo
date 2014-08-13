<?php
require 'conexion.php';

$id = $_POST['id'];

function Buscar_Obra($id){

    //Creamos la conexión con la función anterior
    $conexion = connectDB();

    //generamos la consulta
    $sql  = "SELECT id, Titulo, Descripcion, Link_descarga, Descripcion_Corta, OnLine, ";
    $sql .= "Duracion, Tamanio, Unidad_tam, Formato, Dimension_imagen, ";
    $sql .= "Id_Autor, Id_Colaborador_1, Id_Colaborador_2 ";
    $sql .= "FROM obras WHERE id=$id";

    mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

    if(!$result = mysqli_query($conexion, $sql)) die(); //si la conexión cancelar programa

    $rawdata = array(); //creamos un array

    //guardamos en un array multidimensional todos los datos de la consulta
    $i=0;

    while($row = mysqli_fetch_array($result))
    {   
        $Titulo = "'".$row['Titulo']."'";
        $Autor = $row['Id_Autor'];
        $sql_autores = "SELECT Nombre, Apellido, Nacimiento, Descripcion_Corta, Imagen FROM autor WHERE id=$Autor";
        if(!$result1 = mysqli_query($conexion, $sql_autores)) die();
        $autor_nomb = "";
        $desc_autores = "";
        $col_1 = $row['Id_Colaborador_1'];
        $col_2 = $row['Id_Colaborador_2'];

        while ($row1 = mysqli_fetch_array($result1)){
            $imagen = $row1['Imagen'];
            $autor_nomb .= $row1['Nombre'] ." ". $row1['Apellido'];
            $desc_autores .= $row1['Nacimiento'] ." <br> ". $row1['Descripcion_Corta'];
        }

        if($col_1!=NULL){
            $colaboradores='';
            $sql_colab = "SELECT Nombre, Apellido FROM autor WHERE id=$col_1";

            if(!$result2 = mysqli_query($conexion, $sql_colab)) die();

            while ($row2 = mysqli_fetch_array($result2)){
                $colaboradores .= $row2['Nombre'] ." ". $row2['Apellido'];
            }

            if($col_2!=NULL){
                $sql_colab = "SELECT Nombre, Apellido FROM autor WHERE id=$col_2";

                if(!$result2 = mysqli_query($conexion, $sql_colab)) die();

                while ($row2 = mysqli_fetch_array($result2)){
                    $colaboradores .= ", ". $row2['Nombre'] ." ". $row2['Apellido'];
                }

            }
        }

        $sql_codec ="SELECT Tipo FROM codec WHERE Obra=$Titulo";
        if(!$result2 = mysqli_query($conexion, $sql_codec)) die();
        $codecs="";

        while ($rowc = mysqli_fetch_array($result2)){
            $codecs .= $rowc['Tipo'] . ", ";
        }

        $codecs = substr($codecs, 0,-2);

        $tam_archivo="";

        $tamanio = $row['tamanio'];
        $unidad = $row['Unidad_tam'];

        if (($tamnio!=null)&($unidad!=null)){
          $tam_archivo = $row['Tamanio']." ".$row['Unidad_tam'];
        }

        $Titulo = substr($Titulo,1);
        $Titulo = substr($Titulo, 0,-1);

        $rawdata[$i] = array('Id' => $row['id'],
                             'Descripcion' => $row['Descripcion'],
                             'Imagen' => $imagen,
                             'Descripcion_Autor' => $desc_autores,
                             'Descarga' => $row['Link_descarga'],
                             'Autor' => $autor_nomb,
                             'Titulo' => $Titulo,
                             'Descripcion_Corta' => $row['Descripcion_Corta'],
                             'Frame_obra' => $row['OnLine'],
                             'Colaboradores' => $colaboradores,
                             'Duracion' => $row['Duracion'],
                             'Formato' => $row['Formato'],
                             'Codecs' => $codecs,
                             'Dimension_imagen' => $row['Dimension_imagen'],
                             'Tamanio' => $tam_archivo,
                             'Id_autor' => $Autor
                             );
        $i++;
    }

    disconnectDB($conexion); //desconectamos la base de datos

    return $rawdata; //devolvemos el array
}

$myArray = Buscar_Obra($id);
echo json_encode($myArray);

?>