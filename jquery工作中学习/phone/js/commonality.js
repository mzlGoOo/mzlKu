$(function(){
	
	
	
	$(".num0").find("input").keyup(function(){
		window.location.href="num0-1.html";
	});
	$(".mainright>div").css("display","none");
	$(".mainright>div").eq(0).css("display","block");
	$(".mainleft ul li").click(function(){
//		alert("."+"number"+$(this).index());
		$(".mainright").find("."+"number"+$(this).index()).css("display","block").siblings().css("display","none");
	});
	
	
	
});
	
