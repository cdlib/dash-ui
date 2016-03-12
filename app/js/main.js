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

  // ***** Header Mobile Menu Toggle ***** //

  $('.js-header__menu-button').click(function(){
    $('.js-header__nav').toggleClass('c-header__nav c-header__nav--is-open');
  });

  // ***** Required Text Field State ***** //

  $('.c-input__field[required]').map(function() {
    // $(this).siblings('.c-input__label').removeClass();
    // $(this).siblings('.c-input__label--required').addClass();
  });

}); // Close $(document).ready(function()
