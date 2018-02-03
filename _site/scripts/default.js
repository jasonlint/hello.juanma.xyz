////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function externalLink() {

    $.expr[':'].external = function(obj) {
      return !obj.href.match(/^mailto\:/) && (obj.hostname != location.hostname);
    };
    $('a:external').addClass('external').attr('target', '_blank');
  }

  function glitch() {

    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var img = new Image();
    img.src = 'https://juanma.xyz/images/parked_domain_girl.jpg';
    img.onload = function() {
      draw(this);
    };

    function draw(img) {

      if( $('.ffffound').length ) {
        var ffffound = document.getElementById('ffffound');
        var canvas = ffffound.getContext('2d');
        ffffound.setAttribute("width", img.width);
        ffffound.setAttribute("height", img.height);
        var verticalSlices = Math.round(img.height / 16);
        var maxHorizOffset = 16;
        for (var i = 0; i < verticalSlices; i++)  {
          var horizOffset = getRandom(-Math.abs(maxHorizOffset), maxHorizOffset);
          canvas.drawImage(img, 0, i * verticalSlices, img.width, i * verticalSlices + verticalSlices, horizOffset, i * verticalSlices, img.width, i * verticalSlices + verticalSlices);
        }
      }
    }
  }

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

  function randomFavicon() {

    var something = new Array(
      // 'https://www.stackoverflow.com/favicon.ico',
      // 'https://ssl.gstatic.com/ui/v1/icons/mail/images/favicon5.ico',
      // 'https://www.coinbase.com/favicon.ico',
      // 'https://www.kraken.com/img/favicon.ico',
      // 'https://duckduckgo.com/favicon.ico',
      // 'https://www.wikipedia.org/static/favicon/wikipedia.ico',
      // 'https://abs.twimg.com/favicons/favicon.ico',
      // 'https://mbp.yimg.com/sy/rz/l/favicon.ico',
      // 'https://www.youtube.com/yts/img/favicon-vfl8qSV2F.ico',
      // 'https://static.xx.fbcdn.net/rsrc.php/yl/r/H3nktOa7ZMg.ico'
      '1533927', // Bleach No Chlorine
      '1533928', // Bleach
      '1533929', // Drip Drying
      '1533930', // Chemical Cleaning
      '1533931', // Dry Flat
      '1533932', // No Dry Cleaning
      '1533933', // Drying
      '1533934', // Line Dry
      '1533935', // Hand Wash
      '1533936', // Ironing Low Temp
      '1533937', // Ironing High Temp
      '1533938', // Ironing Medium Temp
      '1533939', // Very Gentle Wash
      '1533940', // Ironing
      '1533941', // No Bleaching
      '1533942', // Wash Low Temp
      '1533943', // Gentle Wash
      '1533944', // Wash High Temp
      '1533945', // No Ironing
      '1533946', // No Wash
      '1533947', // Tumble Dry Medium Temp
      '1533948', // Tumble Dry Low Temp
      '1533949', // No Tumble Dry
      '1533950', // Tumble Dry High Temp
      '1533951', // Wash Medium Temp
      '1533952', // Tumble Dry
      '1533953', // Tumble Dry
      '1533954'  // Washing
    ),
    icon = something[Math.floor( Math.random() * something.length )];

    var appleTouchIcon = document.querySelector("link[href*='/apple-touch-icon.png']") || document.createElement('link');
    appleTouchIcon.rel = 'apple-touch-icon.png';
    appleTouchIcon.sizes = '180x180';
    appleTouchIcon.href = '/laundry-care-symbols/' + icon + '/apple-touch-icon.png';
    document.getElementsByTagName('head')[0].appendChild(appleTouchIcon);

    var favicon32x32 = document.querySelector("link[href*='/favicon-32x32.png']") || document.createElement('link');
    favicon32x32.rel = 'icon';
    favicon32x32.type = 'image/png';
    favicon32x32.sizes = '32x32';
    favicon32x32.href = '/laundry-care-symbols/' + icon + '/favicon-32x32.png';
    document.getElementsByTagName('head')[0].appendChild(favicon32x32);

    // var favicon16x16 = document.querySelector("link[href*='/favicon-16x16.png']") || document.createElement('link');
    // favicon16x16.rel = 'icon';
    // favicon16x16.type = 'image/png';
    // favicon16x16.sizes = '16x16';
    // favicon16x16.href = '/laundry-care-symbols/' + icon + '/favicon-16x16.png';
    // document.getElementsByTagName('head')[0].appendChild(favicon16x16);

    var manifest = document.querySelector("link[href*='/manifest.json']") || document.createElement('link');
    manifest.rel = 'manifest';
    manifest.href = '/laundry-care-symbols/' + icon + '/manifest.json';
    document.getElementsByTagName('head')[0].appendChild(manifest);

    var safariPinnedTab = document.querySelector("link[href*='/safari-pinned-tab.svg']") || document.createElement('link');
    safariPinnedTab.rel = 'mask-icon';
    safariPinnedTab.href = '/laundry-care-symbols/' + icon + '/safari-pinned-tab.svg';
    safariPinnedTab.color = '#000000';
    document.getElementsByTagName('head')[0].appendChild(safariPinnedTab);

    var themeColor = document.querySelector("meta[name*='theme-color']") || document.createElement('meta');
    themeColor.name = 'theme-color';
    themeColor.content = '#ffffff';
    document.getElementsByTagName('head')[0].appendChild(themeColor);
  }

  function replacePilcrow() {

    $('body').html($('body').html().replace(/\¶/g, '<span class="pilcrow"></span>'));
  }

  function revealContent() {

    $('.page').removeClass('hide').addClass('fadeIn');
  }

  function switchLanguage() {

    $('*[href="#ca"]').click(function() {
      $('html').attr('xml:lang', 'ca').attr('lang', 'ca');
      $('*[lang="ca"]').not('html').removeClass('hide').addClass('show');
      $('*[lang="en"], *[lang="es"], *[lang="jp"]').not('html').removeClass('show').addClass('hide');
    });

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    $('*[href="#en"]').click(function() {
      $('html').attr('xml:lang', 'en').attr('lang', 'en');
      $('*[lang="en"]').not('html').removeClass('hide').addClass('show');
      $('*[lang="ca"], *[lang="es"], *[lang="jp"]').not('html').removeClass('show').addClass('hide');
    });

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    $('*[href="#es"]').click(function() {
      $('html').attr('xml:lang', 'es').attr('lang', 'es');
      $('*[lang="es"]').not('html').removeClass('hide').addClass('show');
      $('*[lang="ca"], *[lang="en"], *[lang="jp"]').not('html').removeClass('show').addClass('hide');
    });

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    $('*[href="#jp"]').click(function() {
      $('html').attr('xml:lang', 'jp').attr('lang', 'jp');
      $('*[lang="jp"]').not('html').removeClass('hide').addClass('show');
      $('*[lang="ca"], *[lang="en"], *[lang="es"]').not('html').removeClass('show').addClass('hide');
    });
  };

  function windowLocationHash() {

    if (window.location.hash) {
      var hash = window.location.hash.slice(1); // get the hash, and strip out the "#"
      $('*[href="#' + hash + '"]').trigger('click');
    };

    $(window).on('hashchange', function() {
      var hash = window.location.hash.slice(1); // get the hash, and strip out the "#"
      $('*[href="#' + hash + '"]').trigger('click');
    });
};

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

jQuery(document).ready(function ($) {

  externalLink();
  glitch();
  hiddenCode();
  randomFavicon();
  replacePilcrow();
  revealContent();
  switchLanguage();
  windowLocationHash();

  if (window.location.href === window.location.origin + '/') {
    window.location.hash = '#en'; // Because english is the default language
  }

  console.log('↑ ↑ ↓ ↓ ← → ← → b a');
});

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
