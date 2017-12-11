(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $(".material-icons").mouseover(function(){
  		$(this).effect( "bounce", { times: 1 },'slow');
		});

  }); // end of document ready
})(jQuery); // end of jQuery name space