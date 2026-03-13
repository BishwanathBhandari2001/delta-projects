const express = require ('express');
const app = express();
const port = 8080;
const path = require('path');
const {v4: uuidv4} = require('uuid');

const methodOverride = require('method-override');

//view Engine setup
app.set("view engine", "ejs"); 
app.set("views", path.join(__dirname, "views"));

//middleware
app.use(express.static(path.join(__dirname, "public"))); 
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

//sample data
let posts = [
    {
        id: uuidv4(),
        username: "Shivnath Bhandari",
        caption: "When you realize your Father is also a Man, Living his first life and sacrificing everything for you.",
        image: "https://scontent.fmaa1-2.fna.fbcdn.net/v/t39.30808-6/481997621_654824013722285_8056428817460272550_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=a4lGXDIRWnAQ7kNvwHFyhV4&_nc_oc=AdkSzA-7zIbomyMRYC_iuGNdc90Z-c47UXx13oDly9K35VuQSRc_TX82dAYhudxke_Q&_nc_zt=23&_nc_ht=scontent.fmaa1-2.fna&_nc_gid=GiOyzSw2nAbgIq7ftWoWtw&_nc_ss=8&oh=00_Afsb7_6Mzy3JYRB-iHmzRvXLKDJW-E3kX_2GZ8KWRh1mhw&oe=69A8F8C6"
    },
    {
        id: uuidv4(),
        username: "Sagar Bhandari",
        caption: "— feeling happy at फोटो मत देख पगली अगर यही फोटो देखती रही तो फिर से प्यार हो जायेगा.",
        image: "https://scontent.fmaa1-4.fna.fbcdn.net/v/t39.30808-6/481126467_1369979864179863_4311598603223147979_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=N5vSm9CfzHUQ7kNvwEAUxy8&_nc_oc=AdkIcG5GxaG2SWrL7KuE0D9UdsZcQizfHrLvy70tvMx3_-ZKld2rSesiZFD4FtzBfBA&_nc_zt=23&_nc_ht=scontent.fmaa1-4.fna&_nc_gid=6UCATS-NiuT3x4RkgRaQuw&_nc_ss=8&oh=00_AfvraPK3CCvI9aITmfyMyV-COTLjBiFhtJxEraEDsFBbRA&oe=69A924BE"
    },
    {
        id: uuidv4(),
        username: "S&S Coaching and Tuition Classes",
        caption: "Welcome to S&S Coaching Classes! We provide expert tutoring in Accounting and Science for +2 & Bachelor and (6 to 10) class students. Led by Shiv Bhandari, we focus on personalized guidance and practical learning. Join us to achieve your academic goals!.",
        image: "https://scontent.fmaa1-5.fna.fbcdn.net/v/t39.30808-1/464185415_1232567757888425_2012647779996625091_n.jpg?stp=c20.0.908.908a_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=-8uUi6nbzYQQ7kNvwHakDJW&_nc_oc=AdnLaoGjHFechLRadzEyeaf9YfQzols39a8HLugUEt7w54itvjdRON7eRdmzYZ9ed6g&_nc_zt=24&_nc_ht=scontent.fmaa1-5.fna&_nc_gid=YjJHXe-7wq2pRx8p6Fyn3A&_nc_ss=8&oh=00_AfskKSHSQyFiQ9rNcozUQzlkLkCAFWFPu5pUWiGJ2h_p6g&oe=69A8FCC0"
    },
    {
        id: uuidv4(),
        username: "Bishwanath Bhandari",
        caption: "🗓️Every day is a 🏆new chance to explore🔎 somÉ-Things 🤏New (unique) in the world. 🌅🌍",
        image: "https://scontent.fmaa1-4.fna.fbcdn.net/v/t39.30808-6/466460521_1298572677987249_5137329439392869961_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=wnb5yUtcwmEQ7kNvwHa_cC2&_nc_oc=AdmMYfFBmIWIN8KJzy_dyCXWzg3o_E_b639FpFCcNatDioD2yGJbP6gJnyw3sYHHRbk&_nc_zt=23&_nc_ht=scontent.fmaa1-4.fna&_nc_gid=MArg6fn2s7S9jzxNoFInrg&_nc_ss=8&oh=00_AfumTn6R7TCunATmcnecRot5JJgP225taaIxCeicrzn-QQ&oe=69A90207"
    },
];

//show all posts
app.get("/posts", (req, res) =>{
    res.render("index.ejs", {posts});
});

//create new post
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

//add new created post now
app.post("/posts", (req,res) =>{
    let {username, caption, image} = req.body;
    let newPost = {
        id: uuidv4(),
        username,
        caption,
        image
        };
    posts.push(newPost);
    res.redirect("/posts");
});

// see post in details
app.get("/posts/:id", (req, res) =>{
    let {id} = req.params;
    console.log(id);
    // res.send("request is working");
    let post = posts.find((p) => id === p.id);
    // console.log(post);

    if(!post){
        return res.status(404).send("Post not found.. Reresh page!!!!");
    }
    res.render("show.ejs", {post});
});

//Edit post or update
app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    console.log(id);
    let{caption, image} =req.body;
    let post = posts.find((p) => id === p.id);

    if(!post){
        return res.status(404).send("Post not found.. Reresh page!!!!");
    }
    //update values
    post.caption = caption;
    post.image = image;
    console.log(post);

    res.redirect("/posts");
});

// Update post
app.get("/posts/:id/edit", (req, res) => {
    let{ id } =req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});


//delete
app.delete("/posts/:id", (req, res) => {
    let {id} =req.params;
    posts=posts.filter((p) => id !== p.id);
    // res.send("delete success");

    res.redirect("/posts");
});





//start server
app.listen(port, () => {
    console.log("Listening on port: 8080");
});