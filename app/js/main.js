// ##### Main JavaScript ##### //

$(document).ready(function(){
  
  // ***** Select Content Object ***** //

  $('.o-select__select').change(function(){
    $(this).find('option:selected').each(function(){
      if($(this).hasClass('js-select__option1')){
        $(this).parents('.c-input').siblings('.o-select__content').not().hide();
        $(this).parents('.c-input').siblings('.js-select__content1').show();
      }
      else if($(this).hasClass('js-select__option2')){
        $(this).parents('.c-input').siblings('.o-select__content').not().hide();
        $(this).parents('.c-input').siblings('.js-select__content2').show();
      }
      else if($(this).hasClass('js-select__option3')){
        $(this).parents('.c-input').siblings('.o-select__content').not().hide();
        $(this).parents('.c-input').siblings('.js-select__content3').show();
      }
      else{
        $(this).parents('.c-input').siblings('.o-select__content').hide();
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
