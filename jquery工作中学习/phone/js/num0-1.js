$(function(){
	$("ul li").eq(0).css("border-bottom","2px #3385ff solid");
	$("ul li").click(function(){
		$("ul li").css("border-bottom","none");
		$(this).css("border-bottom","2px #3385ff solid");
	});
});
