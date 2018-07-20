// Write JavaScript that will print out the popular song '99 bottles of beer'
//(or whatever the beverage of your choice is) to the console or the page.

// Song
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

// Final two verses
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.

// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.

function ninetyNine(bottles) {
    for (let i = bottles; i >= 0; i--) {
        let newVerse = document.createElement("p");
        let body = document.querySelector('body');
        body.appendChild(newVerse);
        newVerse.innerText = verse(i);
    }
}

function verse(num) {
    num1 = num;
    num2 = (num - 1);
    if (num === 1) {
        num2 = "no more";
    }
    if (num > 0) {
        songVerse = num1 + " bottles of beer on the wall, " + num1 + " bottles of beer.\nTake one down and pass it around, " + num2 + " bottles of beer on the wall.";
    } else {
        songVerse = "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.";
    }
    return songVerse;
}

ninetyNine(99);