$(document).ready( function(){
	 	$("#home").click(function(event) {
        $("#contenido").load('home.html');
        $("#home").addClass("active");
        $("#skills").removeClass("active");
        $("#work").removeClass("active");
        $("#resume").removeClass("active");
    });
  	$("#skills").click(function(event) {
        $("#contenido").load('skills1.html');
        $("#home").removeClass("active");
        $("#skills").addClass("active");
        $("#work").removeClass("active");
        $("#resume").removeClass("active");
    });
  	$("#work").click(function(event) {
        $("#contenido").load('work1.html');
        $("#home").removeClass("active");
        $("#skills").removeClass("active");
        $("#work").addClass("active");
        $("#resume").removeClass("active");
    });
    $("#resume").click(function(event) {
        $("#contenido").load('resume1.html');
        $("#home").removeClass("active");
        $("#skills").removeClass("active");
        $("#work").removeClass("active");
        $("#resume").addClass("active");

    });

});