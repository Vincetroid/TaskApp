<!DOCTYPE html>
<html>
<head>
	<title>Task App</title>
	<meta charset="utf-8">
	<link href="img/paloma.ico" rel="shortcut icon" type="image/x-icon"/>
	<script src="js/jquery-3.1.1.min.js"></script>
	<script src="js/bootstrap.js"></script>
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="css/home.css" />
</head>
<body id="bootstrap_overrides">
	<div class="row">
		<div class="col-sm-12">
			<center><h1 class="name-app">Task App</h1></center>
		</div>
	</div>

	<div class="row color">
		<div class="col-sm-6">
			<ol>
				<li><p class="task">Compararse con otros es de perdedores</p></li>
				<li><p class="task">No seas miserables por quien eres</p></li>
				<li><p class="task">Acéptate como eres</p></li>
				<li><p class="task">Compite contra ti mismo</p></li>
				<li><p class="task">Forjar acero cada día</p></li>
				<li><p class="task">Sé constante</p></li>
				<li><p class="task">No la stalkees</p></li>
				<li><p class="task">No inviertas demasiado emocionalmente en ellas</p></li>
				<li><p class="task">Si eres inseguro todo está perdido</p></li>
				<li><p class="task">Sé fiel a quien eres</p></li>
				<li><p class="task">Domínate a ti mismo</p></li>
				<li><p class="task">Cuando estés bien contigo estarás bien con las chicas</p></li>
			</ol>
		</div>
		<div class="col-sm-4">
			<!-- <input type="time" name="time" id="time" required> -->
			<input type="number" class="hrs" id="hh00" min="0" max="59" placeholder="hh" step="5" valueAsNumber required>
			<input type="number" class="min" id="mm00" min="0" max="59" placeholder="mm" step="5" valueAsNumber required>
			<input type="button" class="" value="Iniciar">

		</div>
		<div class="col-sm-1">
		</div>
	</div>


</body>
</html>