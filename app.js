const btn = document.getElementById("btn");
const output = document.getElementById("output");

const facts = [
    "Chuck Norris ne ment pas, c'est la vérité qui se trompe. - Chuck Norris",
    "Quand la tartine de Chuck Norris tombe, la confiture change de côté. - Chuck Norris",
    "Chuck Norris a déjà compté jusqu'à l'infini. Deux fois. - Chuck Norris",
    "Quand Chuck Norris lit un Chuck Norris Fact, il ne rit pas. Il se souvient... - Chuck Norris",
    "Chuck Norris comprend Jean-Claude Van Damme. - Chuck Norris",
    "Chuck Norris peut remonter le terrain de foot dans Olive et Tom en moins d'un épisode. - Chuck Norris",
    "Un jour, Chuck Norris a perdu son alliance. Depuis c'est le bordel dans les terres du milieu... - Chuck Norris",
    "Maitre Yoda a perdu la vie le jour où il a appelé Chuck Norris Norris Chuck. - Chuck Norris",
    "Quand Chuck Norris s'est mis au judo, David Douillet s'est mis aux pièces jaunes. - Chuck Norris",
    "Avoir la tête dans le cul c'est possible, avec Chuck Norris. - Chuck Norris",
    ];
    console.log(facts);

btn.addEventListener("click", function() {
    let randomFacts = facts[Math.floor(Math.random()*facts.length)]
    output.innerHTML = randomFacts;
})