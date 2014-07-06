<?php

require("dbinfo.php");

function buscar($concurso, $anio){

 $connection=mysql_connect ($host, $username, $password);
  if (!$connection) {
    die('Not connected : ' . mysql_error());
  }

 $db_selected = mysql_select_db($database, $connection);
  if (!$db_selected) {
    die ('Can\'t use db : ' . mysql_error());
  }

  $query = "SELECT Titulo, Tipo, Premio FROM obras WHERE Concurso=$concurso  AND Anio=$anio";

 $result = mysql_query($query);
 if (!$result) {
   die('Invalid query: ' . mysql_error());
 }

 $datos = array();
 $i=0;

 while ($row = @mysql_fetch_assoc($result)) {

    $datos[i]=array('Titulo' => $row['Titulo'],  'Tipo' => $row['Tipo'], 'Premio' => $row['Premio']);
    i++
  }

 return $datos;

}

$concurso = "'"."Bienal Nacional"."'";
$anio = 2013;

$myArray = buscar($concurso,$anio);
echo json_encode($myArray);
?>