const cats = [
    "Milo",
    "Otis",
    "Garfield"
]

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    // const cats2 = [...cats, `${name}`];     // v1 code
    const cats2 = [...cats];
    cats2.push(name);
    return cats2;
}

function prependCat(name) {
    // const cats2 = [`${name}`, ...cats];     // v1 code
    const cats2 = [...cats];
    cats2.unshift(name);
    return cats2;
}

function removeLastCat() {
    const cats2 = [...cats];
    cats2.pop();
    return cats2;
}

function removeFirstCat() {
    const cats2 = [...cats];
    cats2.shift();
    return cats2;
}