function dwarfRollCall(dwarves) {
var output = ""
for (var i = 0; i < dwarves.length; i++){
  output += (i+1 + ". " + dwarves[i] +" " );
}
return output
}

function summonCaptainPlanet(planeteerCalls){
var cappl = []
var i;
for (i=0; i < planeteerCalls.length; i++){
cappl.push(planeteerCalls[i].toUpperCase()+ "!");
}
return cappl
}

function longPlaneteerCalls(words) {
  for (var i=0; i<words.length; i++){
    if (words[i].length >4){
      return true
    }
  }
  return false
}

function findTheCheese (foods) {
  var cheeses = ['cheddar','gouda','camambert'];
  for (var i=0; i<foods.length; i++){
    for (var e=0; e<cheeses.length; e++)
    {
      if (foods[i] === cheeses[e]){
      return foods[i]
    }
  }

}
return 'no cheese!'
}


//The types of cheese that appear are  cheddar, gouda, and camembert.
