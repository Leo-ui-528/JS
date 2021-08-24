var arr = new Array(6, 7, 11, 2, 4, 6, 45);
var sum = 0;
function countBasketPrice(arra) {
    for (var i = 0; i < arr.length; i++) {
        sum = sum + parseInt(arr[i]);
    }
    console.log(sum);
}
countBasketPrice(arr)