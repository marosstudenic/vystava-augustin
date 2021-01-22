$(document).ready(function () {
    var loaded = false;
    $('iframe').on('load', function(){
        loaded = true;
        console.log('iframe loaded successfully')
    });

  $(".cover").click(function () {
    if(loaded){
        $(this).animate({ opacity: 0 }, 100, function () {
            $(this).addClass("hide");
            $(this).siblings().css("top", "0");
          });
    }else {
        console.log("eeh");
        $(this).css("background-image", 'url("assets/covers/loader.gif")');
        let spravnyCover = $(this);
        $('iframe').on('load', function(){
            spravnyCover.animate({opacity:3}, 100, function () {
                spravnyCover.addClass("hide");
                spravnyCover.siblings().css("top", "0");
            })
        });
    }
    
  });
 
});


