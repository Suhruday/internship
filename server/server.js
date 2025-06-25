// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     fs.readFile('sinfo.txt', 'utf-8', (err, data) => {
//         if (err) {
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end('Error reading the file.');
//         } else {
//             res.writeHead(200, { 'Content-Type': 'text/plain' });
//             res.end(data);
//         }
//     });
// });

// server.listen(4000, () => {
//     console.log('Application running on http://localhost:4000/');
// });

// const express = require('express');
// const cors = require('cors');
// const bodyp = require ('body-parser')// used for convert json to object type
// const app = express()
// const fs=require("fs")
// app.use(cors())
// app.use(bodyp.json())
// app.post("/save",(req,res)=>{
//     const {rno}= req.body;

//     res.send("ok")
// });

// app.post("/getDetails",(req,res)=>{
//     const {rno} = req.body;
//     fs.readFile("sinfo.txt",'utf-8',(err,f_content)=>{
//         const records=f_content.split('\n');
//         var flag=0;
//         for(var i=0;i<records.length;i++)
//         {
//             rec = records[i].split(",")
//             if(rec[0]==rno)
//             {
//                 res.send(records[i])
//                 flag=1;
//             }
//         }
//         if(flag==0)
//         {
//             res.send("record does not exist")
//         }
//     })
// })

// app.listen(4000,()=>{
//     console.log('running on http://localhost:4000');
// })


const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/Booking", (req, res) => {
  const { pla, name, no, mail, date, cls, ada } = req.body;

  if (!pla || !name || !no || !mail || !date || !cls || !ada) {
    return res.status(400).send("All fields are required.");
  }

  const newRecord = `${pla},${name},${no},${mail},${date},${cls},${ada}\n`;

  fs.appendFile("sinfo.txt", newRecord, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return res.status(500).send("Failed to save booking.");
    }
    res.send("Booking saved successfully.");
  });
});

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});

