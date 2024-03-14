// Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
type magician = string;
let magicians: magician[] = ['alisha','tania','ifra'];
function make_great(magicians: magician[]): magician[]{
let modifiedmagicians: magician[] = [];
for (let magician of magicians){
    modifiedmagicians.push("the great" + magician);
}
return modifiedmagicians;
}
function show_magicians(magicians: magician[]): void{
    for (let magician of magicians) {
        console.log(magician);
    }
}
let greatmagicians: magician[] = make_great([...magicians]);
console.log("original magicians:");
show_magicians(magicians);
console.log("\ngreat magicians:");
show_magicians(greatmagicians);
