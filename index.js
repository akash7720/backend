// console.log("Hiiiiii")

// import fs from 'fs';
// fs.readFile('text.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });


// const content = 'Hi';
// // Create a new file and write content to it
// fs.writeFile('awdiz.txt', content, (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//   } else {
//     console.log('File created and content written successfully.');
//   }
// });



import os from 'os'

// console.log('platform :-', os.platform())

// console.log("Relase",os.release())

// console.log('Hostname',os.hostname())

// console.log('CUPs',os.cpus())

// console.log('Total memory',os.totalmem()/1024,'MB')

// console.log('Free memory',os.freemem()/1024,'MB')

// console.log('Network interfaces',os.networkInterfaces())

// console.log("Constants",os.constants)



// import EventEmitter from 'events'

// const myEmitter = new EventEmitter();

// function greeting(){
//   console.log("Hello")

// }

// myEmitter.on("Awdiz",greeting)
// myEmitter.emit('Awdiz')



// function callAbsent(){
//   console.log("Call to students who are absent.")

// }

// myEmitter.on("Absent",callAbsent)
// myEmitter.emit('Absent')



// import http from 'http';

// const books = ["ABC","XYZ","PQR"];

// const server = http.createServer((req,res)=>{
//   if(req.method === "GET" && req.url ==="/api/books"){
//       res.end(JSON.stringify(books))
//   }else if(req.method === "GET" && req.url ==="/api/akash")
//     res.end("HI from Akash")
//   else{
//     res.end("Method or url not found...")
//   }
// })

// server.listen(8000,()=>{
//   console.log("Server is running on port 8000")
// })

console.log("Hi 1");
setTimeout(()=>{console.log("Hi 2")},3000)
console.log("Hi 3");
setTimeout(()=>{console.log("Hi 4")},5000)
