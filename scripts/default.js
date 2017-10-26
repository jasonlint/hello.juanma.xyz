////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function initPopover() {

    $('aside > small').popover({
      content: "I'm a human.",
      placement: 'top',
      template: '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-body"></div></div>',
      trigger: 'hover'
    });
  }

  function randomTitle() {

    var something = new Array(
      "I'm the operator with my pocket calculator",
      "I program my home computer, beam myself into the future",
      "Boing Boom Tschak"
    ),
    rant = something[Math.floor( Math.random() * something.length )];
    $('html head title').text( rant );
  }

  function replacePilcrow() {

    $('body').html($('body').html().replace(/\¶/g, '<span class="pilcrow"></span>'));
  }

  function revealContent() {

    $('body').removeClass('hide').addClass('fadeIn');
  }

  function stopHeartbeat() {

    $('aside > small > a').hover(
      function() {
        $(this).removeClass('heartbeat');
      }, function() {
        $(this).addClass('heartbeat');
      }
    );
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

jQuery(document).ready(function ($) {

  randomTitle();
  replacePilcrow();
  //stopHeartbeat();
  initPopover();

  // waitForImages
  // https://github.com/alexanderdickson/waitForImages
  $('body').waitForImages().done(function() {

    revealContent();
    updateImageSize();
    updateFigureHeight();
    updateArticleHeight();
  });


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

  $(window).on('load', function () {

  });

});

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
