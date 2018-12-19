$(document).ready(function(){
	
	//CLICK AL INICIAR UNA TAREA
	$('.btn-task').on('click', function(){
		$(this).val("Hecho");
		$(this).attr("data-task-state","active");
		// const taskState = document.querySelector(`input[data-task-state="active"]`);
		$(this).css('background-color','#bdb37f');

		var hh = Number($('#hh').val());
		var mm = Number($('#mm').val());
		var ss = Number($('#ss').val());

		if(hh == 0 && mm == 0 && ss == 0){
			alert("Establezca un tiempo");
		} else {
			let intervalHH = setInterval(function(){ 
				--hh;
				if(hh == 0){
					clearInterval(intervalHH);
					document.getElementById("audioSlowSpringBoard").play();
					$("#btnStop").show();
				}
				$('#hh').empty().val(hh);
			}, 3600000);

			let intervalMM = setInterval(function(){ 
				--mm;
				if(mm == 0){
					clearInterval(intervalMM);
					document.getElementById("audioSlowSpringBoard").play();
					$("#btnStop").show();
				}
				$('#mm').empty().val(mm);
			}, 60000);

			let intervalSS = setInterval(function(){ 
				--ss;
				if(ss == 0){
					clearInterval(intervalSS);
					playNotificationSound("audioSlowSpringBoard");
					$(this).attr("data-task-state","inactive");
					$(this).css('background-color','#F00');
					$("#btnStop").show();
				}
				$('#ss').empty().val(ss);
			}, 1000);
		}

		// alert(hh + ' ' + mm);
	});

	//PARECE QUE NO SE USA
	$("#btnStart").click(function(){
		//debugger;
		var tiempo = Number($("#tiempo").val());
		
		if(tiempo == 0){
			alert("Establezca un tiempo");
		} else {
			interval = setInterval(function(){ 
				--tiempo;
				if(tiempo == 0){
					clearInterval(interval);
					
					$("#btnStop").show();
				}
				$("#tiempo_restante").empty().append(tiempo + ' minutos');
			}, 60000);
		}
	});

	//PARA ALARMAS LARGAS
	$("#btnStop").click(function(){
		document.getElementById("audioSlowSpringBoard").pause();
		$("#btnStop").hide();
		$("#tiempo").focus();
	});

});

function taskFinished() {
	alert('Tarea terminada');
}

function playNotificationSound(audioId) {
	document.getElementById(audioId).play();
}