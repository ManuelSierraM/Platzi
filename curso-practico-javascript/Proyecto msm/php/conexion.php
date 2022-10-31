function conex (){

    $usu1 = $_POST['usu1'];
	$contrasena = $_POST['contraseña'];
	echo "hola mundo";
	//conectar a base de datos
	$user="root";
	$pass="";
	$server= "localhost";
	$bd="bd_dyalogo_prueba";
	$conectar=mysqli_connect($server, $user, $pass, $bd) or die ("ERROR AL CONECTAR A LA BASE DE DATOS".mysqli_connect_error());
	mysql_select_db($bd,$conectar);

}