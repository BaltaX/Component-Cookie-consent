$("#accept-cookies").click(function () {
    $("#cookie-consent").css("display", "none");
    var now = new Date();
    var time = now.getTime();
    time += 30 * 1000;
    now.setTime(time);
    document.cookie = 'cookie-consent=1;expires=' + now.toUTCString();
});


console.log(document.cookie);

//If cookie exists
if (getCookie("cookie-consent") != "1") {
    $("#cookie-consent").css("display", "block");
}

//Returns value of cookie if cookie 'name' exists, else returns null
function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
