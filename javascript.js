$("#accept-cookies").click(function () {
    $("#cookie-consent").css("display", "none");
    var now = new Date();
    var time = now.getTime();
    time += 30 * 1000;
    now.setTime(time);
    document.cookie = 'cookie-consent=1;expires=' + now.toUTCString();
});


console.log(document.cookie);
document.cookie = 'cookie-consent=2';

//Set cookie to different valuest for testing purposes. Only if it is 1, the box should not be displayed
//document.cookie = 'cookie-consent=2'
//If cookie exists
if (getCookie("cookie-consent") == "1") {
    //Remove display of box
    //alert("Hittade cookie, lägger inte dit consent box");
    //$("#cookie-consent").css("display", "none");
    //Do nothing



} else {
    $("#cookie-consent").css("display", "block");
}







//document.cookie = 'cookie-consent=1';

//console.log(getCookie('cookie-consent'));

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}
