function sortByLength(array) {
    // Return an array containing the same strings, ordered from shortest to longest
    return array.sort((s1, s2) => {

        console.log(`Comparo ${s1} con ${s2}`);

        if (s1.length > s2.length) {
            console.log(`${s1} tiene que ir más al final del array`);
            return 1;
        }

        else if (s2.length > s1.length) {
            console.log(`${s1} tiene que ir más al princpio del array`);

            return -1;
        }

        return 0;
    })

};

let palabras = ["Telescopes", "Glasses", "eyes", "Eyes"];

console.log(sortByLength(palabras));

// [ "Eyes", "Glasses", "Telescopes"];