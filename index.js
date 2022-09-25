$("#menu").click(function(){
    $("nav .navigation ul").addClass("active");
});
$(document).on("click","#menu-close",function(){
    $("nav .navigation ul").removeClass("active");
});