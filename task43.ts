console.log("\nTask # 43\n");

var magicians = ["Goga", "Zakota", "Bamboo", "Kodu"];

function show_magicians2(magicianNames: string[]) {
  for (var magician of magicianNames) {
    console.log(magician);
  }
}
function make_great2(magicianNames: string[]) {
  for (var x: number = 0; x < magicianNames.length; x++) {
    magicianNames[x] += " The Great";
  }
  return magicianNames;
}
//var greatMagicians = make_great2(magicians.map(n => n));
var greatMagicians = magicians.map((n) => n + " The Great");

show_magicians2(greatMagicians);
console.log("\nOrigional Array");
show_magicians2(magicians);
