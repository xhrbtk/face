
// // 组合继承

// function SuperType(name){
//     this.name = name
//     this.colors = ['red', 'green']
// }

// SuperType.prototype.sayName = function(){
//     console.log(this.name)
// }

// function SubType(name, age){
//     SuperType.call(this, name)
//     this.age = age
// }

// SubType.prototype = new SuperType()

// SubType.prototype.sayAge = function(){
//     console.log(this.age)
// }
// console.log(SubType.prototype.__proto__ == SuperType.prototype)
// let x = new SubType('xx', 38)
// console.log(x.sayName())
// console.log(x.sayAge())
    
 
//  盗用构造函数  但是并没有真的实现继承 因为子类不能使用父类的方法

// function SuperType(name){
//     this.colors = ['red', 'blue']
//     this.name = name
// }
// SuperType.prototype.sayName = function(){
//     console.log(this.name)
// }

// function SubType(){
//     SuperType.call(this, 'nichlas')
// }

// let x = new SubType()

// console.log(x.name)
// console.log(x.sayName()) 错误

// 原型式继承 ---Object.create()
function object(o){
    function F(){}
    F.prototype = o
    return new F()
}

// let person = {
//     name: 'xx'
// }
// let anotherPerson = object(person)
// console.log(anotherPerson.__proto__ == person) // true

// 寄生式继承 通过寄生继承给对象添加函数会导致函数难以重用 与构造函数模式类似
// function createAnother(original){
//     let clone = object(original) // 通过调用函数创建一个新对象
//     clone.sayHi = function(){   // 以某种方式增强这个对象
//         console.log('hi')
//     }
//     return clone
// }


// 寄生组合继承 
// 组合继承的问题： 父类构造函数始终会被调用两次 一次是创建子类原型时调用 一次是子类构造函数中调用

function SuperType(name){
    this.name = name
    this.colors = ['red', 'green']
}
SuperType.prototype.sayName = function(){
    console.log(this.name)
}
function SubType(name, age){
    SuperType.call(this, name)  // 第二次调用
    this.age = age
}

function inheritPrototype(SubType, SuperType){
    let prototype = object(SubType, SuperType)
    prototype.constructor = SubType
    SubType.prototype = prototype
}
inheritPrototype(SubType, SuperType)

