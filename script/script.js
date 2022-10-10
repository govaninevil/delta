$(document).on('ready', function () {
    $(document).on('click','.menu-btn',function(event){
      $('body').toggleClass('menu-open');
    });
    $(".nav-box li").click(function(){
      $(this).addClass("active");
      $(".nav-box li").not(this).removeClass("active");
    });

    $('select').change(function(){
      if($('select option:selected').text() == "Conformation Number"){
      $('.confermation-number').show();
      }
      else{
      $('.confermation-number').hide();
      }
    });

    $('select').change(function(){
      if($('select option:selected').text() == "Credit/Debit Card Number"){
      $('.card-number').show();
      }
      else{
      $('.card-number').hide();
      }
    });

    $('select').change(function(){
      if($('select option:selected').text() == "Ticket Number"){
      $('.ticket-number').show();
      }
      else{
      $('.ticket-number').hide();
      }
    });
});