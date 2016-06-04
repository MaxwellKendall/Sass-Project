var $button = $("#king");
var $nav = $("ul");

$button.click(function(){
if ($nav.is(":visible")) {
    $nav.css('display', 'none');
} else {
       $nav.css('display', '');
   }
})

$(window).resize(function(){
	if ($(".back-to-top").css("display") == "none"){
        $nav.css('display', '');
        //$nav.css('display', '');
	}
});
