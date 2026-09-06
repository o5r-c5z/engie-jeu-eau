var ieOld = false;

if ($('html').is('.ie-old')) {
    ieOld = true;
}

// Navigateur compatible
if (!ieOld) {
    
    // Format non mobile
    if (Modernizr.mq("(min-width: 768px)")) {
        var page = 'chargement';
        var accueilContenu = 'bienvenue';
        var themesRestants = ['cycle-eau', 'bons-gestes', 'metiers'];
        var son = true;

        var tactile = false;

        if (Modernizr.touch) {
            tactile = true;
        }

        var ie9 = false;

        if ($('html').is('.ie9')) {
            ie9 = true;
        }

        //********** VIGNETTES **********
        var vignettesCorrectes = 0;

        //********** MESSAGES **********
        var messagesFaux = [
                'Cette vignette n’est pas à sa place',
                'Essaie encore&nbsp;!'
            ];

        if (!ie9) {
            messagesFaux.push(
                'Attention, ce n’est pas la bonne réponse',
                'Cherche encore',
                'Essaie encore, tu peux trouver',
                'Ce n’est pas la bonne vignette&nbsp;!',
                'Ce n’est pas ça',
                'Non, ce n’est pas la bonne réponse&nbsp;!',
                'Attention, tu t’es trompé',
                'Choisis une autre vignette'
            );
        }

        //********** CHARGEMENT **********
        $('#wrapper').append($('#chargement'));
        chargement();
    } else {
        $('#wrapper').html('<div id="non-compatible">Malheureusement le Jeu de l\'Eau n\'est pas disponible au format mobile. Veuillez utiliser une tablette ou un ordinateur.</div>');
    }
    
} else {
        $('#wrapper').html('<div id="non-compatible">Malheureusement votre navigateur n\'est pas supporté. Veuillez installer une version plus récente afin d\'accéder au Jeu de l\'Eau.</div>');
}