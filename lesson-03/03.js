// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a,b,c) {
    return a > b || a > c || b > a || b > c || c > a || c > b
}
