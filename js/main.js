$(".item").click(function(){
	var getItem = $(this).find('#sample');
	$(getItem)[0].play();
});
