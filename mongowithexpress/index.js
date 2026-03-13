const express = require('express');
const app= express();
const path = require('path');
const mongoose = require('mongoose');
const Chat = require('./models/chat');
const methodOverride = require("method-override");

// override with POST having ?_method=
app.use(methodOverride("_method"));
//middleware
app.use(express.static(path.join(__dirname, "public"))); 
app.use(express.urlencoded({ extended: true })); //parse form data
app.use(express.json());

//view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

//mongoose connection
main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};


//Index home Route
app.get("/chats", async (req,res)=>{
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs",{chats});
});

//New chat route
 app.get("/chats/new", (req, res) =>{
    res.render("new.ejs");
 });

//Create chat route
app.post("/chats", (req, res) =>{
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    // console.log(newChat);
    // res.send("working");
    newChat.save().then((res)=>{console.log("Chat was Saved.")}).catch((err)=>{console.log(err)});
    res.redirect("/chats");
});

//find & Edit chat route
app.get("/chats/:id/edit", async (req,res) =>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
});

//Update chat route
app.put("/chats/:id", async (req,res) => {
    let{id} = req.params;
    let{msg: newMsg} = req.body;
    console.log(newMsg);
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        {msg: newMsg,
            updated_at: new Date(),
        },
        {runValidators:true, new: true});
    console.log(updatedChat);
    res.redirect("/chats");
});

//Delete chat Route
app.delete("/chats/:id", async (req,res)=>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})


app.get("/",(req, res) =>{
    res.send("Connection successful");
});

//server code
app.listen(8080, ()=>{
    console.log("app listening on Port:8080");
});



// // Data insertion
// const chat1 = new Chat({
//     from: "Bishwanath",
//     to: "kashi raj",
//     msg: "hello when will our next exam ?",
//     created_at: new Date(),
// });
// //save in DB
// chat1.save().then((res)=>{console.log(res)});