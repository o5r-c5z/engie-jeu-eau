var zooming = false;
var overDroppable = false;
var goodDrop = false;

var vignetteTaille = 170;
var echelle = 111 / 222
var illustrationHeight = 2206 * echelle;
var illustrationWidth = 4420 * echelle;

var vignetteHeight = 222 * echelle;
var vignetteWidth = 222 * echelle;

var ratio;
var vignettesNb = 2;

var messagesBravo, messageAide;
var vignettesX, vignettesY;

function jeu()
{
    $('.emplacement').html('');
    $('.jcarousel ul').html('<li><div id="vignette01" class="vignette vignette01 draggable"></div></li><!-- --><li><div id="vignette02" class="vignette vignette02 draggable"></div></li><!-- --><li><div id="vignette03" class="vignette vignette03 draggable"></div></li><!-- --><li><div id="vignette04" class="vignette vignette04 draggable"></div></li><!-- --><li><div id="vignette05" class="vignette vignette05 draggable"></div></li><!-- --><li><div id="vignette06" class="vignette vignette06 draggable"></div></li><!-- --><li><div id="vignette07" class="vignette vignette07 draggable"></div></li><!-- --><li><div id="vignette08" class="vignette vignette08 draggable"></div></li><!-- --><li><div id="vignette09" class="vignette vignette09 draggable"></div></li><!-- --><li><div id="vignette10" class="vignette vignette10 draggable"></div></li>');

    if (tactile) {
        $('#plateau').css('overflow', 'auto');
    }

    vignettesCorrectes = 0;

    zooming = false;
    overDroppable = false;
    goodDrop = false;

    // CYCLE EAU
    if (page == 'cycle-eau') {
        vignettesX = [216, 450, 1236, 1554, 1878, 1989, 2436, 3729, 4081, 4120];
        vignettesY = [690, 799, 350, 782, 929, 661, 1460, 1103, 1207, 1438];

        messagesBravo = ['Cette étape est le captage&nbsp;: l’eau est prélevée en surface dans des lacs, des rivières, des nappes souterraines...',
            'L’usine d’eau potable traite l’eau, afin de la rendre potable&nbsp;: elle pourra donc être bue sans danger pour la santé.',
            'Cette étape est le stockage&nbsp;: l’eau est stockée dans des réservoirs en hauteur (des châteaux d’eaux), afin d’assurer une pression suffisante pour pouvoir la redistribuer.',
            'Pour arriver jusqu’aux maisons, l’eau potable est acheminée à travers un réseau souterrain de canalisations appelé «&nbsp;réseau d’eau potable&nbsp;». ',
            'Cette étape correspond à la consommation de l’eau&nbsp;: l’eau est consommée dans les maisons pour boire, cuire les aliments, prendre sa douche, laver son linge ou sa vaisselle, mais aussi pour les toilettes.',
            'C’est l’assainissement non collectif. Cela signifie que les maisons éloignées du réseau collectif des eaux usées sont équipées d’installations individuelles de traitement des eaux usées appelées «&nbsp;fosses septiques&nbsp;».',
            'Dans certaines villes, il y a un réseau d’eaux pluviales&nbsp;: c’est un réseau d’eau spécifique pour les eaux de pluie qui leur permet de retourner directement dans la nature.',
            'Les eaux usées, provenant des particuliers et des industriels, sont acheminées à travers un réseau spécifique de canalisations vers la station d’épuration&nbsp;: c’est le «&nbsp;réseau collectif des eaux usées&nbsp;».',
            'Les eaux usées sont conduites dans des stations d’épuration où elles sont nettoyées de leurs impuretés.',
            'Une fois dépolluée dans les stations d’épuration, l’eau est rejetée propre dans la nature (fleuve, rivière, etc.) pour recommencer un nouveau cycle.'];

        messageAidePc = '<strong>Replace les 10 étapes du cycle de l’eau aux bons endroits dans le dessin.</strong><br /><br /> Pour cela, choisis une vignette « étape » parmi la liste et fais-la glisser au bon endroit sur le dessin.<br /><br /> Pour t’aider, tu peux zoomer dans le dessin grâce aux boutons «&nbsp;+&nbsp;» et «&nbsp;-&nbsp;». Tu peux aussi te déplacer dans le dessin en gardant le clic gauche de ta souris enfoncé et en la faisant glisser.';
        messageAideTablette = '<strong>Replace les 10 étapes du cycle de l’eau aux bons endroits dans le dessin.</strong><br /><br /> Pour cela, choisis une vignette « étape » parmi la liste et fais-la glisser au bon endroit sur le dessin.<br /><br /> Pour t’aider, tu peux zoomer dans le dessin grâce aux boutons «&nbsp;+&nbsp;» et «&nbsp;-&nbsp;». Tu peux aussi te déplacer dans le dessin en le faisant glisser.';
    }
    // BONS GESTES
    else if (page == 'bons-gestes') {
        vignettesX = [121, 252, 489, 1067, 1406, 1424, 69, 1637, 2352, 2917];
        vignettesY = [1296, 1690, 1689, 1589, 1463, 1866, 1918, 1463, 1136, 1574];

        messagesBravo = ['Un robinet qui goutte représente 35 000 litres d’eau gaspillés par an. Pour économiser l’eau, détecte les fuites avec tes parents, notamment en vérifiant ton compteur d’eau.',
            'Pour éviter de gaspiller de l’eau potable, tu peux récupérer l’eau de pluie ou encore l’eau de rinçage des légumes pour arroser tes plantes.',
            'Quand on laisse couler l’eau pendant qu’on se lave les dents, ce sont 15 litres d’eau gaspillés. Pour éviter de laisser couler l’eau inutilement, remplis un verre d’eau&nbsp;!',
            'Il ne faut pas verser de produits inadaptés dans les égouts. Les huiles de vidange doivent, par exemple, être amenées à la déchetterie pour recevoir un traitement spécifique.',
            'Privilégie l’eau du robinet à la consommation de sodas. En effet, l’eau du robinet est saine, économique (1 euro en moyenne pour une famille de 4 personnes) et écologique (car elle ne nécessite pas d’emballage plastique).',
            'Pour éviter de polluer l’eau, tu peux limiter ton utilisation de produits détergents, shampoings ou gels douche. Tu peux également choisir avec tes parents des produits qui respectent la planète.',
            'Arroser le soir ou le matin est idéal, surtout pendant les périodes de grande chaleur, car cela permet de limiter les pertes d’eau par évaporation. Tu ne gaspilleras donc pas d’eau&nbsp;!',
            'Ne jette pas n’importe quoi dans les toilettes (lingettes nettoyantes ou cotons-tiges, par exemple), car ils peuvent boucher les filtres des stations d’épuration.',
            'Prendre des douches plutôt que des bains permet de diminuer sa consommation d’eau de plus de 10 000 litres par an&nbsp;!',
            'Ne jette rien par terre, car tout ce qui est par terre se retrouve dans le réseau des eaux usées et cela risque de polluer l’eau et de boucher les canalisations.'];

        messageAidePc = '<strong>Retrouve les 10 mauvais gestes sur le dessin et corrige-les.</strong><br /><br /> Pour cela, choisis une vignette « bon geste » parmi la liste et fais-la glisser au bon endroit sur le dessin.<br /><br /> Pour t’aider, tu peux zoomer dans le dessin grâce aux boutons «&nbsp;+&nbsp;» et «&nbsp;-&nbsp;». Tu peux aussi te déplacer dans le dessin en gardant le clic gauche de ta souris enfoncé et en la faisant glisser.';
        messageAideTablette = '<strong>Retrouve les 10 mauvais gestes sur le dessin et corrige-les.</strong><br /><br /> Pour cela, choisis une vignette « bon geste » parmi la liste et fais-la glisser au bon endroit sur le dessin.<br /><br /> Pour t’aider, tu peux zoomer dans le dessin grâce aux boutons «&nbsp;+&nbsp;» et «&nbsp;-&nbsp;». Tu peux aussi te déplacer dans le dessin en le faisant glisser.';
    }
    // MÉTIERS
    else if (page == 'metiers') {
        vignettesX = [219, 691, 724, 874, 1313, 2636, 2894, 2894, 4052, 3838];
        vignettesY = [919, 1013, 1660, 1341, 913, 1185, 1018, 1250, 992, 1470];

        messagesBravo = ['C’est le responsable de l’usine d’eau potable&nbsp;: il assume les responsabilités techniques, la gestion et l’encadrement de la station.',
            'Le technicien qualité eau contrôle la qualité de l’eau potable.',
            'C’est un releveur. Il relève les compteurs d’eau des clients et les alerte en cas d’anomalie.',
            'C’est un agent de réseau. Il garantit le bon fonctionnement des réseaux de canalisations en réalisant diverses interventions, comme des travaux d’entretien. ',
            'Le chercheur de fuites détecte et localise les fuites dans les canalisations.',
            'Cette personne est un cartographe qui matérialise les réseaux sur des cartes numérisées.',
            'Le laborantin effectue des analyses, afin de surveiller la qualité de l’eau.',
            'C’est un conseiller clientèle. Il apporte une réponse concrète et immédiate aux questions ou aux réclamations des clients.',
            'L’exploitant de station d’épuration met en œuvre les moyens et procédures pour purifier l’eau et traiter les boues (c’est-à-dire les déchets produits par la station d’épuration). ',
            'Cette personne est le capitaine de port&nbsp;: il veille au bon fonctionnement des ports fluviaux et des ports touristiques.'];

        messageAidePc = '<strong>Retrouve les noms des métiers des 10 personnes qui sont en train de travailler sur le dessin.</strong><br /><br /> Pour cela, choisis une vignette « métier » parmi la liste et fais-la glisser au bon endroit sur le dessin.<br /><br /> Pour t’aider, tu peux zoomer dans le dessin grâce aux boutons «&nbsp;+&nbsp;» et «&nbsp;-&nbsp;». Tu peux aussi te déplacer dans le dessin en gardant le clic gauche de ta souris enfoncé et en la faisant glisser.';
        messageAideTablette = '<strong>Retrouve les noms des métiers des 10 personnes qui sont en train de travailler sur le dessin.</strong><br /><br /> Pour cela, choisis une vignette « métier » parmi la liste et fais-la glisser au bon endroit sur le dessin.<br /><br /> Pour t’aider, tu peux zoomer dans le dessin grâce aux boutons «&nbsp;+&nbsp;» et «&nbsp;-&nbsp;». Tu peux aussi te déplacer dans le dessin en le faisant glisser.';
    }

    //********** AIDE **********
    if (tactile) {
        $('#modal-aide .modal-contenu').html(messageAideTablette);
    } else {
        $('#modal-aide .modal-contenu').html(messageAidePc);
    }

    $('#modal-aide').modal('show');

    //********** CAROUSEL **********
    (function ($) {
        $.fn.shuffle = function () {

            var allElems = this.get(),
                    getRandom = function (max) {
                        return Math.floor(Math.random() * max);
                    },
                    shuffled = $.map(allElems, function () {
                        var random = getRandom(allElems.length),
                                randEl = $(allElems[random]).clone(true)[0];
                        allElems.splice(random, 1);
                        return randEl;
                    });

            this.each(function (i) {
                $(this).replaceWith($(shuffled[i]));
            });

            return $(shuffled);

        };
    })(jQuery);

    $('#vignettes li').shuffle();

    $(function () {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
                .on('jcarouselcontrol:active', function () {
                    $(this).removeClass('invisible');
                })
                .on('jcarouselcontrol:inactive', function () {
                    $(this).addClass('invisible');
                })
                .jcarouselControl({
                    target: '-=1'
                });

        $('.jcarousel-control-next')
                .on('jcarouselcontrol:active', function () {
                    $(this).removeClass('invisible');
                })
                .on('jcarouselcontrol:inactive', function () {
                    $(this).addClass('invisible');
                })
                .jcarouselControl({
                    target: '+=1'
                });
    });

    //********** PLATEAU ET VIGNETTES **********
    ratio = $('#plateau').width() / illustrationWidth;

    $('#plateau').height(illustrationHeight * ratio).dragscrollable({
        dragSelector: 'div',
        acceptPropagatedEvent: false
    });

    if (Modernizr.mq("(min-width: 992px)")) {
        vignettesNb = Math.round($('#plateau').height() / vignetteTaille) - 1;
        $('.jcarousel').height(vignettesNb * vignetteTaille + (vignettesNb - 1) * 10).width(vignetteTaille);
    } else {
        vignettesNb = Math.round($('#plateau').width() / vignetteTaille) - 1;
        $('.jcarousel').width(vignettesNb * vignetteTaille + (vignettesNb - 1) * 10).height(vignetteTaille);
    }

    $('.illustration').height($('#plateau').height()).width($('#plateau').width());

    $('.emplacement').height(vignetteHeight * ratio).width(vignetteWidth * ratio);

    var i = 0;

    $('.emplacement').each(function () {
        $(this).css({
            left: vignettesX[i] * ratio * echelle,
            top: vignettesY[i] * ratio * echelle
        });

        i++;
    });
    
    //********** DRAG **********
    $('.draggable').draggable({
        disabled: false,
        snap: '.droppable:not(.ui-droppable-disabled)',
        snapMode: 'inner',
        revert: function () {
            if (!goodDrop) {
                if (overDroppable) {
                    var index = Math.floor((Math.random() * messagesFaux.length));

                    if (son) {
                        createjs.Sound.play('mauvaise-reponse-' + (index + 1));
                    }

                    $('#modal-faux .modal-titre').html(messagesFaux[index]);
                    $('#modal-faux').modal('show');
                }

                return true;
            }
        },
        cursor: 'move',
        cursorAt: {top: 5, left: 5},
        scroll: false,
        helper: 'clone',
        appendTo: '.jeu',
        zIndex: 999,
        start: function (event, ui) {
            if (!zooming) {
                ui.helper.height(vignetteHeight * ratio).width(vignetteWidth * ratio);
            } else {
                ui.helper.height(vignetteHeight).width(vignetteWidth);
            }

            $(this).hide();
            goodDrop = false;
            overDroppable = false;
        },
        stop: function (event, ui) {
            $(this).show();
        }
    });

    //********** DROP **********
    $('.droppable').droppable({
        disabled: false,
        drop: function (event, ui) {
            if ('#' + ui.draggable.attr('id') == $(this).attr('data-vignette')) {
                goodDrop = true;
                overDroppable = false;

                if (Modernizr.mq("(min-width: 992px)")) {
                    $(ui.draggable).parent().animate({
                        height: 0
                    }, 500, function () {
                        $(this).remove();
                        $('.jcarousel').jcarousel('reload');
                    });
                } else {
                    $(ui.draggable).parent().animate({
                        width: 0
                    }, 500, function () {
                        $(this).remove();
                        $('.jcarousel').jcarousel('reload');
                    });
                }

                $(ui.draggable).appendTo($(this));

                $(ui.draggable).css({
                    left: 0,
                    top: 0
                });

                $(ui.draggable).draggable({
                    disabled: true
                });

                $(this).droppable({
                    disabled: true
                });

                $('#plateau').dragscrollable({
                    dragSelector: 'div',
                    acceptPropagatedEvent: false
                });

                $('.draggable').draggable({
                    snap: '.droppable:not(.ui-droppable-disabled)'
                });

                var index = parseInt(ui.draggable.attr('id').substr(ui.draggable.attr('id').length - 2, 2));
                $('#modal-bravo .modal-titre').html('Bravo&nbsp;!');
                $('#modal-bravo .modal-contenu').html(messagesBravo[index - 1]);
                $('#modal-bravo').modal('show');

                createjs.Sound.stop();

                if (son) {
                    createjs.Sound.play(page + '-bonne-reponse-' + (index));
                }

                vignettesCorrectes++;

                if (vignettesCorrectes == 10) {
                    for (i = 0; i < themesRestants.length; i++) {
                        if (themesRestants[i] == page) {
                            break;
                        }
                    }

                    themesRestants.splice(i, 1);
                }
            }
        },
        over: function (event, ui) {
            overDroppable = true;
        },
        out: function (event, ui) {
            overDroppable = false;
        }
    });

    //********** SON **********
    if (son) {
        $('#son').addClass('on').removeClass('off');
    } else {
        $('#son').addClass('off').removeClass('on');
    }
    ;
}

$('.suivant').click(function ()
{
    $('.modal').modal('hide');

    return false;
});


$('#aide').click(function () {
    if (tactile) {
        $('#modal-aide .modal-contenu').html(messageAideTablette);
        if (son) {
            createjs.Sound.play(page + '-consigne-tablette');
        }
    } else {
        $('#modal-aide .modal-contenu').html(messageAidePc);
        if (son) {
            createjs.Sound.play(page + '-consigne-pc');
        }
    }

    $('#modal-aide').modal('show');

    return false;
});

//********** RETOUR **********
$('#retour').click(function () {
    accueilContenu = 'themes';

    $('#wrapper').animate({
        opacity: 0
    }, 500, function () {

        $('.jeu').appendTo('#pas-la');
        $('#modal-aide').appendTo('#pas-la');
        $('#modal-bravo').appendTo('#pas-la');
        $('#modal-faux').appendTo('#pas-la');

        $('#wrapper').append($('#accueil')).animate({
            opacity: 1
        }, 500, function () {
            if (!tactile) {
                createjs.Sound.play('themes-' + themesRestants.length);
            }
        });

        accueil();
        
        if (tactile) {
            createjs.Sound.play('themes-' + themesRestants.length);
        }
    });

    return false;
});

$(window).resize(function ()
{
    var vignettesNb = 2;

    if (Modernizr.mq("(min-width: 992px)")) {
        vignettesNb = Math.round($('#plateau').height() / vignetteTaille) - 1;
        $('.jcarousel').height(vignettesNb * vignetteTaille + (vignettesNb - 1) * 10).width(vignetteTaille);
    } else {
        vignettesNb = Math.round($('#plateau').width() / vignetteTaille) - 1;
        $('.jcarousel').width(vignettesNb * vignetteTaille + (vignettesNb - 1) * 10).height(vignetteTaille);
    }

    if (zooming) {
        $('.illustration').height(illustrationHeight).width(illustrationWidth);

        $('.emplacement').height(vignetteHeight).width(vignetteWidth);

        var i = 0;

        $('.emplacement').each(function () {
            $(this).css({
                left: vignettesX[i] * echelle,
                top: vignettesY[i] * echelle
            });

            i++;
        });
    } else {
        ratio = $('#plateau').width() / illustrationWidth;
        $('#plateau').height(illustrationHeight * ratio);

        $('.illustration').height($('#plateau').height()).width($('#plateau').width());

        $('.emplacement').height(vignetteHeight * ratio).width(vignetteWidth * ratio);

        var i = 0;

        if (vignettesX && vignettesY) {
            $('.emplacement').each(function () {
                $(this).css({
                    left: vignettesX[i] * ratio * echelle,
                    top: vignettesY[i] * ratio * echelle
                });

                i++;
            });
        }
    }
})

//********** ZOOM **********
$('#moins').click(function ()
{
    zooming = false;

    $('.illustration').height($('#plateau').height()).width($('#plateau').width());

    $('.emplacement').height(vignetteHeight * ratio).width(vignetteWidth * ratio);

    var i = 0;

    $('.emplacement').each(function () {
        $(this).css({
            left: vignettesX[i] * ratio * echelle,
            top: vignettesY[i] * ratio * echelle
        });

        i++;
    });

    return false;
});

$('#plus').click(function ()
{
    zooming = true;

    $('.illustration').height(illustrationHeight).width(illustrationWidth);

    $('.emplacement').height(vignetteHeight).width(vignetteWidth);

    var i = 0;

    $('.emplacement').each(function () {
        $(this).css({
            left: vignettesX[i] * echelle,
            top: vignettesY[i] * echelle
        });

        i++;
    });

    return false;
});

$('.modal').on('hidden.bs.modal', function (e) {
    createjs.Sound.stop();
});

$('#modal-bravo').on('hidden.bs.modal', function (e) {
    if (themesRestants.length > 0) {
        if (vignettesCorrectes == 10) {
            accueilContenu = 'themes';

            $('#wrapper').animate({
                opacity: 0
            }, 500, function () {

                $('.jeu').appendTo('#pas-la');
                $('#modal-aide').appendTo('#pas-la');
                $('#modal-bravo').appendTo('#pas-la');
                $('#modal-faux').appendTo('#pas-la');

                $('#wrapper').append($('#accueil')).animate({
                    opacity: 1
                }, 500, function () {
                    if (!tactile) {
                        createjs.Sound.play('themes-' + themesRestants.length);
                    }
                });

                accueil();

                if (tactile) {
                    createjs.Sound.play('themes-' + themesRestants.length);
                }
            });
        }
    } else {
        accueilContenu = 'felicitations';

        $('#wrapper').animate({
            opacity: 0
        }, 500, function () {

            $('.jeu').appendTo('#pas-la');
            $('#modal-aide').appendTo('#pas-la');
            $('#modal-bravo').appendTo('#pas-la');
            $('#modal-faux').appendTo('#pas-la');

            $('#wrapper').append($('#accueil')).animate({
                opacity: 1
            }, 500, function () {
                if (!tactile) {
                    createjs.Sound.play('felicitations');
                }
            });

            accueil();

            if (tactile) {
                createjs.Sound.play('felicitations');
            }
        });
    }
});

$('#son').click(function ()
{
    if (son) {
        son = false;
    } else {
        son = true;
    }

    $(this).toggleClass('on').toggleClass('off');

    return false;
});