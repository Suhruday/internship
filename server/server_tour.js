// const mysql = require('mysql');

// const conn = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'tour',


// });

// data2=[
//     {$pla},{$name},{$no},{$mail},{$date},{$cls},{$ada},
//  ]
 
// dataB =data2.map(rec => [rec.pla,rec.name,rec.no,rec.mail,rec.date,rec.cls,rec.ada])


// // const sql="create table tourists(Place varchar(30),Name varchar(30),PhoneNo varchar(10),email varchar(90),Date varchar(20),Class varchar(20),Aadhar varchar(50))";
// const sql="select * from tourists;";

// conn.query(sql,[dataB],(err,result)=>{
//     if(err)
//     {
//         console.log("failed to execute"+err);
//         return;
//     }
//     console.log('recorded')
// })






// server.js
// const express = require('express');
// const cors = require('cors');
// const multer = require('multer');
// const mysql = require('mysql');
// const path = require('path');
// const nodemailer = require('nodemailer');

// const app = express();
// const PORT = 4000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Serve uploaded files
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Multer config for image upload
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
//         cb(null, uniqueName);
//     },
// });
// const upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         const allowed = /jpeg|jpg|png/;
//         const ext = path.extname(file.originalname).toLowerCase();
//         const mime = file.mimetype;
//         if (allowed.test(ext) && allowed.test(mime)) {
//             cb(null, true);
//         } else {
//             cb(new Error("Only .jpg, .jpeg, and .png files allowed"));
//         }
//     }
// });

// // MySQL setup
// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'tour',
// });

// conn.connect((err) => {
//     if (err) {
//         console.error('MySQL Connection Failed:', err);
//         return;
//     }
//     console.log('Connected to MySQL');
// });

// // Create table
// const createTableQuery = `
// CREATE TABLE IF NOT EXISTS tourists (
//     Place VARCHAR(30),
//     Name VARCHAR(30),
//     PhoneNo VARCHAR(15),
//     email VARCHAR(90),
//     Date VARCHAR(20),
//     Class VARCHAR(20),
//     Aadhar VARCHAR(100),
//     Passport VARCHAR(100)
// );
// `;
// conn.query(createTableQuery, (err) => {
//     if (err) console.error("Error creating table:", err);
// });

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'perumallasuhrudayreddy@gmail.com',
//         pass: 'mald snnl gglr qfmp', // Consider using environment variables
//     }
// });

// // Booking route
// app.post('/Booking', upload.single('aadhaar'), (req, res) => {
//     const { pla, name, no, mail, date, cls } = req.body;
//     const ada = req.file ? req.file.filename : "";

//     const sql = `
//         INSERT INTO tourists (Place, Name, PhoneNo, email, Date, Class, Aadhar)
//         VALUES (?, ?, ?, ?, ?, ?, ?)
//     `;
//     const values = [pla, name, no, mail, date, cls, ada];

//     conn.query(sql, values, (err) => {
//         if (err) {
//             console.error('Insert failed:', err);
//             return res.status(500).json({ message: "Database error" });
//         }

//         const mailOptions = {
//             from: 'perumallasuhrudayreddy@gmail.com',
//             to: mail,
//             subject: 'Test Mail',
//             text: 'Hi there! Thanks for booking to.',
//         };


//         transporter.sendMail(mailOptions, (err, info) => {
//             if (err) {
//                 console.error('Failed to send mail:', err);
//                 return res.status(500).json({ message: "Booking saved, but email failed" });
//             } else {
//                 console.log('Email sent:', info.response);
//                 res.json({ message: "Booking successfully recorded and email sent!" });
//             }
//         });

//         res.json({
//             message: "Booking successfully recorded!",
//             aadharImageUrl: `http://localhost:${PORT}/uploads/${ada}`
//         });
//     });
// });



// // Start server
// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });







// // require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const multer = require('multer');
// const mysql = require('mysql');
// const path = require('path');
// const nodemailer = require('nodemailer');

// const app = express();
// const PORT = 4000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Multer Config
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
//         cb(null, uniqueName);
//     }
// });

// const upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         const allowed = /jpeg|jpg|png/;
//         const ext = path.extname(file.originalname).toLowerCase();
//         const mime = file.mimetype;
//         if (allowed.test(ext) && allowed.test(mime)) {
//             cb(null, true);
//         } else {
//             cb(new Error("Only .jpg, .jpeg, and .png files allowed"));
//         }
//     }
// });

// // MySQL Setup
// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'tour',
// });

// conn.connect((err) => {
//     if (err) {
//         console.error('MySQL Connection Failed:', err);
//         return;
//     }
//     console.log('Connected to MySQL');
// });

// // Create Table
// const createTableQuery = `
// CREATE TABLE IF NOT EXISTS tourist (
//     Place VARCHAR(30),
//     Name VARCHAR(30),
//     PhoneNo VARCHAR(15),
//     email VARCHAR(90),
//     Date VARCHAR(20),
//     Class VARCHAR(20),
//     Aadhar VARCHAR(100),
//     Passport VARCHAR(100)
// );
// `;
// conn.query(createTableQuery, (err) => {
//     if (err) console.error("Error creating table:", err);
// });

// // Email Setup
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//     }
// });

// // Booking Route
// app.post('/Booking', upload.fields([
//     { name: 'aadhaar', maxCount: 1 },
//     { name: 'passport', maxCount: 1 }
// ]), (req, res) => {
//     const { pla, name, no, mail, date, cls } = req.body;
//     const ada = req.files['aadhaar'] ? req.files['aadhaar'][0].filename : "";
//     const pss = req.files['passport'] ? req.files['passport'][0].filename : "";

//     const sql = `
//         INSERT INTO tourists (Place, Name, PhoneNo, email, Date, Class, Aadhar, Passport)
//         VALUES (?, ?, ?, ?, ?, ?, ?, ?)
//     `;
//     const values = [pla, name, no, mail, date, cls, ada, pss];

//     conn.query(sql, values, (err) => {
//         if (err) {
//             console.error('Insert failed:', err);
//             return res.status(500).json({ message: "Database error" });
//         }

//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: mail,
//             subject: 'Booking Confirmation',
//             text: `Hi ${name},\n\nThanks for booking your tour to ${pla} on ${date}.\n\nRegards,\nTour Team`
//         };

//         transporter.sendMail(mailOptions, (err, info) => {
//             if (err) {
//                 console.error('Failed to send mail:', err);
//                 return res.status(500).json({ message: "Booking saved, but email failed" });
//             }

//             res.json({
//                 message: "Booking successfully recorded and email sent!",
//                 aadharImageUrl: `http://localhost:${PORT}/uploads/${ada}`,
//                 passportImageUrl: `http://localhost:${PORT}/uploads/${pss}`
//             });
//         });
//     });
// });

// // Start Server
// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });






// backend/server.js
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const mysql = require('mysql');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + '-' + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png/;
    const ext = path.extname(file.originalname).toLowerCase();
    const mime = file.mimetype;
    if (allowed.test(ext) && mime.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only .jpg, .jpeg, and .png files allowed'));
    }
  },
});

// MySQL Setup
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root', // change if needed
  password: '', // change if needed
  database: 'tour',
});

conn.connect((err) => {
  if (err) {
    console.error('MySQL Connection Failed:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Create Table if not exists
const createTableQuery = `
CREATE TABLE IF NOT EXISTS tourist (
  Place VARCHAR(30),
  Name VARCHAR(30),
  PhoneNo VARCHAR(15),
  email VARCHAR(90),
  Date VARCHAR(20),
  Class VARCHAR(20),
  Aadhar VARCHAR(100),
  Passport VARCHAR(100)
);
`;
conn.query(createTableQuery, (err) => {
  if (err) console.error('Error creating table:', err);
});

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'perumallasuhrudayreddy@gmail.com',
    pass: '**** **** **** ****',
  },
});

// Booking Route
app.post(
  '/Booking',
  upload.fields([
    { name: 'aadhaar', maxCount: 1 },
    { name: 'passport', maxCount: 1 },
  ]),
  (req, res) => {
    const { pla, name, no, mail, date, cls } = req.body;
    const ada = req.files['aadhaar'] ? req.files['aadhaar'][0].filename : '';
    const pss = req.files['passport'] ? req.files['passport'][0].filename : '';

    const sql = `
      INSERT INTO tourist (Place, Name, PhoneNo, email, Date, Class, Aadhar, Passport)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [pla, name, no, mail, date, cls, ada, pss];

    conn.query(sql, values, (err) => {
      if (err) {
        console.error('Insert failed:', err);
        return res.status(500).json({ message: 'Database error' });
      }

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: mail,
        subject: 'Booking Confirmation',
        text: `Hi ${name},\n\nThanks for booking your tour to ${pla} on ${date}.\n\nRegards,\nTour Team`,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error('Failed to send mail:', err);
          return res.status(500).json({ message: 'Booking saved, but email failed' });
        }

        res.json({
          message: 'Booking successfully recorded and email sent!',
          aadharImageUrl: `http://localhost:${PORT}/uploads/${ada}`,
          passportImageUrl: `http://localhost:${PORT}/uploads/${pss}`,
        });
      });
    });
  }
);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});





