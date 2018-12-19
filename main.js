let color = prompt("Enter a color:");
let creature = prompt("Enter a creature");
let adjective = prompt("Enter an adjective");
let verb = prompt("Enter a verb in the past tense");



function myStory() {
    let story = prompt("Which story would you like? <br> a) Snacking <br> b) Escaping <br> c) Winning");
    if(story == "a") {
        document.write("After snacking on " + adjective + " treats, the " + color + " bellied " + creature + " " + verb + " for hours.");
    } else if(story == "b") {
        document.write("Amelia " + verb + " through the " + adjective + " " + color + " nebula escaping the space " + creature + "."); 
    } else {
        document.write("Jackson chose his " + adjective + ", " + color + creature + " card and " + verb + " it to the table knowing he won.");
    }
}

myStory();