//used to import, filesystem
//const fs = require('fs');

const http = require('http');





const server = http.createServer((req, res) =>{
    console.log('incoming requst');
    console.log(req.method, req.url);


    if(req.method === 'POST'){
        let body = '';
        req.on('end', ()=> {
            const userName= body.split('=')[1];
            res.end('<h1>' + userName + '</h1>')
        })
    req.on('data', (chunk) => {
        body += chunk;
    })
    }
    else{
        res.end('<form method="POST"><input type="text" name=""username><button typer="submit">Create User</button></form>');
}
})




server.listen(5000);