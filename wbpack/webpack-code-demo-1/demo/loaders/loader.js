// 创建自定义的 loader  
module.exports = function (source) {
  // 使用正则表达式匹配 console.log('hello world') 语句  
  console.log('source*******', source)
  source = source.replace('hello world', 'xxxx')

  return source;
};