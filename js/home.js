window.onload = () => {
	//CLICK A UNA TAREA
	const buttonTask = document.querySelector('.btn-task');
	buttonTask.addEventListener('click', (e) => {
		const specificButtonTask = e.target;
		specificButtonTask.value = 'Hechos';
		specificButtonTask.setAttribute('data-task-state', 'active');
		specificButtonTask.style.backgroundColor = '#bdb37f';
	
		let hh = Number(document.querySelector('#hh').value);
		let mm = Number(document.querySelector('#mm').value);
		let ss = Number(document.querySelector('#ss').value);
	
		if(hh == 0 && mm == 0 && ss == 0){
			alert("Establezca un tiempo");
		} else {
			let intervalHH = setInterval(function(){
				--hh;
				if(hh == 0){
					clearInterval(intervalHH);
					document.getElementById("audioSlowSpringBoard").play();
				}
				const hours = document.querySelector('#hh');
				hours.value = hh;
			}, 3600000);
	
			let intervalMM = setInterval(function(){
				--mm;
				if(mm == 0){
					clearInterval(intervalMM);
					document.getElementById("audioSlowSpringBoard").play();
				}
				const minutes = document.querySelector('#mm');
				minutes.value = mm;
			}, 60000);
	
			let intervalSS = setInterval(function(){
				--ss;
				if(ss == 0){
					clearInterval(intervalSS);
					playNotificationSound("audioSlowSpringBoard");
					specificButtonTask.setAttribute('data-task-state', 'inactive');
					specificButtonTask.style.backgroundColor = '#F00';
				}
				const seconds = document.querySelector('#ss');
				seconds.value = ss;
			}, 1000);
		}
	}, false);
}

// console.log(x);

// //PARA ALARMAS LARGAS
// $("#btnStop").click(function(){
// 	document.getElementById("audioSlowSpringBoard").pause();
// 	$("#btnStop").hide();
// 	$("#tiempo").focus();
// });

function taskFinished() {
	alert('Tarea terminada');
}

function playNotificationSound(audioId) {
	document.getElementById(audioId).play();
}