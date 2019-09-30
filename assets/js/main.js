/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

})(jQuery);


function flipBonnet1() {
          imageBonnet1.src = SelectBonnet1.children[SelectBonnet1.selectedIndex].getAttribute('url');
      }

function flipBonnet2() {
          imageBonnet2.src = SelectBonnet2.children[SelectBonnet2.selectedIndex].getAttribute('url');
      }

function flipYeux() {
          imageYeux.src = SelectYeux.children[SelectYeux.selectedIndex].getAttribute('url');
      }

	var imageBonnet1 = document.getElementById('imageBonnet1');
    var SelectBonnet1 = document.getElementById('SelectBonnet1');
    var imageBonnet2 = document.getElementById('imageBonnet2');
    var SelectBonnet2 = document.getElementById('SelectBonnet2');
    var imageYeux = document.getElementById('imageYeux');
    var SelectYeux = document.getElementById('SelectYeux');

    // varibales des infos
    var Nom = $( "#Nom" ).val();
    var Bonnet1 = $( "#SelectBonnet1 option:selected" ).text();
    var Bonnet2 = $( "#SelectBonnet2 option:selected" ).text();
    var Yeux = $( "#SelectYeux option:selected" ).text();


    // actualisation en temps réelle des infos
	$('#Nom').change(function(){
   		 Nom = $( "#Nom" ).val();
	});

    $('#SelectBonnet1').change(function(){
   		 Bonnet1 = $( "#SelectBonnet1 option:selected" ).text();
	});

	$('#SelectBonnet2').change(function(){
   		 Bonnet2 = $( "#SelectBonnet2 option:selected" ).text();
	});

	$('#SelectYeux').change(function(){
   		 Yeux = $( "#SelectYeux option:selected" ).text();
	});


	// custom le mail
	var formemail = document.querySelector('#form-email');
	var btnemail = document.querySelector('#btn-email');

	var original_mailto_url = formemail.action;

	// add the event listener to the link element
	btnemail.addEventListener('click', function () {
	  // assemble the new mailto URL string
	  var mailto_url = original_mailto_url + '?subject=Demande de devis&body=Entrer votre message personnalisé : %0A%0A%0A%0A%0A%0A' +
	  							'---------------------------------------------------------------------------%0A '+
								'Ce message est généré automatiquement.%0A Merci de ne pas le modifier.%0A%0A '+
							    'Nom: '+ Nom+'  %0A'+
								'Couleur Bonnet 1: '+ Bonnet1 +' %0A'+
								'Couleur Bonnet 2: '+ Bonnet2 +' %0A'+
								'Couleur Yeux: '+ Yeux +' %0A'+
								'---------------------------------------------------------------------------%0A%0A%0A%0A';
	  formemail.action = mailto_url;
	});