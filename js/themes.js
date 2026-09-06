function themes()
{
    if (themesRestants.length == 3) {
        $('#themes .accueil-message h2').html('&nbsp;');
        $('#themes .accueil-message p').html('<strong>Clique</strong> d’abord sur <strong>le thème de ton choix</strong> et à toi de jouer&nbsp;!');
    } else if (themesRestants.length == 2) {
        $('#themes .accueil-message h2').html('Bravo');
        $('#themes .accueil-message p').html('<strong>Continue à jouer</strong> au jeu de l’eau et <strong>choisis un autre thème</strong> pour devenir imbattable sur l’eau&nbsp;!');
    } else if (themesRestants.length == 1) {
        $('#themes .accueil-message h2').html('Bravo');
        $('#themes .accueil-message p').html('Plus qu’un thème et tu seras <strong>un véritable expert de l’eau&nbsp;!</strong>');
    }

    $('.theme').parent().addClass('hidden').removeClass('col-md-12 col-md-6 col-md-4');

    for (i = 0; i < themesRestants.length; i++) {
        $('[data-theme="' + themesRestants[i] + '"]').parent().removeClass('hidden').addClass('col-md-' + (12 / themesRestants.length));
    }
}

$('.theme').click(function ()
{
    createjs.Sound.stop();

    page = $(this).attr('data-theme');

    $('#wrapper').animate({
        opacity: 0
    }, 500, function () {
        $('#accueil').appendTo('#pas-la');
        $('#wrapper').append($('.jeu'));
        $('#wrapper').append($('#modal-aide'));
        $('#wrapper').append($('#modal-bravo'));
        $('#wrapper').append($('#modal-faux'));
        $('.jeu').attr('id', page);

        jeu();

        $('#wrapper').animate({
            opacity: 1
        }, 500, function () {
            if (!tactile && son) {
                createjs.Sound.play(page + '-consigne-pc');
            }
        });
    });

    if (tactile && son) {
        createjs.Sound.play(page + '-consigne-tablette');
    }

    return false;
});