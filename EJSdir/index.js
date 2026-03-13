const express = require("express");
const app = express();

const port = 8080;

const path = require("path"); //it use to access views folder from outsid
app.set("views", path.join(__dirname, "/views")); //anydir to runserver 


app.set("view engine", "ejs"); //set ejs

app.get("/", (req, res) => {
    res.render("home.ejs");   //use RENDER to display EJs template with file path
});


app.get("/hello", (req , res) => {
    res.send("hello everyone");
});

app.get("/rolldice", (req , res) => {
    let diceVal = Math.floor(Math.random()*6)+1;
    // res.render("rolldice.ejs", {diceVal: diceVal}); //samename (k-v)
    res.render("rolldice.ejs", {diceVal});  //key:value = obj. u can write any thing as obj like (key-value) pair
});


//create instagram routes + loops
app.get("/ig/:username", (req, res) =>{
    const instaData = require("./data.json");
    let {username} =req.params;
    const data= instaData[username];
                //console.log(data);
    if(data){
        res.render("instagram.ejs", {data});
    }else{
        res.render("error.ejs");
    }
    
});

    //static file
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname, "/public/javascript")));

app.listen(port, ()=>{
    console.log(`Listening on Port ${port}`);
});