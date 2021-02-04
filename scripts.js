//Task 1
console.log('Task 1');
let arr = [1,2,3,4,5];
for (let i = 0; i<arr.length; i++) {
    console.log(arr[i]);
}
//Task 2
console.log('Task 2');
let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let n = 0; n<arr2.length; n++) {
    if (arr2[n]<-3 && arr2[n]>-10)
    console.log(arr2[n]);
}
//Task 3
console.log('Task 3');
let arr3 = [], result = 0;
for (let p = 23; p<=57; p++) {
    arr3[p] = p;
    result += arr3[p];
}
console.log(arr3);
console.log('Сумма элементов массива: ' + result);
//Второй способ
let z = 23;
while (z<=56) {
    z++;
    arr3[z] = z;
}
result += arr3[z];
console.log(arr3);
console.log('Сумма элементов массива: ' + result);
//Task 4
console.log('Task 4');
let arr4 = ['10', '20', '30', '50', '235', '3000'];
console.log(arr4.filter(num => ['1','2','5'].includes(num.toString()[0])));
//Task 5
console.log('Task 5');
let week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
for (let j = 0; j<week.length; j++){
    if (j==5 || j==6) {
        console.log('<b>' + week[j] + '</b>');
    } else {
    console.log(week[j]);
}
}
//Task 6
console.log('Task 6');
let food = ['Молоко', 'Хлеб', 'Мука', 'Вода'];
console.log(food[food.length] = ('Макароны'));
console.log(food);
//Task  7
console.log('Task 7');
let arr7 = [];
while (true) {
    let q = prompt('Введите число');
    if (q=== '') {
        break;
    } else if (q===null || isNaN(q)) {
        break;
    } else {
        arr7.push(Number(q));
    }
}
console.log(arr7);
arr7.sort();
arr7.sort(function(a,b){
    return a-b;
});
console.log('Сортировка ' + arr7);
//Task 8;
console.log('Task 8');
let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
console.log('Массив: ' + arr8);
let a = arr8.reverse();
console.log('Массив в обратном порядке: ' + a);
//Task 9
console.log('Task 9');
let arr9 = [5, 9, 21, , , 9, 78, , , , 6];
for (let perem of arr9) {
    if (perem == undefined) {
        console.log(perem);        
    }
}
//Task 10
console.log('Task 10');
let mas = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];
let res = 0;
if (mas.indexOf(res) != -1) {
    let item1 = mas.indexOf(0)+1;
    let item2 = mas.lastIndexOf(0);
    console.log(mas.slice((item1),(item2)));
    let sumArr = mas.slice((item1),(item2)).reduce(function(sum, item) {
        return sum + item
    });
console.log(sumArr);
} else {
    console.log(res);
}