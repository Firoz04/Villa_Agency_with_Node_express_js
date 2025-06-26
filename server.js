const express = require("express");
const path = require("path");
const port = 5000;
const app = express();

app.use(express.static(path.join(__dirname, "public")));

//Route
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'views', 'index.html'))
});
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/properties',(req, res)=>{
    res.sendFile(path.join(__dirname,'views', 'properties.html'))
});
app.get('/property-details',(req, res)=>{
    res.sendFile(path.join(__dirname,'views', 'property-details.html'))
});
app.get('/contact',(req, res)=>{
    res.sendFile(path.join(__dirname,'views', 'contact.html'))
});
//484 route
app.get((req, res)=>{
    res.sendFile(path.join(__dirname,'views', 'error.html'))
});


app.listen(port, ()=> {
    console.log("Server run:", port);
});