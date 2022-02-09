$(function () {
  $('#instafeed').sortable({ items: 'li:not(.ui-state-disabled)' });
  $('#instafeed li').disableSelection();
});

const remove = (el) => el.remove();
