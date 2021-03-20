// JavaScript Document
$(function() {　
  $(window).load(function() {　　
    $(window).bind('scroll resize', function() {　　
      var $this = $(this);　　
      var $this_Top = $this.scrollTop();

      　　 //當高度小於100時，關閉區塊 
      　　
      if ($this_Top < 50) {　　　
        $('#top-bar').stop().animate({
          top: "-65px"
        });　　　
		$(".main .mainTop .mainJay").css("margin-top","40px");
      }　　　　
      if ($this_Top > 50) {　　　　
        $('#top-bar').stop().animate({
          top: "0px"
        });　　
		
		$(".main .mainTop .mainJay").css("margin-top","-40px");
      }　　
    }).scroll();　
  });
});
