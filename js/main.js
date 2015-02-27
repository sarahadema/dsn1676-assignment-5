var $form = $('.form');
var $item = $('.item');
var $list =$('.list');

$form.on('submit', function (e){
	e.preventDefault();

	var $li = $('<li>');
	var $formH2 = $('<h2>').html($form.val());

	$li.append($formH2);
	$list.append($li);


})