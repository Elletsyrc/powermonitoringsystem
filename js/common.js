const openNav = function(e) {
    $(".side-nav").css("width", "20rem").css("padding", "1rem");
    $(".main").css("margin-left", "20rem");

    $(".navbtn").off("click").delay(500).on("click", closeNav);
};

const closeNav = function(e) {
    $(".side-nav").css("width", "0").css("padding", "0");
    $(".main").css("margin-left", "0");

    $(".navbtn").off("click").delay(500).on("click", openNav);
};

$(".closebtn").click(closeNav);
$(".navbtn").on("click", openNav);