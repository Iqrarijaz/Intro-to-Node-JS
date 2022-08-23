const fs=require("fs");
fs.readFile('file.txt','utf8',(error,data)=>{
    console.log(error,data)
});
const fileContent=fs.readFileSync('file.txt');
console.log(fileContent.toString());
console.log("File Reading finished"); 