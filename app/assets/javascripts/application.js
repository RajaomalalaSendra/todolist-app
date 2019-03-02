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
function toggler () {
	let container = $('.container ul li');
	let tab = ['Essay','Reference book','Folklore'];
	for (var i = 0; i < container.length; i++) {
		if (container.eq(i).html() === tab[0]) {
			container.eq(i).on('click', () => {
		 		 $('.card').eq(0).toggle();
			});
		} else if (container.eq(i).html() === tab[1]) {
			container.eq(i).on('click', () => {
		 		 $('.card').eq(1).toggle();
			});
		} else if (container.eq(i).html() === tab[2]) {
			container.eq(i).on('click', () => {
		 		 $('.card').eq(2).toggle();
			});
		} 
	}	
}
toggler();
function collapser() {
	let nav_item = $('.nav-link');
	let circle = $('.rounded-circle');
	let create = document.createElement("div");
	create.className = "left";
	for (var i = 0; i < nav_item.length - 1; i++) {
			create.appendChild(nav_item.eq(i));
		}
	circle.append(create);
	circle.eq(0).on('click', () => {
			create.toggle();
	});
}
collapser();