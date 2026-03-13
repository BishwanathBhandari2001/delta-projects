const express = require('express');
const app = express();
const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const methodOverride = require('method-override');

// override with POST having ?_method=PATCH
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({extended: true}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'practicecollege',
    password: 'My$ql8045',
});

let getRandomUser = ()=>{
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

// let q= "INSERT INTO user (id, username, email, password) VALUES ?";
let data = [];
for(let i =1; i<=100; i++){
    data.push(getRandomUser());
}

// HOme route TO SHOW ALL USERS of DB
app.get("/", (req,res) =>{
    let q= `SELECT COUNT(*) FROM user`;
    try{
        connection.query(q, (err,result) =>{
            if(err) throw err;
            console.log(result[0]["COUNT(*)"]);
            let count = result[0]["COUNT(*)"];
            res.render("home.ejs", {count});
        });
    }catch(err){
        console.log(err);
        res.send("some error in DB");
    }
});

//show user details
app.get("/user", (req, res)=> {
    let q= `SELECT id, username, email FROM user`;
     try{
        connection.query(q, (err,users) =>{
            if(err) throw err;
            // console.log(result);
            res.render("showusers.ejs", {users});
        });
    }catch(err){
        console.log(err);
        res.send("some error in DB");
    }
});

//Get id to edit 
app.get("/user/:id/edit", (req, res) =>{

    let {id} = req.params;
    let q= `SELECT * FROM user WHERE id = '${id}' `;
    try{
        connection.query(q, (err,result) =>{
            if(err) throw err;
            // console.log(result);
            let user = result[0];
            res.render("edit.ejs",{user});
        });
    }catch(err){
        console.log(err);
        res.send("some error in DB");
    }
});

//UPDATE user detail to update
app.patch("/user/:id", (req, res) =>{
    let {id} = req.params;
    let {username:newUser, password: formPass} = req.body;
    //filter user using id to match
    let q= `SELECT * FROM user WHERE id = '${id}' `;
    
   try{
        connection.query(q, (err,result) =>{
            if(err) throw err;
            // console.log(result);
            let user = result[0];
            //check password
            if(formPass != user.password){
                res.send("WRONG PASSWORD");
            }else{
                //update username
                let q2= `UPDATE user SET username= '${newUser}' WHERE id = '${id}'`;
                connection.query(q2, (err, result) =>{
                    if (err) throw err;
                    res.redirect("/user");
                    // res.send(result);
                });
            }
            // res.send(user);
        });
    }catch(err){
        console.log(err);
        res.send("some error in DB");
    }
});

//Create new user form
app.get("/user/new", (req,res) => {
    res.render("new.ejs");
});
//Add new user 
app.post("/user", (req, res) =>{
    let id= uuidv4();
    let{username,password,email} =req.body;
    let q= `INSERT INTO user (id,username,password,email) VALUES (?,?,?,?)`;
    try{
        connection.query(q, [id,username,password,email],(err,result) =>{
        if(err) throw err;
        console.log(result);
        res.send("working");
        });

    }catch(err){
        console.log(err);
        res.send("some error in DB");
    }
});


//Enter Details before delete User
app.get("/user/:id/delete", (req,res) =>{
    let{id} = req.params;
    let q= `SELECT * FROM user WHERE id = ? `;

    try{
        connection.query(q, [id], (err,result) => {
            if (err) throw err;
            let user = result[0];
            console.log(user);
            res.render("delete.ejs" , {user});
        });
    } catch(err){
        console.log(err);
        res.send("some error in DB");
    }
});

//DELETE USER from DB
app.delete("/user/:id",(req, res) =>{
    let { password } = req.body;
    let {id} = req.params;
    console.log(id);
    let q= `SELECT * FROM user WHERE id = ?`;
    try{
        connection.query(q, [id],(err,result) =>{
            if(err) throw err;
            let user = result[0];
            console.log(result);
            //check password
            if(user.password != password){
                res.send("WRONG PASSWORD");
            }else{
                //Delete user
                let q2= `DELETE FROM user WHERE id = ? `;   
                 connection.query(q2,[id], (err, result) =>{
                    if (err) throw err;
                    res.redirect("/user");
                    // res.send(result);
                });
            } 
        });
        
    }catch(err){
        console.log(err);
        res.send("some error in DB");
    }
});


app.listen("8080", () =>{
    console.log("Server is listening on port: 8080");
})