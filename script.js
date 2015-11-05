$(document).ready(function () {
    $('ul.nav > li').hover(function () {
        $(this).find('span').stop(true, true).delay(200).fadeIn();
    }, function () {
        $(this).find('span').stop(true, true).delay(200).fadeOut();
    });
    //$('.collapse').collapse("toggle");
    $('.col-md-3 [type="checkbox"]').click(function () {
        var rel_id = $(this).parent().parent().parent().parent().attr("id");
        if ($(this).parent().parent().parent().find('[type="checkbox"]:not(:checked)').length == 0) {
            $('[rel="'+rel_id+'"]').removeClass("btn-default").addClass("btn-success");
        } else {
            $('[rel="'+rel_id+'"]').removeClass("btn-success").addClass("btn-default");
        }
    });
    $(".tg_btn").click(function(){
        if ($("i",this).is(".glyphicon-chevron-up")){
            $("i",this).removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
        } else {
            $("i",this).removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
        }
        $(this).parent().parent().parent().find(".collapse").slideToggle("slow");
    });
        $("#datepicker1, #datepicker2").datepicker({
        });
});

