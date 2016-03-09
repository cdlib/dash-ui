// ##### Details Element Polyfill ##### //

// Detect via Modernizr if details element is supported in a browser:

if (Modernizr.details) {

  // Details element supported:

  $('details').attr('aria-expanded', 'false');
  $('summary').attr('role', 'button');

  if ($('details').is('[open]')) {
    $('[open]').attr('aria-expanded', 'true');
  }

  $('summary').click(function(){
    if ($(this).parent().is('[open]')) {
      $(this).parent().attr('aria-expanded', 'false');
    } else {
      $(this).parent().attr('aria-expanded', 'true');
    }
  });

} else {

  // Details element not supported:

  $('details').attr('aria-expanded', 'false');
  $('summary').attr('role', 'button');
  $('summary').siblings().hide();

  if ($('details').is('[open]')) {
    $('[open]').children().show();
    $('[open]').attr('aria-expanded', 'true');
  }

  $('summary').click(function(){
    $(this).siblings().toggle();

    if ($(this).parent().is('[open]')) {
      $(this).parent().removeAttr('open');
      $(this).parent().attr('aria-expanded', 'false');
    } else {
      $(this).parent().attr('open', '');
      $(this).parent().attr('aria-expanded', 'true');
    }
  });
}
