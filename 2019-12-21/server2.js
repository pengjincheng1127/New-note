const http = require('http');
const fs = require('fs')

http.createServer(function(req,res){

  /*   fs.readFile('www/1.html',function(err,data){
        if(err){
            res.write('404')
            res.end();
        }
        console.log(data.toString());
        res.write(data.toString())
        res.end()
    }) */

    try {
        let url = req.url;
        if(url === '/'){
            url = '/index.html'
        }
        let data = fs.readFileSync('www/'+url);//如果是某个文件夹下的文件，要加路径
        res.write(data.toString())
        res.end();
    } catch (error) {
        let data = fs.readFileSync('www/404.html')
        res.write(data.toString())
        res.end();
    }


    
}).listen(80)