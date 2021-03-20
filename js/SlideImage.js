// Design By Away
// http://www.dfuns.idv.tw

$(function(){
	
	var gNum=0;//組數的初始值
	var dX=0;//水平座標位置
	var WW=$(".slider").width();//外層寬度
	//以下變數為總組數
	
	var AA=Math.floor($(".slider ul").width()/WW);
	
	$(".status li").eq(gNum).addClass("now");
	
	
	function SS(){
		$(".slider ul").stop().animate({left:dX}, 700);
		$(".status li").removeClass().eq(gNum).addClass("now");
	}
	
	$(".status li").click(function(){
		gNum=$(this).index();
		dX = gNum*WW*-1;
		SS();
	});
	

});





