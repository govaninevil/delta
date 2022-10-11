$(document).on('ready', function () {
    $(document).on('click','.menu-btn',function(event){
      $('body').toggleClass('menu-open');
    });
    $(".nav-box li").click(function(){
      $(this).addClass("active");
      $(".nav-box li").not(this).removeClass("active");
    });
});