var suxPanel9 = function(){
	if (screen.width==window.innerWidth){
		window.resizeTo(screen.width-1,screen.height-50);
		window.moveTo(0,0);
	};
};

$( document ).ready(function() {
	suxPanel9();
	$(window).resize(function() {
		suxPanel9();
	});
});