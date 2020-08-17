class LazyManClass {
    constructor(name) {
        this.taskList = [];
        this.name = name;
        console.log(`Hi I am ${this.name}`);
        setTimeout(() => {
            this.next();
        }, 0);
    }
    eat(name) {
        let that = this;
        let exe = function () {
            return function () {
                console.log(`I am eating ${name}`)
                that.next();
            }
        }
        this.taskList.push(exe());
        return this;
    }
    sleep(time) {
        let that = this
        let exe = function () {
            return function () {
                setTimeout(() => {
                    console.log(`等待了${time}秒...`)
                    that.next()
                }, time * 1000);
            }
        }
        this.taskList.push(exe());
        return this;
    }
    next() {
        var fn = this.taskList.shift();
        fn && fn();
    }
}
class LazyManClass1 {
    constructor(name) {
        this.name = name
        this.taskList = []
        console.log(`我是${name}`)
        let that = this
        setTimeout(() => {
            that.next()
        }, 0);
    }
    eat(name) {
        let that = this
        let exe = function () {
            return function () {
                console.log(`我中午吃了${name}`)
                that.next()
            }
        }
        this.taskList.push(exe())
        return this
    }
    sleep(time) {
        let that = this
        let exe = function () {
            return function () {
                setTimeout(() => {
                    console.log(`我睡了${time}秒`)
                    that.next()
                }, time * 1000);
            }
        }
        this.taskList.push(exe())
        return this
    }
    next() {
        let fn = this.taskList.shift()
        fn && fn()
    }
}
function lazyman(name) {
    return new LazyManClass1(name)
}
lazyman('Tony').eat('lunch').sleep(10).eat('dinner')

// 实现 (5).add(3).minus(2) 功能
Number.prototype.add = function (n) {
    return this.valueOf() + n;
};
Number.prototype.minus = function (n) {
    return this.valueOf() - n;
};
