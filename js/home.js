$(document).ready(function(){
	
	//CLICK AL INICIAR UNA TAREA
	$('.btn-task').on('click', function(){
		$(this).val("Hecho");
		$(this).css('background-color','#bdb37f');

		var hh = Number($('#hh00').val());
		var mm = Number($('#mm00').val());
		var ss = Number($('#ss00').val());

		if(hh == 0 && mm == 0){
			alert("Establezca un tiempo");
		} else {
			let intervalHH = setInterval(function(){ 
				--hh;
				if(hh == 0){
					clearInterval(intervalHH);
					document.getElementById("alarm").play();
					$("#btnStop").show();
				}
				$('#hh00').empty().val(hh);
			}, 3600000);

			let intervalMM = setInterval(function(){ 
				--mm;
				if(mm == 0){
					clearInterval(intervalMM);
					document.getElementById("audioTrompeta").play();
					$("#btnStop").show();
				}
				$('#mm00').empty().val(mm);
			}, 60000);

			let intervalSS = setInterval(function(){ 
				--ss;
				if(ss == 0){
					clearInterval(intervalSS);
				}
				$('#ss00').empty().val(ss);
			}, 1000);
		}

		alert(hh + ' ' + mm);
	});

	//
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
					document.getElementById("audioTrompeta").play();
					$("#btnStop").show();
				}
				$("#tiempo_restante").empty().append(tiempo + ' minutos');
			}, 60000);
		}
	});


	$("#btnStop").click(function(){
		document.getElementById("audioTrompeta").pause();
		$("#btnStop").hide();
		$("#tiempo").focus();
	});

});