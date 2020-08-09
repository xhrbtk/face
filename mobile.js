```JavaScript
// px 方式
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px'
// vw 方式
document.documentElement.style.fontSize = 100 / 3.75 + 'vw'
/*
    这样写逻辑很简单
    我们的设计标准图是 375px(也可以说是标准设备宽度), 为了方便计算 先暂定转换比例 1rem = 100px
    那么我们的设计宽度就是 3.75rem  (如果设计图是 750px  那么设计宽度就是 7.5rem)
    那么如何实现不同设备的宽度等比例于标准设备宽度呢?

    我们先求出标准3.75rem设计宽度下,我们的可得到的转换比例
    推导 (3.75rem * 转换比例px/rem = 设备宽度px) => (设备宽度 / 3.75 = 转换比例) =>
    => document.documentElement.clientWidth / 3.75  这就是我们求得的转换比例
    => 也就是 375(标准设备宽度) / 3.75 = 100 即375设备下,我们的基准是100 1rem=100px
    => 其他设备 / 标准设备 = 其他比例 / 100(基准比例) = 实际比例  => 实际比例 * 100 = 实际转换比例

    ui设计图永远都是基准设备 即1rem = 100px 所以 ui 60pt计算就是 60 / 100 = 0.6rem

    如果是vw  就是 100 / 3.75 + 'vw' (100  就是设备宽度,vw的意义就是100vw等于document.documentElement.clientWidth+'px')
*/
```

// px是相对于显示器屏幕分辨率而言的
// em是相对长度单位 相对于当前对象内文本的字体尺寸 参考物是父元素的font-size 如果当前父元素的字体尺寸未设置 则相对于浏览器的默认字体尺寸
// rem 是相对于html根元素的字体大小来计算的长度单位
// vw是相对viewport的宽度而定的 长度等于 viewport宽度的1/100  假如浏览器的宽度为200px 那么1vw就等于2px
// vh是相对于viewport的高度而定的 长度等于viewport高度的1/100 