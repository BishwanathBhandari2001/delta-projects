const express = require("express");
const app = express();
const port = 8080;

app.use(express.json()); //parse JSON  POST
app.use(express.urlencoded({ extended: true })); //parse form data POST middleware

app.get("/register", (req, res) => {
    let {user, password} = req.query;
    res.send(`standard GET Response. Welcome ${user}`);
});

app.post("/register", (req, res) => {
    let {user, password} = req.body;
    // console.log(req.body);
    res.send(`standard POST Response. Welcome ${user}`);
});

app.listen(port, () => {
    console.log("app is listening on port: 8080");
});