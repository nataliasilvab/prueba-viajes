$(document).ready(function () {
    $("a").click(function () {
        var gato = this.hash
        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top - 70
            },
            800
        )
    })
})

var lastScrollTop = 0;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    $("#navbar").removeClass("bg-transparent").addClass("bg-primary");
});

$("#btn-nav").click(function () {
    $("#navbar").removeClass("bg-transparent").addClass("bg-primary");
});

