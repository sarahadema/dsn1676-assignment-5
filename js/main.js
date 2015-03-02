var $form = $('.form');
var $item = $('.item');
var $list =$('.list');

$form.on('submit', function (e) {
	e.preventDefault();

	var $li = $('<li>');
	var $itemP = $('<p>').html($item.val());

	$li.append($itemP);
	$list.append($li);

})

$list.on('click','li', function(){
	$(this).addClass('js-complete');
})
