// class LRUCache {
//     constructor(limit){
//         this.limit = limit
//         this.cache = new Map()
//     }
//     get(key){
//         if(!this.cache.has(key)) return undefined
//         const value = this.cache.get(key)
//         this.cache.delete(key)
//         this.cache.set(key, value)
//         return value
//     }
//     put(key, value){
//         if(this.cache.has(key)) this.cache.delete(key)
//         else if(this.cache.size >= this.limit){
//             this.cache.delete(this.cache.keys().next().value)
//         }
//         this.cache.set(key, value)
//     }
// }

// const  lrucache = new LRUCache(2)
// lrucache.put(1, 2)
// lrucache.put(2,2)
// const res1 = lrucache.get(1);
// lrucache.put(3, 3);
// const res2 = lrucache.get(2);
// lrucache.put(4, 4);
// const res3 = lrucache.get(1);
// const res4 = lrucache.get(3);
// const res5 = lrucache.get(4);
// console.log(res1, res2, res3, res4, res5);


