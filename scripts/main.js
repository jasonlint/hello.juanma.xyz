jQuery(document).ready(function ($) {

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function changeLang() {

    $('a.langCa').on('click', function(e) {
      e.preventDefault();
      $('html').attr('lang', 'ca');
      $('section.langEn, section.langEs, section.langJa').removeClass('show').addClass('hide');
      $('section.langCa').removeClass('hide').addClass('show');
    });

    $('a.langEn').on('click', function(e) {
      e.preventDefault();
      $('html').attr('lang', 'en');
      $('section.langCa, section.langEs, section.langJa').removeClass('show').addClass('hide');
      $('section.langEn').removeClass('hide').addClass('show');
    });

    $('a.langEs').on('click', function(e) {
      e.preventDefault();
      $('html').attr('lang', 'es');
      $('section.langCa, section.langEn, section.langJa').removeClass('show').addClass('hide');
      $('section.langEs').removeClass('hide').addClass('show');
    });

    $('a.langJa').on('click', function(e) {
      e.preventDefault();
      $('html').attr('lang', 'ja');
      $('section.langCa, section.langEn, section.langEs').removeClass('show').addClass('hide');
      $('section.langJa').removeClass('hide').addClass('show');
    });
  };

  function replaceAllSvg() {

    // Replace all SVG images with inline SVG using jQuery
    // https://gist.github.com/Bloggerschmidt/61beeca2cce94a70c9df
    $('img').filter(function() {
      return this.src.match(/.*\.svg$/);
    }).each(function(){
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');
      $.get(imgURL, function(data) {
        var $svg = jQuery(data).find('svg');
        if(typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
        }
        if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        $img.replaceWith($svg);
      }, 'xml');
    });

  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

changeLang();
//replaceAllSvg();

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

});
