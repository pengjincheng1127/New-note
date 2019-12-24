/*
通过全局对象下的__filename 能够获取当前文件的绝对路径(包含文件本身)
*/

// console.log(__filename);

/*
表示当前执行脚本所在的目录(运行文件的根目录)，不包含文件本身
*/
// console.log(__dirname);

let path = require('path');//找路径

// console.log(path);;//拼路径
// console.log(path.join('wwwroot','/aaa.js'));
// console.log(path.resolve('/','/2.js'));

console.log(path.resolve('wwwroot','./tmp'));//最后一个参数要加./不然出不来

// 自动找当前文件的路径和配置路径进行连接
console.log(path.resolve(__dirname,'./1.js'));





