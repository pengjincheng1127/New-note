const http = require('http');

let app = http.createServer(function(request,response){
    //   console.log('来了');
    if(request.url !=='/favicon.ico'){
        let num = (/user=(\d)/.exec(request.url.split('?')[1]))[1];
        console.log(num);
        response.setHeader()
        if(num === '1'){
            response.write('{"name":"ydz"}');
        }else if(num === '0'){
            response.write('{"name":"rdp"}')
        }
        response.end();
    }
}); 

app.listen(80)