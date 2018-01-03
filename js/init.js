
 $(function(){

  $('.button-collapse').sideNav();
  $('.parallax').parallax();

  $(".bounce").mouseover(function(){
		$(this).effect( "bounce", { times: 1 },'slow');
	});

	$(".shake").mouseover(function(){
		$(this).effect( "shake", { times: 2 },'medium');
	});

	setTimeout(function(){
		$('.textfly1').removeClass('hidden');
	}, 500);

	setTimeout(function(){
		$('.textfly2').removeClass('hidden');
	}, 3000);

	setTimeout(function(){
		$('.textfly').removeClass('hidden');
	}, 5000);

	$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    $('.carousel').carousel({
          dist:0,
          shift:0,
          padding:20,
		});
		setInterval(function() {
  		$('.carousel').carousel('next');
		}, 2000); // every 2 seconds

  });


}); // end of document ready