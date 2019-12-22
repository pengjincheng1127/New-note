const http = require('http');
const fs = require('fs');


function queryString(str){    
    let obj = {};
    str.replace(/([^=]+)=([^&]+)&?/g,($0,$1,$2)=>{
        obj[$1] = $2;
    });
    return obj;
}

let sql =[
    {
        id:0,
        username:'尹德智',
        password:123
    },
    {
        id:1,
        username:'冉德鹏',
        password:111
    },
    {
        id:2,
        username:'赵炎',
        password:321
    }
]

http.createServer((req,res)=>{

    let url = req.url;
    if(url !== '/favicon.ico'){
        
        if(url.includes('/post')){
            //接口
            // let opt = queryString(); 
            let html = '';
            //post是一段一段传输的
            //传输的过程中触发的
            req.on('data',(data)=>{
                html += data;
                // console.log(data)
            });
            //传输完触发
            req.on('end',()=>{
                let opt = queryString(html);
               
                let msg = {
                    code:0,
                    msg:'可以注册'
                }
                let o1 = sql.find(item=>item.username === decodeURI(opt.user));
                //查下有没有这个人
                if(o1){
                    msg.code = 1;
                    msg.msg = '有这个人了';
                }
                res.setHeader('content-type','text/html;charset=utf-8');
                res.write(JSON.stringify(msg));
                res.end();
                 })
        }else{
            //文件
            try {
                if(url === '/'){
                    url = '/index.html';
                }
                let data = fs.readFileSync('www'+url);
                res.write(data.toString());
                res.end();
            } catch (error) {
                let data = fs.readFileSync('www/404.html');
                res.write(data.toString());
                res.end();
            }
        }
    }
}).listen(80);