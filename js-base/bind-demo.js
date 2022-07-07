// 模拟 bind
Function.prototype.bind1 = function () {
    // 将参数拆解为数组
    // arguments可以获取一个函数所有的参数，
    // 是一个列表的形式，变成数组
    const args = Array.prototype.slice.call(arguments)

    // 获取 this（数组第一项）
    const t = args.shift()

    // fn1.bind(...) 中的 fn1
    const self = this

    // 返回一个函数
    return function () {
        // 通过apply去执行函数 第一个参数是this，第二个是函数参数
        return self.apply(t, args)
    }
}

function fn1(a, b, c) {
    console.log('this', this)
    console.log(a, b, c)
    return 'this is fn1'
}

const fn2 = fn1.bind1({x: 100}, 10, 20, 30)
const res = fn2()
console.log(res)