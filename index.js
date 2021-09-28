
var outputBox = document.querySelector("#output-box");
var button = document.querySelector("#translate");
var textHere = document.querySelector("#text-here");

button.addEventListener("click", EventListener);

function EventListener(){
var url = "https://api.funtranslations.com/translate/minion.json" + "?" + "text=" + textHere.value ;
fetch(url).then((textRecived) => textRecived.json()).then((getData) => {
    outputBox.style.textTransform = "uppercase"
 outputBox.innerText =getData.contents.translated
})
}

