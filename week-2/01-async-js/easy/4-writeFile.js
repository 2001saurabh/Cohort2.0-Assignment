
const { writeFileSync} = require('node:fs');

const data = new Uint8Array(Buffer.from("Hii there saurabh this side!!"))

writeFileSync('./4-write-to-file.md',data, (err) => {
    if(err) throw err;
    console.log(`file has been modified!!`)
})