window.onload = () => {
	//CLICK A UNA TAREA
	const buttonTask = document.querySelector('.btn-task');
	buttonTask.addEventListener('click', (e) => {
		const specificButtonTask = e.target;
		specificButtonTask.value = 'Hecho';
		specificButtonTask.setAttribute('data-task-state', 'active');
		specificButtonTask.style.backgroundColor = '#bdb37f';
	
		let hh = Number(document.querySelector('#hh').value);
		let mm = Number(document.querySelector('#mm').value);
		let ss = Number(document.querySelector('#ss').value);
	
		if(hh == 0 && mm == 0 && ss == 0){
			alert("Establezca un tiempo");
		} else {
            
            let selector = document.querySelector(`#hh`);
            timer(hh, specificButtonTask, 3600000, selector);
            
            selector = document.querySelector(`#mm`);
            timer(mm, specificButtonTask, 60000, selector);

            selector = document.querySelector(`#ss`);
			timer(ss, specificButtonTask, 1000, selector);
		}
	}, false);
}

function taskFinished() {
	alert('Tarea terminada');
}

function timer(quantity, specificButtonTask, miliseconds, selector){
    let interval = setInterval(function(){
        --quantity;
        if(quantity == 0){
            clearInterval(interval);
            playNotificationSound("audioSlowSpringBoard");
            specificButtonTask.setAttribute('data-task-state', 'inactive');
            specificButtonTask.style.backgroundColor = '#F00';
        }
        selector.value = quantity;
    }, miliseconds);
}

function playNotificationSound(audioId) {
	document.getElementById(audioId).play();
}