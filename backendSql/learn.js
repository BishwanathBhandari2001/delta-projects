      //generate fake data using faker package
// const { faker } = require('@faker-js/faker');

// const getRandomUser = ()=> {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// }
// console.log(getRandomUser());

    //mysql connection code
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'practicecollege',
    password: 'My$ql8045'
});

//generate users using faker package
const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');

let getRandomUser = ()=> {
  return [
    faker.string.uuid(),  
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
    ];
  };


  //SQL Queries using Placeholder for dynamic data
  let q= "INSERT INTO user(id,username,email,password) VALUES ?";
  let data =[];  //FOR multiple entry of users
  for(let i = 1; i<=100; i++){
    data.push(getRandomUser());
  }

   //SQL Queries using Placeholder for dynamic data

          //*** FOR SINGLE ENTRY */ 
  // let q= "INSERT INTO user (id, username, email, password)VALUES(?,?,?,?)";
  // let user = [101,"kashiraj","kashi2334@gmail.com","kahsi23"];   //(q,user,(err,result))

              //*** FOR MULTIPLE ENTRY */ 
// let q= "INSERT INTO user (id, username,email,password) VALUES ?" ;
// let users =[
//   [102,"ramesh","ramesh23@gmail.com","ramesh231"], [103,"shyamu","shyam421@gmail.com","shayam53"],[104,"gandav","gandav231@gmail.com","gansda23"],
// ];       //(q,[users],(err,result))


try{
connection.query(q, [data], (err, result)=>{
    if(err) throw err; 
    console.log(result);
    // console.log(result.length);
    // console.log(result[0]);
    // console.log(result[1]); 
    });
} catch(err){
  console.log(err);
     }
 
connection.end(); //connection close
 //use mysql in vs/cli by:  & "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p