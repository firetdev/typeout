/*
Message: the text you want typed out
lps: the number of letters to type per second
id: id of the HTML tag you are typing it into
*/
var inTag = false;
function typeText(message, lps, id) {
    if (inTag) {
        document.getElementById(id).innerHTML = document.getElementById(id).innerHTML.replace(new RegExp("<\/[a-zA-Z][^>]*>", "g"), "");
    }
    if (message == "")
        return;
    if (message[0] == "<") {
        if (message[1] != "b")
            inTag = !inTag;
        var tagRegex = /<\/?[a-zA-Z][^>]*>/;
        var tag = message.match(tagRegex)[0];
        document.getElementById(id).innerHTML += tag;
        message = message.replace(tagRegex, "");
    }
    if (message[0] == " ") {
        document.getElementById(id).innerHTML += "&nbsp;";
    } else {
        document.getElementById(id).innerHTML += message[0];
    }
    message = message.slice(1);
    window.setTimeout("typeText('" + message + "', " + lps + ", '" + id +"')", 1000/lps);
}