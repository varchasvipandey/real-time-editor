function refresh(){
    var y = document.getElementById('start-html');
    var textContent = document.getElementById('editor-textarea').value;
    document.getElementById('viewer').srcdoc = textContent;
    y.innerHTML = "Reset HTML";
}


function htmlStructure(){
    var x = document.getElementById('editor-textarea');
    var y = document.getElementById('start-html');
    x.value = '<!doctype html>\n<html lang="en">\n <head>\n\t<meta charset="utf-8">\n\t<title> The Web Page </title>\n </head>\n\n <body>\n\t<!--Type code here-->\n </body>\n\n</html>';
    y.innerHTML = "Start HTML";
}