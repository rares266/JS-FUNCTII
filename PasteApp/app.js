function changeMessage() {
    var messages = [
        "Fie ca lumina și bucuria Învierii Domnului să-ți umple inima și casa în această zi de Paște!",//1
        "Sărbătoarea Învierii să-ți aducă pace, speranță și iubire în suflet!",//2
        "Îți doresc să simți puterea și frumusețea Învierii în fiecare aspect al vieții tale! Paște fericit!",//3
        "Fie ca minunea Învierii să reînnoiască spiritul tău și să-ți aducă fericire și lumină în drumul vieții!",//4
        "Cu dragoste și recunoștință, îți urez sărbători de Paște pline de pace și bucurie, împreună cu cei dragi!",//5
        "În ziua Învierii Domnului, îți trimit cele mai sincere urări de fericire, sănătate și împliniri! Paște fericit!"//6
    ];

    //In aceasta variabila stochez indexul mesajului
    //FLOOR - elimina partea fractionala, RAMDOM - ia valori intre 0 si 1, LENGTH - lungimea array-ului
    var randomIndex = Math.floor(Math.random() * messages.length);


    let easterMessage = document.getElementById("easterMessage");

    if(easterMessage) {
        easterMessage.innerHTML = messages[randomIndex] //INNER HTML - seteaza mesajul, modificarea mesajului
    }

}
