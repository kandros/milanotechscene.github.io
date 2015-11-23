function normalizeGroup() {

  var titles = $('.group__name');
  titles.each(function() {
    var titleLength = $(this).html().length;
    if (titleLength > 19) {
      $(this).css({
        fontSize: '12px'
      });
    }
  });

$('.group__logo img').load(function() {
  var h = $(this).prop('height');
  if (h < 70) {
    $(this).parent('.group__logo').addClass('group__logo--v-center');
  }
});

}
module.exports = normalizeGroup;
