const fs = require("fs");

fs.readFile("../docs/test.txt", (err, data)=>{
    if(err){
        console.log(err);
    }

    console.log(data.toString())
})