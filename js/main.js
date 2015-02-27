var $form = $('.form');
var $item = $('.item');
var $list =$('.list');

$form.on('submit', function (e) {
	e.preventDefault();

	var $li = $('<li>');
	var $itemH2 = $('<h2>').html($item.val());

	$li.append($itemH2);
	$list.append($li);

})

$list.on('click','li', function(){
	$(this).addClass('js-complete');
})