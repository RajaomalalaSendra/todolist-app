// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require jquery_ujs
//= require activestorage
//= require_tree .

container = $("div.container");
for (var i = 0; i < $("div.card").length; i++) {
	$("div.card")[i].click(function(){
    	$(this).hide(200);
    	console.log();
	});
}
function hider()  {
	$(document).ready(function(){
		for (var i = 1; i < 4; i++) {
		$('ul').eq(i).addClass("nav nav-pills");
		$( 'div.card ul' ).eq(i).addClass("tab-content active");
		console.log($('div.card ul').eq(i));
		$('ul').eq(i).click(function(){
		$( 'div.card ul' ).eq(i-1).toggle( "slow", function() {
    		console.log("an simple essay");
  		  });
	    })
	}
    })
}
hider();