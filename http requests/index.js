import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>HOME PAGE</h1>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>CONTACT PAGE</h1>");
})
app.get("/about", (req, res) => {
    res.send("<h1>ABOUT PAGE</h1>");
})
app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})