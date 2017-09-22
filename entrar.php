<?php session_start (); ?>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<link href="img/paloma.ico" rel="shortcut icon" type="image/x-icon"/>
	<script src="js/jquery-3.1.1.min.js"></script>
	<title>Tasks App - Iniciar sesión</title>
	<script src="js/bootstrap.js"></script>
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="css/estilos_login.css" />
</head>
<body id="bootstrap_overrides">
	<div class="row">
		<div class="col-sm-12">
			<center><h1 class="name-app">Tasks App</h1></center>
		</div>
	</div>

	<div class="row">
		<div class="col-sm-4"></div>
		<div class="col-sm-4 parent-vertical-align">
			<div class="table-responsive child-vertical-align">
				<table class="table">
					<form method="post" action="script_validar_acceso.php" id="form_entrar">
					<tr><td>
						<input class="input-box first-input" type="text" placeholder="Usuario o Correo electrónico" name="usu_ema" required>
					</td></tr>
					<tr><td>
						<input class="input-box" type="password" placeholder="Password" name="pass" required>
					</td></tr>
					<tr><td>
						<input type="submit" value="Iniciar sesión" name="iniciar" id="iniciar" class="btn btn-success btn-center">
					</td></tr>
					<tr><td>
						<p class="text-center">
							<a class="letra-gral" href="">¿Olvidaste tu contraseña?<a>
						</p>
					</td></tr>
					</form>
				</table>
			</div>
		</div>
		<div class="col-sm-4"></div>
	</div>
</body>
</html>