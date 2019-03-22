$("#accept-cookies").click(function () {
    $("#cookie-consent").css("display", "none");
});

//Does cookie exist
if (getCookie("cookie-consent") == 1 {
        //Remove display of box
        alert("Hittade cookie")
    } else {
        alert("Hittade inte cookie")
    }







    //document.cookie = 'cookie-consent=1';

    //console.log(getCookie('cookie-consent'));

    function getCookie(name) {
        var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
    }
