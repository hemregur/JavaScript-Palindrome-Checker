let out = document.querySelector(".out");
let text = document.querySelector("#drome");
let textVal;
let textVal2;
let submit = document.querySelector("#btn");

function polindrom() {
    textVal = text.value;
    textVal2 = text.value.split("").reverse().join(""); // 1) split("") ile karakterleri ayırdık 2) reverse() ile ters çevirdik 3) join("") ile birleştirdik.

    if (textVal.length) {
        if (textVal === textVal2) {
            out.innerText = "Tebrikler, bu bir Palindrom!";
            out.style.color = "#d1f1ff";
        } else {
            out.innerText = "Hata, bu bir Palindrom değldir!";
            out.style.color = "#ffd1d1";
        }
    } else {
        out.innerText = "Hata, boş bırakılamaz!";
        out.style.color = "#ffd1d1";
    }
}
submit.addEventListener('click', polindrom);
document.addEventListener('keypress', () => {
    if (event.key === "Enter") {
        polindrom();
    }
});