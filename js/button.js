function buttonclick() {
    document.getElementById("clickmessage").style.display = 'block';
}

function buttontest() {
    buttonclick;
    if (document.getElementById("clickmessage").is(':visible')) {
        visible = true;
    }
}