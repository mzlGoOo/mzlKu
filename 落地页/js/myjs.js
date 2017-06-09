$(document).ready(function(){
    var $teacher_div = $('#teacher div');
    $teacher_div.hover(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    var jWindow = $(window);
    jWindow.scroll(function(){
        var scrollHeight = jWindow.scrollTop();
        var screenHeight = jWindow.height();
        var p5t1Height = $("#p5t1").offset();
        var p5t2Height = $("#p5t2").offset();
        var p5t3Height = $("#p5t3").offset();
        var p5t4Height = $("#p5t4").offset();
        var p5t5Height = $("#p5t5").offset();
        var p5t6Height = $("#p5t6").offset();
        var p5t7Height = $("#p5t7").offset();

        if(scrollHeight + screenHeight/1.5 >= p5t1Height){
            $("#p5t1").css("background-color","#bf095f");
        }
        if(scrollHeight + screenHeight/5 >= p5t1Height){
            $("#p5t1").css("background-color","#999999");
        }
        if(scrollHeight + screenHeight/1.5 >= p5t2Height){
            $("#p5t2").css("background-color","#bf095f");
        }
        if(scrollHeight + screenHeight/5 >= p5t2Height){
            $("#p5t2").css("background-color","#999999");
        }
        if(scrollHeight + screenHeight/1.5 >= p5t3Height){
            $("#p5t3").css("background-color","#bf095f");
        }
        if(scrollHeight + screenHeight/5 >= p5t3Height){
            $("#p5t3").css("background-color","#999999");
        }
        if(scrollHeight + screenHeight/1.5 >= p5t4Height){
            $("#p5t4").css("background-color","#bf095f");
        }
        if(scrollHeight + screenHeight/5 >= p5t4Height){
            $("#p5t4").css("background-color","#999999");
        }
        if(scrollHeight + screenHeight/1.5 >= p5t5Height){
            $("#p5t5").css("background-color","#bf095f");
        }
        if(scrollHeight + screenHeight/5 >= p5t5Height){
            $("#p5t5").css("background-color","#999999");
        }
        if(scrollHeight + screenHeight/1.5 >= p5t6Height){
            $("#p5t6").css("background-color","#bf095f");
        }
        if(scrollHeight + screenHeight/5 >= p5t6Height){
            $("#p5t6").css("background-color","#999999");
        }
        if(scrollHeight + screenHeight/1.5 >= p5t7Height){
            $("#p5t7").css("background-color","#bf095f");
        }
        if(scrollHeight + screenHeight/5 >= p5t7Height){
            $("#p5t7").css("background-color","#999999");
        }
        if(scrollHeight + screenHeight <  p5t1Height){
            $("#p5t1,#p5t2,#p5t3,#p5t4,#p5t5,#p5t6,#p5t7,").css("background-color","#999999");
        }
    });

});



//card-container-1

//$('.card-container-1').on('click',function(){
//  var disappear = {
//    top: '40px',
//    opacity: '0'
//  },
//  appear={
//    top:'0',
//    opacity:'1'
//  }
//  var firstCard = cc1.children('.card').first();
//firstCard.css(disappear);
//var x = setTimeout(function(){
//  //firstCard.remove();
//  firstCard.css(appear);
//  $('.card-container-1').append(firstCard);
//},400);
//})




/*选择收货地*/
	var address = "";
	$(".filtrate-address li a").click(function() {
		var addressLi = $(this).parent("li");
		var addressState = addressLi.hasClass("active");
		if (addressState == true) {
			addressLi.removeClass("active");
			address = "";
		} else {
			addressLi.addClass("active").siblings("li").removeClass("active");
			address = $(this).html();
		}
	});



