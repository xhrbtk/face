var isxx = false;
var isnumber = 6;
var namexx = 'xx';
var list = [1, 2];
var list1 = ['a'];
// 数组泛型 Array<元素类型>
var list3 = [1, 3];
var list4 = ['1'];
// 元组 表示一个已知元素数量和类型的数组 各元素的类型不必相同 
var x;
x = ['hello', 3];
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
console.log('xx');
