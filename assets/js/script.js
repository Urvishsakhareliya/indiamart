$(".imageItem").click(function () {
  var src = $(this).find("img").attr("src");

  $(".coverImage").attr("src", src);
});
