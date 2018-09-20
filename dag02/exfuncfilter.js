var namenMetHoofdletters = [];
for (var i = 0; i < list.length; i++) {
    if (list[i].charAt(0) == list[i].charAt(0).toUpperCase()) {
        namenMetHoofdletters.push(list[i]);
    }
}
document.write(namenMetHoofdletters.join(", "));