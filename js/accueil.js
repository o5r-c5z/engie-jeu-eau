function accueil()
{
    $('.accueil-contenu').children().appendTo('#pas-la');

    if (accueilContenu == 'bienvenue') {
        $('.accueil-contenu').append($('#bienvenue'));
    } else if (accueilContenu == 'themes') {
        $('.accueil-contenu').append($('#themes'));
        themes();
    } else if (accueilContenu == 'felicitations') {
        $('.accueil-contenu').append($('#felicitations'));
    }
}