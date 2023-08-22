const fs = require('fs');
const Handlebars = require('handlebars');


// http.createServer((request, response)=>{
//   response.writeHead(200, {"Content-Type": "text/html"});
//   response.write("<h1>Hello</h1>");
//   response.end();
// }).listen(port).get('mail/', (request, response) => {
//   let data = {username:"Hari"}
//   response.writeHead(200, {"Content-Type": "text/html"});
//   const htmlmainfile = fs.readFileSync("./login.handlebars");
// const htmlFile = Buffer.from(htmlmainfile).toString();
// const sample = Handlebars.compile(htmlFile);
// const mail = sample(data);
//   response.write(mail);
//   response.end();
//   });


// console.log("Listening at port http://localhost:8700/");
const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000;

app.use(express.json());
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello Hari!');
})

app.get('/mail/:username', (request, response) =>{
  usern = request.params.username;
  let data = {username:usern}
  console.log(data);
  response.writeHead(200, {"Content-Type": "text/html"});
  const htmlmainfile = fs.readFileSync("./login.handlebars");
const htmlFile = Buffer.from(htmlmainfile).toString();
const sample = Handlebars.compile(htmlFile);
const mail = sample(data);
  response.write(mail);
  response.end();
})

//Available Routes
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})


