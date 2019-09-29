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

	var imageBonnet1 = document.getElementById('imageBonnet1');
    var SelectBonnet1 = document.getElementById('SelectBonnet1');
    var imageBonnet2 = document.getElementById('imageBonnet2');
    var SelectBonnet2 = document.getElementById('SelectBonnet2');
