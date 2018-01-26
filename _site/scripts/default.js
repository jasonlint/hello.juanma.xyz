////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function hiddenCode() {

    var kkeys = [];
    var konami = '38,38,40,40,37,39,37,39,66,65'; // up, up, down, down, left, right, left, right, b, a
    var sfii = '40,82,38,76,89,66,88,65'; // down, r, up, l, y, b, x, a

    $(document).keydown(function(e) {
      kkeys.push(e.keyCode);
      if (kkeys.toString().indexOf(konami) >= 0) {
        kkeys = [];
        window.location.href = 'https://juanma.xxx';
      } else if (kkeys.toString().indexOf(sfii) >= 0) {
        kkeys = [];
        window.location.href = 'https://eeeeeeeeeeeeee.ee';
      }
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
    $('html body > span').text( rant );
  }

  function replacePilcrow() {

    $('body').html($('body').html().replace(/\¶/g, '<span class="pilcrow"></span>'));
  }

  function revealContent() {

    $('body').removeClass('hide').addClass('fadeIn');
  }

  function switchStyle() {

    var isToggled = false;

    $(function() {
      $('a[title="Warp Zone"]').on('click', function() {

        isToggled = !isToggled;

        if (isToggled) {
          $('link[href="http://localhost:4000/styles/default.css"]').attr('href', 'http://localhost:4000/styles/alternate.css').fadeToggle( 'slow', 'linear' );
        } else {
          $('link[href="http://localhost:4000/styles/alternate.css"]').attr('href', 'http://localhost:4000/styles/default.css').fadeToggle( 'slow', 'linear' );
        }
      })
    });
  };

  function switchLanguage() {

    $('*[href="ca"]').click(function(e) {
      e.preventDefault();
      $('*[href="en"], *[href="es"], *[href="ja"]').removeClass('active');
      $(this).addClass('active');
      $('html').attr('xml:lang', 'ca').attr('lang', 'ca');
      $('*[lang="ca"]').not('html').removeClass('hide').addClass('show');
      $('*[lang="en"], *[lang="es"], *[lang="ja"]').not('html').removeClass('show').addClass('hide');
    });

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    $('*[href="en"]').click(function(e) {
      e.preventDefault();
      $('*[href="ca"], *[href="es"], *[href="ja"]').removeClass('active');
      $(this).addClass('active');
      $('html').attr('xml:lang', 'en').attr('lang', 'en');
      $('*[lang="en"]').not('html').removeClass('hide').addClass('show');
      $('*[lang="ca"], *[lang="es"], *[lang="ja"]').not('html').removeClass('show').addClass('hide');
    });

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    $('*[href="es"]').click(function(e) {
      e.preventDefault();
      $('*[href="ca"], *[href="en"], *[href="ja"]').removeClass('active');
      $(this).addClass('active');
      $('html').attr('xml:lang', 'es').attr('lang', 'es');
      $('*[lang="es"]').not('html').removeClass('hide').addClass('show');
      $('*[lang="ca"], *[lang="en"], *[lang="ja"]').not('html').removeClass('show').addClass('hide');
    });

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    $('*[href="ja"]').click(function(e) {
      e.preventDefault();
      $('*[href="ca"], *[href="en"], *[href="es"]').removeClass('active');
      $(this).addClass('active');
      $('html').attr('xml:lang', 'ja').attr('lang', 'ja');
      $('*[lang="ja"]').not('html').removeClass('hide').addClass('show');
      $('*[lang="ca"], *[lang="en"], *[lang="es"]').not('html').removeClass('show').addClass('hide');
    });
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

jQuery(document).ready(function ($) {

  hiddenCode();
//randomTitle();
  replacePilcrow();
  revealContent();
  switchLanguage();
//switchStyle();

  $(window).on('load', function () {
  });

});

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
