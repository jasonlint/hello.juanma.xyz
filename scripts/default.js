jQuery(document).ready(function ($) {

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function randomTitle() {

    var something = new Array(
      "I'm the operator with my pocket calculator",
      "I program my home computer, beam myself into the future",
      "Boing Boom Tschak"
    ),
    rant = something[Math.floor( Math.random() * something.length )];
    $('html head title').text( rant );
  }

  function updateImageSize() {

    $('article > figure').imagefit();
  }

  function updateFigureHeight() {

    var imageHeight = $('.img-fluid').height();
    $('article > figure').css({ 'height' : imageHeight + 'px' });
  }

  function updateArticleHeight() {

    var imageHeight = $('.img-fluid').height();
    $('article').css({ 'height' : imageHeight + (imageHeight / 2) + 'px', 'line-height' : imageHeight + (imageHeight / 2) + 'px' });
  }

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  randomTitle();
  updateImageSize();
  updateFigureHeight();
  updateArticleHeight();

  if ($(window).width() < 844.24 + 158) {

    updateFigureHeight();
  }
  if ($(window).width() < 844.24 + 32) {

    updateArticleHeight();
  }
  else {
  }

  $(window).resize(function () {

    if ($(window).width() < 844.24 + 158) {

      updateFigureHeight();
    }
    if ($(window).width() < 844.24 + 32) {

      updateArticleHeight();
    }
    else {
    }
  });

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

});
