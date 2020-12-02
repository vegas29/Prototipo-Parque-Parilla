<?php

$nombre = $_POST['nombre'];
$correo = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

$destino = "alejousco0708@gmail.com";
$asunto = "Correo desde la pagina web";

$carta = "De:  $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Telefono: $telefono \n";
$carta .+ "Mensaje: $mensaje";

mail($destino, $asunto, $carta);
header('location: mensaje.html');


?>