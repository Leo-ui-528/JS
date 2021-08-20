function mathOperation(a, b, operation) {
    switch (operation) {
        case 'd':
            function d(a, b) {
                return a / b;
            }
            console.log(d(8, 4))
            break
        case 'sum':
            function sum(a, b) {
                return a + b;
            }
            console.log(sum(2, 4))
            break
        case 'r':
            function r(a, b) {
                return a - b;
            }
            console.log(r(5, 3))
            break
        case 'm':
            function r(a, b) {
                return a - b;
            }
            console.log(r(5, 3))
            break
        default:
            console.log('nothing')
            break

    }
}
console.log(mathOperation(8, 4, 'sum'))