$(document).ready(function(){
	$("#scrollto").click(function(event){
		event.preventDefault();
		var demo=$("#services").offset()
		console.log(demo.top);
		$("html, body").animate({
			scrollTop:demo.top
		},500);
	})
})