$("#accept-cookies").click(function () {
    $("#cookie-consent").css("display", "none");
    document.cookie = 'cookie-consent=1';
});
document.cookie = 'cookie-consent=1';
console.log(document.cookie);
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
