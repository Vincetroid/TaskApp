var display = true;

var view = {
	
	renderMenu: function(){

		if(display == true){
			document.getElementById('side_menu').setAttribute('class','animated fadeOutRight');
			display = false;
		} else {
			document.getElementById('side_menu').setAttribute('class','animated fadeInRight');
			display = true;
		}
	}

}