var interval;

window.onload = () => {
	//CLICK A UNA TAREA
	const buttonTask = document.querySelector('.btn-task');
	buttonTask.addEventListener('click', (e) => {
		const specificButtonTask = e.target;
		specificButtonTask.value = 'Hecho';
        // console.log(specificButtonTask);

        const taskState = specificButtonTask.getAttribute('data-task-state');
        // console.log(taskState)
        switch (taskState) {
            case 'active':
                clearInterval(interval);
                playNotificationSound("audioSlowSpringBoard");
                const selector = document.querySelector(`#ss`);
                // timer(0, specificButtonTask, 0, selector);
                specificButtonTask.setAttribute('data-task-state', 'inactive');
                console.log(taskState)
                break;
            case 'inactive':
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
                specificButtonTask.setAttribute('data-task-state', 'active');
                console.log(taskState)

                break;
            default:
                break;
        }
	}, false);
}

function taskFinished() {
	alert('Tarea terminada');
}

function timer(time, specificButtonTask, milisecondsTimeUnit, selector){
    interval = setInterval(function(){
        --time;
        if(time == 0){
            clearInterval(interval);
            playNotificationSound("audioSlowSpringBoard");
            specificButtonTask.setAttribute('data-task-state', 'inactive');
            specificButtonTask.style.backgroundColor = '#F00';
            console.log(specificButtonTask);
        }
        selector.value = time;
    }, milisecondsTimeUnit);
}

function playNotificationSound(audioId) {
	document.getElementById(audioId).play();
}