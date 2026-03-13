        //building a server
const express = require("express");
// import express from 'express'

const app = express();  //given by lib
// console.dir(app);

let port = 3000; //8080

app.listen(port , ()=> {
    console.log(`(app listening)Server is running on http://localhost:${port}`);
});

            // Route using   app.get()
// app.get("/", (req, res)=> {
//     res.send("This is a Home Page");
// });

// app.get("/apple", (req, res)=> {
//     res.send("This is a apple page");
// });

// app.get("/orange", (req, res)=> {
//     res.send("this is a orange page");
// });

// app.get("/help", (req, res)=> {
//     res.send("this is for your help page");
// });

//     ///for others all route which is not exits in projects
// app.get("/:anything", (req, res) => {
//     res.send("this path is not exists");
// });

// app.post("/", (req, res)=> {
//     res.send("this is a post path");
// });

            ///path parameters
// app.get("/", (req, res)=>{
//     res.send("This is home page");
// });

// app.get("/:username/:id", (req, res) => {
//     // console.log(req.params);       //req.params

//     let {username, id} = req.params;  //store values

//      let htmlcode = `<h1> Welcome to the Page of @ ${username} with userid: ${id} </h1>`;
//     res.send(htmlcode);
// });




        /// query string search
app.get("/", (req, res)=> {
    res.send("this is home Page");
});

app.get("/search", (req, res) => {
    // console.log(req.query);    //req.query

    let {q}= req.query;  //store value

    let code = `<h1> Search Results for ${q} . </h1>`;

    if(!q){
        res.send(`<h1> Nothing is Searched... </h1>`);
    }
    res.send(code);

});


// app.use((req, res)=> {
//     // console.log(req);
//     console.log("Request Received");

    //sending response 
    // res.send("This is a response of your Request");

    // res.send({
    //     name: "BishwanathBhandari",
    //     Age: 24,
    //     Address: "Sahodwa,pipara mahottari-Nepal"
    // });

//     let htmlCode = "<h1> Favourite Fruits </h1>  <ul> <li> Apple</li> <li> Mango</li> <li> Orange</li> <li> Papaya</li><li> litchi</li> </ul>"
//     res.send(htmlCode);

// });

