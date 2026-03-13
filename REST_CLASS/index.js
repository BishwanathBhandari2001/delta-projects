const express= require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4: uuidv4} = require('uuid');
// uuidv4(); // auto id generate
const methodOverride = require('method-override');

// override with POST having ?_method=PATCH
app.use(methodOverride('_method'));

app.use(express.urlencoded({extended: true})); //parse data by express

app.set("view engine", "ejs" );  //views
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));  //public

let posts = [
    {   
        id: uuidv4(),
        username: "Bishwanath Bhandari",
        content: "i love coding"
    },
    {
        id: uuidv4(),
        username: "Sagar Bhandari",
        content: "He is graphic desinger."
    },
    {
        id: uuidv4(),
        username: "Shiv Kumar",
        content: "He is Bussiness man. Bussiness Specialist."
    },
];

app.get("/posts", (req, res) => {//index (view all)
    res.render("index.ejs", {posts});
    // res.send("server is working");
});

app.get("/posts/new", (req, res) => {  //create new
    res.render("new.ejs");
});

app.post("/posts", (req, res) => { //add new post
    // console.log(req.body);
   let {username, content} = req.body;
   let id = uuidv4();
//    console.log(id);
   posts.push({id , username, content});
   res.redirect("/posts"); 
});

app.get("/posts/:id", (req, res) => {//id to show in details 
    let {id} = req.params;
      console.log(id);
    // res.send("request is working");
    let post = posts.find((p) => id === p.id);
    // console.log(post);
    if (!post) { 
        return res.status(404).send("Post not found"); }
res.render("show.ejs", {post});
});

app.patch("/posts/:id", (req,res) => { //update
    let {id} = req.params;
    // console.log(id);
    let newContent = req.body.content;
    // console.log(newContent);
    let post = posts.find((p) => id === p.id);
    if (!post) { return res.status(404).send("Post not found"); }

    post.content = newContent;
    // console.log(post);
    res.redirect("/posts");
    // res.send("patch request is working");
});

app.get("/posts/:id/edit", (req, res) => { //edit
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

app.delete("/posts/:id", (req, res) => { //delete
    let {id} = req.params;
     posts = posts.filter((p) => id !== p.id);
    //  res.send("delete Success");
     res.redirect("/posts");
})


app.listen(port, () => {
    console.log("Listening to port: 8080");
});