const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path=require('path');
const app = express();
app.use(cors());


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function(req, file, cb) {
    cb(null,  file.originalname);
  }
});

const upload = multer({ storage: storage });


app.post('/uploadfile', upload.single('file'), (req, res) => {
    
  
  res.send('File received');
});

app.listen(4000, () => {
  console.log('Server running at http://localhost:4000');
});