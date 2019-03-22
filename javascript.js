//If consent box accepted, remove it and set cookie to 1 (=accepted)
$("#accept-cookies").click(function () {
    $("#cookie-consent").css("display", "none");
    //Calculate expiry date to 1 year from now
    var now = new Date();
    var time = now.getTime();
    time += 60 * 60 * 24 * 365 * 1000;
    now.setTime(time);
    //Set cookie to 1 and add expiry date
    document.cookie = 'cookie-consent=1;expires=' + now.toUTCString();
});

//If cookie does not exist/has the wrong value, display consent box
if (getCookie("cookie-consent") != "1") {
    $("#cookie-consent").css("display", "block");
}

//Help function that returns value of cookie if cookie 'name' exists, else returns null
function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
