function typeText(message, lps, id) {
    if (message == "")
        return;
    if (message[0] == " ") {
        document.getElementById(id).innerHTML += "&nbsp;";
    } else {
        document.getElementById(id).innerHTML += message[0];
    }
    message = message.slice(1);
    window.setTimeout("typeText('" + message + "', " + lps + ", '" + id +"')", 1000/lps);
}