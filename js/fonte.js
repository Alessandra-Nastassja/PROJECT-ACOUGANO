function fonte(e) {

	var elemento = $(".acessibilidade");
	var fonte = parseInt(elemento.css('font-size'));

	// e == 'a' ? fonte++ : fonte--;

	if(e == 'a'){
		fonte+= 3;
	}else{
		fonte-= 4;
	}
	elemento.css("fontSize", fonte);

}
