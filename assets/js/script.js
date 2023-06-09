$('.imageItem').click(function () {
    var src =$(this).find('img').attr('src')
     
    $('#ProductMainImage').attr('src',src)
});