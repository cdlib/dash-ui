// ##### Main JavaScript ##### //

$(document).ready(function(){
  
  // ***** Facets ***** //

  $('.js-facet__deselect-all-button').hide();

  $('.js-facet__select-all-button').click(function(){
    $('.js-facet__check-input').prop('checked', true);
    $('.js-facet__select-all-button').hide();
    $('.js-facet__deselect-all-button').show();
  });

  $('.js-facet__deselect-all-button').click(function(){
    $('.js-facet__check-input').prop('checked', false);
    $('.js-facet__select-all-button').show();
    $('.js-facet__deselect-all-button').hide();
  });

  $('.js-facet__check-input').click(function(){
    $('.js-facet__select-all-button').hide();
    $('.js-facet__deselect-all-button').show();
  });

}); // Close $(document).ready(function()

// ***** Details Element ***** //

if (Modernizr.details) {

  // Details element supported:

  $('details').attr('aria-expanded', 'false');

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

  $('summary').siblings().hide();
  $('details').attr('aria-expanded', 'false');
  
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
