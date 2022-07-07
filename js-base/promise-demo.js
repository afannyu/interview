function loadImg(src) {
    const p = new Promise(
        (resolve, reject) => {
            const img = document.createElement('img')
            // 图片加载完之后 
            // 去执行resolve函数，将图片传进来
            img.onload = () => {
                resolve(img)
            }
            img.onerror = () => {
                const err = new Error(`图片加载失败 ${src}`)
                reject(err)
            }
            img.src = src
        }
    )
    return p//返回一个Promise对象
}

const url1 = 'https://img1.sycdn.imooc.com/5d5b4b180001a9f311761290.png'
const url2 = 'https://img1.sycdn.imooc.com/5d5b4cb9000108a009021422.png'

loadImg(url1).then(img1 => {
    console.log(img1.width)
    return img1 // return一个普通对象 
}).then(img1 => { //下一个then里面就可以接收到这个对象img1
    console.log(img1.height)
    return loadImg(url2) // return一个promise实例
}).then(img2 => { //下一个then里面接收到的就是loadImg(url2)加载完成之后的图片对象img2
    console.log(img2.width)
    return img2
}).then(img2 => {
    console.log(img2.height)
}).catch(ex => console.error(ex))
