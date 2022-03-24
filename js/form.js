
function register() {
    $("#login").css("left", "-400px");
    $("#register").css("left", "50px");
    $("#btn").css("left", "110px");
};
function login() {
    $("#login").css("left", "50px");
    $("#register").css("left", "450px");
    $("#btn").css("left", "0px");
};

$(".submit-btn").click(function (e) { 
    e.preventDefault();
    location.href = "./index.html";
});