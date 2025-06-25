const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'kitsw'

});

// data1=[
//     {id:'107',name:'praneeth'},
//     {id:'108',name:'rahul'},
// ]

// dataA =data1.map(rec => [rec.id,rec.name])

const sql="select * from employee;";
// conn.query(sql,[dataA],(err,result)=>{
    conn.query(sql,(err,result)=>{
    if(err)
    {
        console.log("failed to execute"+err);
        return;
    }
    // console.log('recorded');
    console.log(result);

})