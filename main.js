var $button = $("#king");
var $nav = $("ul");

$button.click(function(){
 if ($($nav).hasClass("hidden")){
     $($nav).show().removeClass("hidden");
 } else {
    $($nav).hide().addClass("hidden");
    }
})
