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

  function replacePilcrow() {

    $('body').html($('body').html().replace(/\¶/g, '<span class="pilcrow"></span>'));
  }

  function revealContent() {

    $('body').removeClass('hide').addClass('fadeIn');
  }

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

  function externalLink() {

    $("a[href^='http']:not([href*='juanma.xyz'])").each(function() {
      $(this).click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        window.open(this.href, '_blank');
      });
      $(this).append('<span class="external-link">↗</span>')
   });
  }

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

jQuery(document).ready(function ($) {

  hiddenCode();
  replacePilcrow();
  revealContent();
  switchLanguage();
  externalLink();

  $(window).on('load', function () {
  });

});

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
