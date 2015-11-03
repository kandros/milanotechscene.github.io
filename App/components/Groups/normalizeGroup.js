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


setTimeout(function () {
  var images = $('.group__logo');
  $.each(images,function() {
    var img = $(this).find('img');
    var nh = img.prop('height');
    if (nh < 70) {
      $(this).addClass('group__logo--v-center');
    }
  });
}, 3000);


}
module.exports = normalizeGroup;
