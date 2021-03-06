// 
(function($){
  // jQuery

  // 변수 생성
  var viewBox = $('#viewBox');
  var indicator = viewBox.find('.indicator');
  var indiUl = indicator.find('ul');
  var indiLi = indiUl.find('li');
  var indiLink = indiLi.find('a');

  var viewBoxInner = viewBox.find('.viewbox_inner');
  var viewBoxInnerUl = viewBoxInner.find('ul');

  var n = 0;

  // 이벤트
  indiLink.on('click', function(e){  
    e.preventDefault();                           

    var _thisI = $(this).parent().index();  
    n = _thisI;                             

    viewBoxInnerUl.stop().animate({marginLeft: (-100*n) + '%'})

    indiLi.eq(n).addClass('act');                
    indiLi.eq(n).siblings().removeClass('act');       
  });
  // viewBox // ========================================= //
 
})(jQuery);