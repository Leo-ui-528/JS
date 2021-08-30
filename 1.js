const x = 345;
function f(num) {
    let numCopy = num;

    if (num < 0 || num > 999) {
        console.log('error');
        return;
    }
    const r = []

    for (let i = 0; i < 3; i++) {
        r.push(numCopy % 10);
        numCopy = Math.floor(numCopy / 10);
    }
    console.log(r)

    if (num > 99) {
        return { 'сотни': r[2], 'десятки': r[1], 'единицы': r[0] }
    } else if (num < 9) {
        return { 'сотни': r[0], 'десятки': r[0], 'единицы': r[0] }
    } else {
        return { 'сотни': r[0], 'десятки': r[0], 'единицы': r[1] }
    }
}

console.log(f(x))
