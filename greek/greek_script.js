function specifyGod() {
    var e = document.getElementById("gods");
    var value = e.options[e.selectedIndex].value;

    window.open("https://homepages.tuni.fi/sardorbek.mukhudinov/greek/greek.html#" + value, "_self");
}