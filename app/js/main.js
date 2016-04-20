// ##### Main JavaScript ##### //

$(document).ready(function(){
  
  // ***** License Component ***** //

  $('.js-license_select').change(function(){
    $(this).find("option:selected").each(function(){
      if($(this).hasClass('js-license__option--cc0')){
        $('.c-license__desc').not().hide();
        $('.js-license__desc--cc0').show();
        $('.c-license__logo').not().hide();
        $('.js-license__logo--cc0').show();
      }
      else if($(this).hasClass('js-license__option--ccby')){
        $('.c-license__desc').not().hide();
        $('.js-license__desc--ccby').show();
        $('.c-license__logo').not().hide();
        $('.js-license__logo--ccby').show();
      }
      else if($(this).hasClass('js-license__option--ccbync')){
        $('.c-license__desc').not().hide();
        $('.js-license__desc--ccbync').show();
        $('.c-license__logo').not().hide();
        $('.js-license__logo--ccbync').show();
      }
      else{
        $('.c-license__desc').hide();
        $('.c-license__logo').hide();
      }
    });
  }).change();

  // ***** Location Inputs ***** //

  $('.js-location__box-inputs').hide();

  $('.js-location__point-button').click(function(){
    $('.js-location__point-inputs').show();
    $('.js-location__box-inputs').hide();
    $('.js-location__point-button').removeClass('c-location__point-button');
    $('.js-location__point-button').addClass('c-location__point-button--active');
    $('.js-location__box-button').removeClass('c-location__box-button--active');
    $('.js-location__box-button').addClass('c-location__box-button');
  });

  $('.js-location__box-button').click(function(){
    $('.js-location__box-inputs').show();
    $('.js-location__point-inputs').hide();
    $('.js-location__box-button').removeClass('c-location__box-button');
    $('.js-location__box-button').addClass('c-location__box-button--active');
    $('.js-location__point-button').removeClass('c-location__point-button--active');
    $('.js-location__point-button').addClass('c-location__point-button');
  });

  // ***** Facets ***** //

  $('.js-facet__deselect-button').click(function(){
    $(this).parent().siblings().children('.js-facet__check-input').prop('checked', false);
    $(this).attr('disabled', '');
  });

  $('.js-facet__check-input').click(function() {
    if ($(this).is(':checked')) {
      $(this).parent().siblings().find('.js-facet__deselect-button').removeAttr('disabled');
    } else {
      $(this).parent().siblings().find('.js-facet__deselect-button').attr('disabled', '');
    }
    
  });

  $('.js-facet__toggle-button').click(function(){
    $(this).toggleClass('c-facet__toggle-button--open c-facet__toggle-button');
    $(this).parents().siblings('.js-facet__check-group').toggleClass('c-facet__check-group--open c-facet__check-group');
    $(this).parent().siblings('.js-facet__deselect-button').toggleClass('c-facet__deselect-button--open c-facet__deselect-button');
  });

  // ***** Alert Close ***** //

  $('.js-alert__close').click(function(){
    $(this).parent('.js-alert').fadeToggle();
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
