$("#accept-cookies").click(function () {
    $("#cookie-consent").css("display", "none");
});
document.cookie = 'cookie-consent=1';

console.log(setCookie('cookie-consent'));

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}
