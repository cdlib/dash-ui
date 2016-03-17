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

  // ***** Required Field State ***** //

  $('[required]').map(function() {
    $(this).siblings('label').removeClass('c-input__label');
    $(this).siblings('label').addClass('c-input__label--required');
  });

  // ***** Toggle Table Heading Buttons ***** //

  $('.js-table-heading__button-hide').hide();
  $('.js-table__details--hide').toggleClass('js-table__details--hide js-table__details--show');

  $('.js-table-heading__button-show').click(function(){
    $('.js-table-heading__button-show').hide();
    $('.js-table-heading__button-hide').show();
    $('.js-table__details--hide').toggleClass('js-table__details--hide js-table__details--show');
  });

  $('.js-table-heading__button-hide').click(function(){
    $('.js-table-heading__button-hide').hide();
    $('.js-table-heading__button-show').show();
    $('.js-table__details--show').toggleClass('js-table__details--show js-table__details--hide');
  });

}); // Close $(document).ready(function()
