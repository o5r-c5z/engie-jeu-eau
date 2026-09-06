$('#bienvenue-suivant').click(function() {
	createjs.Sound.stop();
	accueilContenu = 'themes';
	
	$('#bienvenue').animate({
		opacity: 0,
		left: "+=10000"
	}, 500, function() {
		$('.accueil-contenu').css('opacity', 0);
		
		accueil();
		
		$('#themes').css('opacity', 0).css('left', -10000);
		$('.accueil-contenu').css('opacity', 1);
		$('#themes').animate({
			opacity: 1,
			left: 0
		}, 500, function() {
                    if (!tactile) {
                        createjs.Sound.play('themes-' + themesRestants.length);
                    }
		});
	});
        
        if (tactile) {
            createjs.Sound.play('themes-' + themesRestants.length);
        }
    
    return false;
});