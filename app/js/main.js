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

  // details element supported:
  // $('.o-showhide').css('border', '1px solid green');

} else {

  // details element not supported:
  // $('.o-showhide').css('border', '1px solid red');

  $('.o-showhide__summary').siblings().hide();
  
  if ($('.o-showhide').is('[open]')) {
    $('[open]').children().show();
  }

  $('.o-showhide__summary').click(function(){
    $(this).siblings().toggle();
    
    if ($(this).parent().is('[open]')) {
      $(this).parent().removeAttr('open');
    } else {
      $(this).parent().attr('open', '');
    }
  });
}
