### web 应用中的对称加密
- jwt 加密解密需要一个key1
- session id 加密解密需要一个key2

### key们存在哪儿
- 存在git里会被实习生看到 存在自己电脑里需要传来传去（不安全）

### rails 解决方法
- master.key + keys ==> encrypted
- encrypted + master.key ==> keys