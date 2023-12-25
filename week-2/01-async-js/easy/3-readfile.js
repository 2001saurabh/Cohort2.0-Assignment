const {readFile} = require('node:fs')


readFile('./3-read-from-file.md','utf8', (data, err) =>{
    if(err){
       console.error(err)
    }
    else console.log(data);
})