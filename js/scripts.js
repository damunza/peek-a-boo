$('document').ready(function(){
  $('.clickable').click(function(){
    $('.hidden').click(function(){
      $('img').show();
    });//allows the image to show .hidden means the image was hidden
    $('.showing').click(function(){
      $('img').hide();
    });//allows to hide the image .showing means the image was showing.
  });
});
