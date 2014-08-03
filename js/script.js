/* Author:

*/
	//constructors of Member, Idea, Like, Rally, RSVP --- if you change the constructor, you need to clear all your data. 
var sidebarOpen = 1; //closed by default

    
$(document).ready(function(){
    $("#sidebar").click(sidebarToggle);


});




function sidebarToggle(){
    if (sidebarOpen == 1){
        sidebarOpen=0;
        $(this).animate({width:"300px"});
    }
    else{
        sidebarOpen=1;
        $(this).animate({width:"50px"});
    }    
}
