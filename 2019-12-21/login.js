const http = require('http');
const fs = require('fs');
/*

    注册：
    /register?user = 123
    失败
    {
        code:0,
        msg:'有这个人'
    }
    成功
    {
        code:1
        msg:'可以注册'
    }
    localhost/register?user = 123

*/

/*
user=123&
pass=123&kk='aa'
^[^=]+=[^&]+(&|$)

{
    user:123,
    pass:123,
    kk:'yy'
}
*/ 

function queryString(str){
    let obj ={};
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
        
        if(url.includes('?')){
            //接口
            let ary = url.split('?');
            let jiekou = ary[0]; // /register
            let opt = queryString(ary[1]); // user=123&
            
            switch (jiekou) {
                case '/getname':
                    //返回给前端json
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
                break;
                //注册接口
                case '/register':
                    let msg1 = {
                        code:1,
                        msg:'注册成功'
                    }
                    // console.log(opt)
                    let o = sql.find(item=>item.username === decodeURI(opt.user));
                    //查下有没有这个人
                    if(o){
                        msg1.code = 0;
                        msg1.msg = '有这个人了';
                    }else{
                        if(opt.password){
                            sql.push({
                                id:Date.now(),
                                username:decodeURI(opt.user),
                                password:opt.password
                            });
                            console.log(sql);
                        }else{
                            console.log(2222)
                            msg1.code = 2; //参数不正确
                            msg1.msg = '参数不正确'; 
                            res.writeHead(400,{'content-type':'text/html;charset=utf-8'});
                            res.write(JSON.stringify(msg1));
                            res.end();
                            return;
                        }
                    }
                    // console.log(1111,o);
                    res.setHeader('content-type','text/html;charset=utf-8');
                    res.write(JSON.stringify(msg1));
                    res.end();
                    break;
            
                default:
                    break;
            }
            console.log(url);

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