// 类
class Student {
    // 在constructor中传入一些参数，并对这些参数赋值
    constructor(name, number) {
        // 属性
        this.name = name
        this.number = number
        // this.gender = 'male'
    }
    // 方法
    sayHi() {
        console.log(
            // 在es6中，反引号``里面可以用${}来获取变量
            `姓名 ${this.name} ，学号 ${this.number}`
        )
        // 单引号''中使用字符串拼接
        // console.log(
        //     '姓名 ' + this.name + ' ，学号 ' + this.number
        // )
    }
    // study() {

    // }
}

// 通过类 new 对象/实例
const xialuo = new Student('夏洛', 100)
console.log(xialuo.name)
console.log(xialuo.number)
xialuo.sayHi()

// 可以new无数个对象或实例
const madongmei = new Student('马冬梅', 101)
console.log(madongmei.name)
console.log(madongmei.number)
madongmei.sayHi()
