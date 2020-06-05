/*** SEARCH FUNCTION ***/

$('#search').keyup(function(){
   const valThis = $(this).val().toLowerCase();
   if(valThis == ""){
        $('.lightbox > a').show();
   } else {
        $('.lightbox > a').each(function(){
            const text = $(this).attr("title").toLowerCase();
            (text.indexOf(valThis) >= 0) ? $(this).show() : $(this).hide();
        });
    }
});

/*** LIGHTBOX FUNCTION ***/

$(document).ready(function() {
	$('.lightbox').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('data-title') + '<br></br>' + item.el.attr('title');
			}
		}
	});
});
