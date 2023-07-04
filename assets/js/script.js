$(".imageItem").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  var src = $(this).find("img").attr("src");

  $(".coverImage").attr("src", src);
});
// git add .;git commit -m '29/06';git push -u origin master;
