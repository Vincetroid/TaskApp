<!DOCTYPE html>
<html>
<head>
	<title>Task App</title>
	<meta charset="utf-8">
	<link href="img/paloma.ico" rel="shortcut icon" type="image/x-icon"/>
	<script src="js/jquery-3.1.1.min.js"></script>
	<script src="js/bootstrap.js"></script>
	<script src="js/home.js"></script>
	<script src="js/sideMenu.js"></script>
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="css/home.css" />
	<link rel="stylesheet" href="css/animate.css">
	<link rel="stylesheet" href="css/font-awesome.min.css" />
</head>
<body id="bootstrap_overrides">
	
	<div id="side_menu">
		<i class="fa fa-plus-circle" id="btn-add" aria-hidden="true"></i>
		<i class="fa fa-history" id="btn-log" aria-hidden="true"></i>
		<i class="fa fa-sign-out" id="btn-log-out" aria-hidden="true"></i>
		<i class="fa fa-cog" id="btn-config" aria-hidden="true"></i>
	</div>

	<div class="row">
		<div class="col-sm-12">
			<center><h1 class="name-app">Task App</h1></center>
		</div>
	</div>

	<img src="img/btn_icon.png" id="menu_lines" width="32px" height="32px" onclick="view.renderMenu()">

	<div class="row color task">
		<div class="col-sm-7">
			<p>
				Compararse con otros es de perdedores 
			</p>
		</div>
		<div class="col-sm-4">
			<input type="number" class="hrs" id="hh00" min="0" max="59" placeholder="hh" step="1" valueAsNumber required>
			<input type="number" class="min" id="mm00" min="0" max="59" placeholder="mm" step="1" valueAsNumber required>
			<input type="number" class="seg" id="ss00" min="0" max="59" placeholder="ss" step="1" valueAsNumber>
			<input type="button" class="btn-task" value="Iniciar" onkeypress="console.log('evaluar enter, poner background css que tiene active y hacer acciones')">
		</div>
		<div class="col-sm-1"></div>
	</div>

	<div class="row color task">
		<div class="col-sm-7">
			<p>No seas miserables por quien eres</p>
		</div>
		<div class="col-sm-4">
			<input type="number" class="hrs" id="hh00" min="0" max="59" placeholder="hh" step="1" valueAsNumber required>
			<input type="number" class="min" id="mm00" min="0" max="59" placeholder="mm" step="1" valueAsNumber required>
			<input type="button" class="btn-task" value="Iniciar">

		</div>
		<div class="col-sm-1"></div>
	</div>

	<div class="row color task">
		<div class="col-sm-7">
			<p >Acéptate como eres</p>
		</div>
		<div class="col-sm-4">
			<input type="number" class="hrs" id="hh00" min="0" max="59" placeholder="hh" step="1" valueAsNumber>
			<input type="number" class="min" id="mm00" min="0" max="59" placeholder="mm" step="1" valueAsNumber>
			<input type="button" class="btn-task" value="Iniciar">

		</div>
		<div class="col-sm-1"></div>
	</div>

	<div class="row color task">
		<div class="col-sm-7">
			<p >Compite contra ti mismo</p>
		</div>
		<div class="col-sm-4">
			<input type="number" class="hrs" id="hh00" min="0" max="59" placeholder="hh" step="1" valueAsNumber required>
			<input type="number" class="min" id="mm00" min="0" max="59" placeholder="mm" step="1" valueAsNumber required>
			<input type="button" class="btn-task" value="Iniciar">

		</div>
		<div class="col-sm-1"></div>
	</div>

	<div class="row color task">
		<div class="col-sm-7">
			<p >Forjar acero cada día</p>
		</div>
		<div class="col-sm-4">
			<input type="number" class="hrs" id="hh00" min="0" max="59" placeholder="hh" step="1" valueAsNumber required>
			<input type="number" class="min" id="mm00" min="0" max="59" placeholder="mm" step="1" valueAsNumber required>
			<input type="button" class="btn-task" value="Iniciar">

		</div>
		<div class="col-sm-1"></div>
	</div>

	<div class="row color task">
		<div class="col-sm-7">
			<p >Sé constante</p>
		</div>
		<div class="col-sm-4">
			<input type="number" class="hrs" id="hh00" min="0" max="59" placeholder="hh" step="1" valueAsNumber required>
			<input type="number" class="min" id="mm00" min="0" max="59" placeholder="mm" step="1" valueAsNumber required>
			<input type="button" class="btn-task" value="Iniciar">
		</div>
		<div class="col-sm-1"></div>
	</div>

	<div class="row color task">
		<div class="col-sm-7">
			<input type="text" class="tas" id="hh00" placeholder="Nueva tarea">
		</div>
		<div class="col-sm-4">
			<input type="number" class="hrs" id="hh00" min="0" max="59" placeholder="hh" step="1" valueAsNumber required>
			<input type="number" class="min" id="mm00" min="0" max="59" placeholder="mm" step="1" valueAsNumber required>
			<input type="button" class="btn-task" value="Iniciar">
		</div>
		<div class="col-sm-1"></div>
	</div>
		
	<audio id="alarm">
		<source src="playinggod.mp3" type="audio/mpeg">
	</audio>	

	<audio id="audioTrompeta">
	  <source src="TrompetaMilitar.mp3" type="audio/mpeg">
	</audio>
</body>
</html>