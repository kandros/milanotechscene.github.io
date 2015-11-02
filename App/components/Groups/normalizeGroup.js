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

}
module.exports = normalizeGroup;
