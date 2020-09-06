$(function(){
    const chatInput = $('#chat-input');
    const timeline = $('#timeline');

    $(document).on('click', '.textarea-up', function(){
         if($(this).hasClass('open')){
             $(this).removeClass('open');
             chatInput.animate({'height':'40px'},300);
             timeline.animate({'padding-bottom':'120px'},300);
         }else{
             $(this).addClass('open');
             chatInput.animate({'height':'300px'},300);
             timeline.animate({'padding-bottom':'420px',},300);
             $('body,html').animate({scrollTop: timeline.innerHeight()},300);
         }
    });
});