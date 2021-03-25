// 	forgery:偽造
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        console.log("document.cookie", document.cookie);
        var cookies = document.cookie.split(";")
        console.log("cookies", cookies);
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            console.log(`cookie${i}`, cookie)
            if (cookie.substring(0, name.length + 1) === name + "=") {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    console.log("cookieValue", cookieValue);
    return cookieValue;
}
var CSRF_TOKEN = getCookie("csrftoken");

export { CSRF_TOKEN };