// cache-chontrol Expires 属于强缓存 last-modified Etag 属于协商缓存

// 如果max-age和Expires同时存在，则被Cache-Control的max-age覆盖。

// cache-control: max-age

// Expires 缓存过期时间 用来指定资源到期的时间 是服务器端的具体的时间点

// [Cache-Control]优先级高于[Expires]

// 强缓存 不会向服务器发送请求 直接从缓存中读取资源
// 协商缓存 强制缓存失效后 浏览器携带缓存标识向服务器发起请求 由服务器根据缓存标识决定是否使用缓存的过程 协商缓存生效 返回304 和 not modified

// 1 Last-Modified和If-Modified-Since
// 缺点：1、某些服务端不能获取精确的修改时间  2、文件修改时间改了，但文件内容却没有变

// etag 是对该资源的一种唯一标识  只要资源有变化 etag就会重新生成 在下次向服务器发送请求的时候 会将
// 上一次返回的etag值放在 if-none-match里面 服务器只需要比较客户端传阿里的if-none-match跟自己服务器上该
//资源的etag是否一致

// 2.2.3 协商缓存两种方式的对比
// 优先级上，服务器校验优先考虑Etag
// 首先在精确度上，Etag要优于Last-Modified，Last-Modified的时间单位是秒，如果某个文件在1秒内改变了多次，那么他们的Last-Modified其实并没有体现出来修改
// ，但是Etag每次都会改变确保了精度；如果是负载均衡的服务器，各个服务器生成的Last-Modified也有可能不一致。
// 性能上，Etag要逊于Last-Modified，毕竟Last-Modified只需要记录时间，而Etag需要服务器通过算法来计算出一个hash值。
