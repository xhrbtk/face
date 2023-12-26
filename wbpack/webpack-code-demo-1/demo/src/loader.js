// module.exports = function loader(source) {
//     // const options = this.getOptions();
//     // console.log('options', options)
//     console.log('source', source.resource)
//     const transformedCode = source.replace(/console\.log\('hello world'\)/g, 'console.log(\'hello yunyunzhi\')');

//     return transformedCode;
// }

// module.exports = function loader(source) {
//     const options = this.getOptions();
//     console.log('options', options)
//     source = source.replace(/\[name\]/g, options.name);
//     console.log('source', source)

//     // return `export default ${JSON.stringify(source)}`;
// }


//... 
module.exports = function rawLoader(source) {
    const transformedCode = source.replace(/console\.log\('hello world'\)/g, 'console.log(\'hello yunyunzhi\')');
    return module.exports = transformedCode
}
